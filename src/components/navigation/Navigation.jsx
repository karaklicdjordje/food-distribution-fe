import React from "react";

const Navigation = () => {
  const isLoggedIn = localStorage.getItem("token");

  return (
    //   <Navbar bg="dark" variant="dark">
    //   <Container>
    //   <Nav className="me-auto">
    //     <Nav.Link href="/home">Home</Nav.Link>
    //     <Nav.Link href="/login">Login</Nav.Link>
    //     <Nav.Link href="/registration">Registration</Nav.Link>
    //     {isLoggedIn && <Nav.Link href="/registration" onClick={() => localStorage.clear()}>Logout</Nav.Link>}
    //   </Nav>
    //   </Container>
    // </Navbar>
    <nav className="container flex h-20 py-8 mx-auto bg-white shadow-md">
      <div className="flex items-center w-1/3">
        <img
          src="https://pbs.twimg.com/media/CsCFQqGXgAA2eqK.png"
          className="w-1/3 h-20"
          alt="logo"
        />
      </div>
      <div className="items-center hidden space-x-8 lg:flex w-full">
        <a href="/home">Home</a>
        <a href="/about">About Us</a>
        <a href="/contact">Contact Us</a>
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
