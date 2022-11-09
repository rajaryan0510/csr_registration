import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import DanceClub from "./components/Culture/DanceClub";
import DramaClub from "./components/Culture/DramaClub";
import LanguageClub from "./components/Culture/LanguageClub";
import MusicClub from "./components/Culture/MusicClub";
import PaintingClub from "./components/Culture/PaintingClub";
import PhotographyClub from "./components/Culture/PhotographyClub";
import Geography from "./components/Master/Geography/Geography";

import Rate from "./components/Master/Rate/Rate";
import Service from "./components/Master/Service/Service";
import EcoClub from "./components/Responsibilities.jsx/EcoClub";
import NccClub from "./components/Responsibilities.jsx/NccClub";
import NssClub from "./components/Responsibilities.jsx/NssClub";
import RoadSafetyClub from "./components/Responsibilities.jsx/RoadSafetyClub";
import YrcClub from "./components/Responsibilities.jsx/YrcClub";
import AdventureClub from "./components/Sports/AdventureClub";
import HealthClub from "./components/Sports/HealthClub";
import IndoorAndOutdoorClub from "./components/Sports/IndoorAndOutdoorClub";
import YogaClub from "./components/Sports/YogaClub";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import ErrorPage from "./pages/ErrorPage";
import ForgotPassword from "./pages/ForgotPassword";
import Login from "./pages/Login";
import Master from "./pages/Master";
import Register from "./pages/Register";

function App() {
  const user = localStorage.getItem("token");
  return (
    <div className="App">
      <Router>

        <Routes>

          {user && <Route path="/dashboard" exact element={<Dashboard />} />}

          <Route path="/register" exact element={   <Register />} />

          <Route path="forgotpassword" exact element={<ForgotPassword />} />

          {<Route path="/" exact element={<Login />} />}

          {/* <Route path="/dashboard" */}

          <Route path='/about' exact element={user ? <Dashboard /> : <About />} />

          <Route path='/contact' exact element={user ? <Dashboard /> : <Contact />} />

          <Route path='/dashboard' element={<Dashboard />} />

          <Route path='/master' element={<Master />} />

          {/* Clulture route */}

          <Route path='/culture/music' element={<MusicClub />} />

          <Route path='/culture/dance' element={<DanceClub />} />

          <Route path='/culture/drama' element={<DramaClub />} />

          <Route path='/culture/painting' element={<PaintingClub />} />

          <Route path='/culture/photography' element={<PhotographyClub />} />

          <Route path='/culture/language' element={<LanguageClub />} />

          {/* Sport route */}

          <Route path='/sports/indooroutdoor' element={<IndoorAndOutdoorClub/>} />

          <Route path='/sports/health' element={<HealthClub />} />

          <Route path='/sports/adventure' element={<AdventureClub/>} />

          <Route path='/sports/yoga' element={<YogaClub/>} />

          {/* Responsibility route */}

          <Route path='/responsibility/eco' element={<EcoClub/>} />

          <Route path='/responsibility/roadsafety' element={<RoadSafetyClub />} />

          <Route path='/responsibility/ncc' element={<NccClub/>} />

          <Route path='/responsibility/nss' element={<NssClub/>} />

          <Route path='/responsibility/yrc' element={<YrcClub/>} />

          <Route path='/master/geography' element={<Geography />} />

          <Route path='/master/service' element={<Service/>}/>

          <Route path='/master/rate' element={<Rate/>} />

          <Route path="*" element={<ErrorPage />} />

        </Routes>

      </Router>
    </div>
  );
}

export default App;
