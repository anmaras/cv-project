import Cv from './Components/Cv/Cv';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FormEducationList from './Components/Form/FormEducation/FormEducationList';
import FormProExperienceList from './Components/Form/FormExperience/FormProExperienceList';
import FormPersonalInfo from './Components/Form/FormPersonalInfo/FormPersonalInfo';
import Form from './Components/Form/Form';
import { FaGithub } from 'react-icons/fa';
import './index.css';

function App() {
  const year = new Date().getFullYear();
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
        <Cv />
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
