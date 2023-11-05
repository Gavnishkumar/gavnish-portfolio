
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Skill from './components/Skill';
import Contact from './components/Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNavbar from './components/MyNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import bg from './image/bg2.jpg';
import Education from './components/Education';
import Projects from './components/Projects';
function App() {
  
  return (
    <div className="App" style={{
      'height':'100%',
      'background':`url(${bg})`,
      'backgroundSize':'cover',
      'backgroundRepeat':'repeat-y'
      // 'backgroundRepeat':'repeat',
    }}>
      <BrowserRouter>
      <MyNavbar/>
      <Routes>
        <Route exact path="/" element={<Home />}/>
          <Route exact path="/education" element={<Education />} />
          <Route exact path="/skills" element={<Skill />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/contact" element={<Contact />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
