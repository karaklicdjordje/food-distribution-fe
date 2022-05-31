import React, { useState } from "react";
import UserService from "../../services/user.service";
import { useNavigate } from 'react-router-dom';
import { USER_ROLE } from "../../const/const";
import LoginUser from "./LoginUser";

import { CITIES } from "../../const/const";

const RegisterUser = () => {
    let navigate = useNavigate();

    const initialRegistrationState = {
        username: "",
        email: "",
        name: "",
        surrname: "",
        password: "",
        role: "",
        pib: "",
        jmbg: "",
        address: {
            city: {
                name: "",
                zipCode: ""
            },
            addressNumber: "",
            street: ""
        }
    };

    const [registration, setRegistration] = useState(initialRegistrationState);
    const [submitted, setSubmitted] = useState(null);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setRegistration({ ...registration, [name]: value });
    }

    const handleAddress = event => {
        console.log(event.target.value);
    }

    const saveRegisterUser = () => {
        var data = {
            username: registration.username,
            email: registration.email,
            name: registration.name,
            surrname: registration.surname,
            password: registration.password,
            role: registration.role,
            pib: registration.pib,
            jmbg: registration.jmbg
        }

        UserService.registerUser(data)
            .then(response => {
                const user = JSON.parse(response.config.data);
                localStorage.setItem("user", user);

                setRegistration({
                    username: user.username,
                    email: user.email,
                    name: user.name,
                    surrname: user.surname,
                    password: user.password,
                    role: user.role,
                    pib: user.pib,
                    jmbg: user.jmbg
                });
                setSubmitted(true);
                
                if (response.status === 201) {
                    navigate("/login");
                }
            })
            .catch(e => {
                console.log(e)
            });
    }

    const newRegistrationUser = () => {
        setRegistration(initialRegistrationState);
        setSubmitted(false);
    };
    return (
        <div className="submit-form">
            {submitted ? (
                <div>
                    <h4>You submitted succesfully!</h4>
                    <button className="btn btn-success" onClick={newRegistrationUser}>Add</button>
                </div>
            ) : (
                <div>
                    <div style={{ marginBottom: 30, marginTop: 20 }}>
                        <h4>Registration form</h4>
                        <hr />
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Username: </label>
                        <input type="text"
                            className="form-control"
                            id="username"
                            required
                            value={registration.username}
                            onChange={handleInputChange}
                            name="username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email: </label>
                        <input type="text"
                            className="form-control"
                            id="email"
                            required
                            value={registration.email}
                            onChange={handleInputChange}
                            name="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Name: </label>
                        <input type="text"
                            className="form-control"
                            id="name"
                            required
                            value={registration.name}
                            onChange={handleInputChange}
                            name="name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="surname">Surname: </label>
                        <input type="text"
                            className="form-control"
                            id="surrname"
                            required
                            value={registration.surrname}
                            onChange={handleInputChange}
                            name="surrname" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password: </label>
                        <input type="password"
                            className="form-control"
                            id="password"
                            required
                            value={registration.password}
                            onChange={handleInputChange}
                            name="password" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="role">Role: </label>
                        <div>
                            <select value={registration.role} name="role" id="role" onChange={handleInputChange}>
                            <option value="">-------</option>
                                {USER_ROLE.map((option) => (
                                    <option value={option.value} key={option.value}>{option.label}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="col-md-12 row">
                        <label htmlFor="address">Address: </label>
                        
                            <input type="text"
                                className="form-control col-md-6"
                                id="name"
                                required
                                value={registration.address.city.name}
                                onChange={handleInputChange}
                                name="name"
                                maxLength={10}
                                minLength={10} />

                            <input type="text"
                                className="form-control col-md-6"
                                id="zipCode"
                                required
                                value={registration.address.city.zipCode}
                                onChange={handleInputChange}
                                name="zipCode"
                                maxLength={10}
                                minLength={10} />
                       
                    </div>
                    <div className="form-group">
                        <label htmlFor="pib">Pib: </label>
                        <input type="text"
                            className="form-control"
                            id="pib"
                            required
                            value={registration.pib}
                            onChange={handleInputChange}
                            name="pib"
                            maxLength={10}
                            minLength={10} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="jmbg">Jmbg: </label>
                        <input type="text"
                            className="form-control"
                            id="jmbg"
                            required
                            value={registration.jmbg}
                            onChange={handleInputChange}
                            name="jmbg"
                            maxLength={13}
                            minLength={13} />
                    </div>
                    <div>
                        <button onClick={saveRegisterUser} className="btn btn-success" style={{marginTop: 20}}>Submit</button>
                    </div>
                </div>
            )}
        </div>
    )

}

export default RegisterUser;