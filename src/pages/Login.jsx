import React, {useState} from 'react'
import {Form, Container} from 'react-bootstrap';
import "./Login.css";

const Login = () => {
  const [type, setType] = useState('user');

  function handleType(e) {
    console.log(e.target.value);
    setType(e.target.value);
  }

  return (
    <div className='login-container' onChange={e => handleType(e)}>
      <Form.Select size="md" className='child'>
        <option disabled>Type of registration</option>
        <option default value="user">User</option>
        <option value="charity">Charity</option>
        <option value="restaurant">Restaurant</option>
      </Form.Select>

      {type === 'user' && <UserForm />}
      {type === 'charity' && <CharityForm />}
      {type === 'restaurant' && <RestaurantForm />}
    </div>
  )
}

const UserForm = () => {
  const [user, setUser] = useState({
    name: '',
    lastName: '',
    jmbg: '',
    password: ''
  })

  
  return (
    <div style={{ marginTop: "2rem" }}>
      user forma
    </div>
  )
}

const CharityForm = () => {
  return (
    <div style={{ marginTop: "2rem" }}>
      CharityForm
    </div>
  )
}

const RestaurantForm = () => {
  return (
    <div style={{ marginTop: "2rem" }}>
      RestaurantForm
    </div>
  )
}

export default Login