import React from "react";

import useCurrentPath from "../../hooks/useCurrentPath";

const Navigation = () => {
  const isLoggedIn = localStorage.getItem("token");
  const currentPath = useCurrentPath();

  console.log(currentPath);

  return (
    <nav className="container flex h-20 py-8 mx-auto bg-white shadow-md">
      <div className="flex items-center w-1/3">
        <img
          src="https://pbs.twimg.com/media/CsCFQqGXgAA2eqK.png"
          className="w-1/3 h-20"
          alt="logo"
        />
      </div>
      <div className="items-center hidden space-x-8 lg:flex w-full">
        <a href="/home" style={{'textUnderlineOffset': '10px'}} className={`${(currentPath === '/' || currentPath === '/home') ? 'underline decoration-slate-400' : ''}`} >Home</a>
        <a href="/profile" style={{'textUnderlineOffset': '10px'}} className={`${currentPath === 'profile' ? 'underline decoration-slate-400' : ''}`}>Profile</a>
        <a href="/about" style={{'textUnderlineOffset': '10px'}} className={`${currentPath === 'about' ? 'underline decoration-slate-400' : ''}`}>About Us</a>
        <a href="/contact" style={{'textUnderlineOffset': '10px'}} className={`${currentPath === 'contact' ? 'underline decoration-slate-400' : ''}`}>Contact Us</a>
      </div>
      <div className="items-center space-x-8 mr-10">
        {!isLoggedIn && (
          <>
            <a href="/login">Login</a>
            <a href="/registration">Register</a>
          </>
        )}

        {isLoggedIn && (
          <a href="/registration" onClick={() => localStorage.clear()}>
            Logout
          </a>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
