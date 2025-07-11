import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

import ProjectDetail1 from "./components/Project/project1";
import ProjectDetail2 from "./components/Project/project2";
import ProjectDetail3 from "./components/Project/project3";
import ProjectDetail4 from "./components/Project/project4";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
   
    <Router>
    <Routes>
      <Route path="/My_portfolio" element={
        <>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </>
      } />
      <Route path="/project/1" element={<ProjectDetail1 />} />
      <Route path="/project/2" element={<ProjectDetail2 />} />
      <Route path="/project/3" element={<ProjectDetail3 />} />
      <Route path="/project/4" element={<ProjectDetail4 />} />      
      
    </Routes>
  </Router>
  );
}

export default App;
