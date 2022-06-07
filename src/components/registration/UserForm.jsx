import React from "react";
import UserService from "../../services/user.service";
import { useNavigate } from "react-router-dom";
import AddressForm from "./AddressForm";

const UserForm = () => {
  let navigate = useNavigate();
  const [user, setUser] = React.useState({
    email: "",
    name: "",
    username: '',
    surrname: "",
    jmbg: "",
    password: "",
    role: 'ROLE_PERSON'
  });
  const [address, setAddress] = React.useState('');
  const [city, setCity] = React.useState('');
  const [addressNum, setAddressNum] = React.useState('');
  const [zipCode, setZipCode] = React.useState('');

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = () => {
    const req = {
      ...user,
      address: {
        city: {
          id: 1,
          name: city,
          zipCode: zipCode
        },
        id: 1,
        street: address,
        addressNumber: addressNum
      }
    }

    UserService.registerUser(req)
      .then((response) => {
        const user = JSON.parse(response.config.data);
        localStorage.setItem("user", user);

        if (response.status === 201) {
          navigate("/login");
        }
      })
      .catch((e) => {
        console.error(e);
      });

    console.log(req);
  };

  return (
    <>
      <div className="mb-6">
        <input
          type="text"
          className="block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder="Email address"
          value={user.email}
          name="email"
          onChange={e => onInputChange(e)}
        />
      </div>
      <div className="mb-6">
        <input
          type="text"
          className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder="Name"
          value={user.name}
          name="name"
          onChange={e => onInputChange(e)}
        />
      </div>
      <div className="mb-6">
        <input
          type="text"
          className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder="Last name"
          value={user.surname}
          name="surname"
          onChange={e => onInputChange(e)}
        />
      </div>
      <div className="mb-6">
        <input
          type="text"
          className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder="Username"
          value={user.username}
          name="username"
          onChange={e => onInputChange(e)}
        />
      </div>
      <div className="mb-6">
        <input
          type="text"
          className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder="Password"
          value={user.password}
          name="password"
          onChange={e => onInputChange(e)}
        />
      </div>
      <div className="mb-6">
        <input
          type="text"
          className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder="ID"
          value={user.jmbg}
          name="jmbg"
          onChange={e => onInputChange(e)}
        />
      </div>

      <AddressForm
        city={city}
        setCity={setCity}
        address={address}
        setAddress={setAddress}
        addressNum={addressNum}
        setAddressNum={setAddressNum}
        zipCode={zipCode}
        setZipCode={setZipCode}
      />
      
      <div className="text-center lg:text-left">
        <button
          type="button"
          onClick={handleSubmit}
          className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Register
        </button>
      </div>
    </>
  );
};

export default UserForm;
