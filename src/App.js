import './App.css';
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import MurojaatUchun from "./Pages/MurojaatUchun";
import Service from "./Pages/Service";
import Info from "./Pages/Info";
import AboutUs from "./Pages/AboutUs";
import Blog from "./Pages/Blog";
import Doctors from './Pages/Doctors';
import Contact from './Pages/Contact';
import Footer from './Pages/Footer';
import AOS from 'aos'
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    AOS.init({})
  }, [])
  return (
    <div className="App xl:container mx-auto">
      <Navbar />
      <Home />
      <MurojaatUchun />
      <Service />
      <Info />
      <AboutUs />
      <Blog />
      <Doctors />
      <Contact />
      <Footer /> 
    </div>
  );
}

export default App;
