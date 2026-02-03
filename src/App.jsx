import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './views/Home';
import OurServices from './views/OurServices';
import Whoweare from './views/Whoweare';
import GetInTouch from './views/GetInTouch'
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// 💥 IMPORT THE NEW COMPONENT HERE
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton'; 


function App() {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/whoweare" element={<Whoweare />} />
          <Route path="/ourservices" element={<OurServices />} />
          <Route path="/getintouch" element={<GetInTouch />} />
        </Routes>
        
        {/* 💥 ADD THE FLOATING BUTTON COMPONENT HERE */}
        <WhatsAppFloatingButton /> 
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;