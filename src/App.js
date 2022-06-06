import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Homepage from './pages/Homepage';
import Navigation from './components/navigation/Navigation';
import Test from './components/Test';
import RegisterUser from './components/user/RegisterUser';
import LoginUser from './components/user/LoginUser';

function App() {
  return (
    <div className='h-screen w-screen'>

      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/registration" element={<RegisterUser />} />
          <Route path="/login" element={<LoginUser />} />
          <Route path="/home" element={<Homepage />} />
          <Route exact path="/test" element={<Test />} />
          <Route path="/" element={<Homepage />} />

          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
