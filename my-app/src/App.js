import Navbar from './Components/Navbar';
import Landing from './Pages/Landing'
import About from './Pages/AboutMe';
import Projects from './Pages/Projects';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Landing />
      <About />
      <Projects />
    </div>
  );
}

export default App;
