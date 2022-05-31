import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
    <Nav className="me-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/login">Login</Nav.Link>
      <Nav.Link href="/registration">Registration</Nav.Link>
      <Nav.Link href="/test">Test</Nav.Link>
      <Nav.Link href="/registration" onClick={() => localStorage.clear()}>Logout</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  )
}

export default Navigation