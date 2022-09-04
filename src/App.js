import "./App.css";
import { React } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createBrowserHistory } from 'history'

import Homepage from "./pages/Homepage";
import Navigation from "./components/navigation/Navigation";
import RegisterUser from "./components/user/RegisterUser";
import LoginUser from "./components/user/LoginUser";
import Restaurant from "./pages/Restaurant";
import { ProtectedRoute } from "./route-guards/ProtectedRoute";

import Profile from "./pages/Profile";
import Checkout from "./pages/Checkout";

function App() {
  const browserHistory = createBrowserHistory();
  return (
    <div className="h-screen w-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Router history={browserHistory}>
        <Navigation />
        <Routes>
          <Route path="/" element={<LoginUser />} />
          <Route index path="/registration" element={<RegisterUser />} />
          <Route path="/login" element={<LoginUser />} />
          
          <Route path="/home" element={<Homepage />} />
          {/* TODO: Ovde uraditi da u urlu bude sa id-em restoran */}
          <Route exact path="/restaurant" element={<Restaurant />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/checkout" element={<Checkout />} />

          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
