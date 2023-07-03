import Navbar from './Components/Navbar';
import Landing from './Pages/Landing'
import About from './Pages/AboutMe';
import Projects from './Pages/Projects';
import Resume from './Pages/Resume';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Landing />
      <About />
      <Projects />
      <Resume />
    </div>
  );
}

export default App;
