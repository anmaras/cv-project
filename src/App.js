import { useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import FormEducationList from './Components/Form/FormEducation/FormEducationList';
import FormProExperienceList from './Components/Form/FormExperience/FormProExperienceList';
import FormPersonalInfo from './Components/Form/FormPersonalInfo/FormPersonalInfo';
import Form from './Components/Form/Form';
import Cv from './Components/Cv/Cv';
import { FaGithub } from 'react-icons/fa';
import './index.css';

function App() {
  const year = new Date().getFullYear();
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <header>
        <h1>Cv Builder</h1>
      </header>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Form />}>
              <Route index element={<FormPersonalInfo />} />
              <Route path="education" element={<FormEducationList />} />
              <Route path="experience" element={<FormProExperienceList />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <Cv ref={componentRef} />
        <button className={`print-btn btn-style-2`} onClick={handlePrint}>
          PRINT
        </button>
      </main>
      <footer>
        <h2>Anthony Maras </h2>
        <p>{year}</p>
        <a
          href="https://github.com/anmaras/cv-project"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </footer>
    </>
  );
}

export default App;
