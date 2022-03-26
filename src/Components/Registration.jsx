import React, { useState } from 'react'
import { Alert } from "react-bootstrap"
import Login from "./Login"

function Registration() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);


    function handleSubmit(e) {
        e.preventDefault();

        if (!name || !email || !password) {
            setFlag(true);
        } else {
            setFlag(false);
            localStorage.setItem("Name", JSON.stringify(name));
            localStorage.setItem("Email", JSON.stringify(email));
            localStorage.setItem("Password", JSON.stringify(password));

            console.log("saved in Local Storage");
            setLogin(!login);
        }

    }

    function handleClick() {
        setLogin(!login);
    }
    return (
        <div>

            {login ? (
                <form onSubmit={handleSubmit}>
                    <h1> Register</h1>
                    <div className='form-group'>
                        <label> Name</label>
                        <input type="text" className='form-control' placeholder="Enter Full Name" onChange={(event) => setName(event.target.value)} />
                    </div>

                    <div className='form-group'>
                        <label>Password</label>
                        <input type="password" className='form-control' placeholder="Enter Password" onChange={(event) => setPassword(event.target.value)} />
                    </div>

                    <div className='form-group'>
                        <label> Email</label>
                        <input type="email" className='form-control' placeholder="Enter Email" onChange={(event) => setEmail(event.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-dark btn-lg btn-block">SignUp</button>
                    <button className="btn btn-primary btn-lg btn-block" onClick={handleClick}> Already Registered then Login ?</button>

                    {flag && (
                        <Alert color="primary" variant="danger">
                            Please Fill Every Field.

                        </Alert>
                    )}
                </form>
            ) : (
                <Login />
            )}
        </div>
    )
}
export default Registration