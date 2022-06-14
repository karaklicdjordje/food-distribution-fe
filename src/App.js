import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Homepage from './pages/Homepage';
import Navigation from './components/navigation/Navigation';
import RegisterUser from './components/user/RegisterUser';
import LoginUser from './components/user/LoginUser';
import Restaurant from './pages/Restaurant';

function App() {
  return (
    <div className='h-screen w-screen bg-gradient-to-br from-blue-50 to-purple-50'>

      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/registration" element={<RegisterUser />} />
          <Route path="/login" element={<LoginUser />} />
          <Route path="/home" element={<Homepage />} />
          {/* TODO: Ovde uraditi da u urlu bude sa id-em restoran */}
          <Route exact path="/restaurant" element={<Restaurant />} />
          <Route path="/" element={<Homepage />} />

          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
