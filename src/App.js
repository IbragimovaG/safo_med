import './App.css';
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import MurojaatUchun from "./Pages/MurojaatUchun";
import Service from "./Pages/Service";
import Info from "./Pages/Info";
import AboutUs from "./Pages/AboutUs";

function App() {
  return (
    <div className="App w-full">
<Navbar/>
        <Home/>
        <MurojaatUchun/>
        <Service/>
        <Info/>
        <AboutUs/>
    </div>
  );
}

export default App;
