
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Component/Header';
import Home from './Component/Home';
import About from './Component/About';
import Skills from './Component/Skills.jsx'
import Contact from './Component/Contact';
import Rough from './Component/Rough';
import Project from './Component/Project.jsx'
function App() {
  return (
<>
<Header/>
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/about' element={<About/>} />
  <Route path='/skills' element={<Skills />} />
  <Route path='/project' element={< Project />}/>
  <Route path='/connectwithsaksham' element={< Contact />}/>
  <Route path='/Rough' element={< Rough />}/>
</Routes>
</>
  );
}

export default App;
