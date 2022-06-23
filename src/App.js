import "./App.css";
import { React } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Navigation from "./components/navigation/Navigation";
import RegisterUser from "./components/user/RegisterUser";
import LoginUser from "./components/user/LoginUser";
import Restaurant from "./pages/Restaurant";
import { ProtectedRoute } from "./route-guards/ProtectedRoute";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="h-screen w-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route index path="/registration" element={<RegisterUser />} />
          <Route path="/login" element={<LoginUser />} />
          {/* <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Homepage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/restaurant"
            element={
              <ProtectedRoute>
                <Restaurant />
              </ProtectedRoute>
            }
          /> */}
          <Route path="/home" element={<Homepage />} />
          {/* TODO: Ovde uraditi da u urlu bude sa id-em restoran */}
          <Route exact path="/restaurant" element={<Restaurant />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
