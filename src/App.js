import Cv from './Components/Cv/Cv';
import Form from './Components/Form/Form';
import './index.css';

function App() {
  return (
    <>
      <header>
        <h1>Cv Generator</h1>
      </header>
      <main>
        <Form />
        <Cv />
      </main>
      <footer>
        <h2>footer</h2>
      </footer>
    </>
  );
}

export default App;
