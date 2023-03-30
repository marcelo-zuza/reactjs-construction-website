import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
// Routes
import Home from './routes/Home';
import Contact from './components/Contact'
import Footer from './components/Footer';
import About from './components/About';
import Services from './components/Services';
import Project from './components/Project';
import AboutMore from './components/AboutMore';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/services' element={<Services/>} />
            <Route path='/project' element={<Project/>} />
            <Route path='/about/aboutmore' element={<AboutMore/>} />
        </Routes>
        <Contact/>
        <Footer/>
      </div>
    </Router>

  );
}

export default App;
