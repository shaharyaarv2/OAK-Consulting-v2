import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './views/Home';
import OurServices from './views/OurServices';
import Whoweare from './views/Whoweare';
import OurClients from './views/OurClients';
import OurTeam from './views/OurTeam'
import GetInTouch from './views/GetInTouch'
import WhyOAK from './views/WhyOAK'
import Awards from './views/Awards'
import Footer from './components/Footer';

// 💥 IMPORT THE NEW COMPONENT HERE
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton'; 


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/whoweare" element={<Whoweare />} />
          <Route path="/ourservices" element={<OurServices />} />
          <Route path="/clients" element={<OurClients />} />
          <Route path="/ourteam" element={<OurTeam />} />
          <Route path="/getintouch" element={<GetInTouch />} />
          <Route path="/whyoak" element={<WhyOAK />} />
          <Route path="/recognition" element={<Awards />} />
        </Routes>
        
        {/* 💥 ADD THE FLOATING BUTTON COMPONENT HERE */}
        <WhatsAppFloatingButton /> 
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;