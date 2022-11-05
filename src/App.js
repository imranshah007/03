import BasicDetails from './Resume/BasicDetails';
import Experience from './Resume/Experience';
import Hobbies from './Resume/Hobbies';
import Skills from './Resume/Skills';
import './App.css';

function App() {
  return (
    <div className="App">
    <BasicDetails />
    <Experience />
    <Skills />
    <Hobbies />
    
    </div>
  );
}

export default App;
