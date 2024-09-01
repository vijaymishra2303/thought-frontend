import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [generalError, setGeneralError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Regular expression for basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Check if the email is valid
        if (!emailRegex.test(email)) {
            setEmailError('Please enter a valid email address.');
            return;
        } else {
            setEmailError(''); // Clear any previous error
        }

        // Clear previous general error
        setGeneralError('');

        axios.post('https://thought-backend.onrender.com/signup', { name, email, password })
            .then(result => {
                navigate('/login');
                //window.location.reload(); // This will refresh the page after navigating
            })
            .catch(error => {
                if (error.response && error.response.status === 409) {
                    // Assuming the backend returns a 409 status code for duplicate email
                    setGeneralError('This email is already registered. Please try another one.');
                } else {
                    setGeneralError('This email is already registered. Please try another one.');
                }
                //console.log(error);
            });
    };

    return (
        <div>
            <div className="signup_page">
                <div className="container">
                    <div className="row">
                        <div className="login_page bg-white p3 rounded w25">
                            <h2>Create An Account</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name">
                                        <strong>Name</strong>
                                    </label>
                                    <input 
                                        type="text" 
                                        placeholder="Enter Full Name" 
                                        autoComplete="off" 
                                        required 
                                        name="name" 
                                        className="form-control rounded-0" 
                                        value={name} 
                                        onChange={(e) => setName(e.target.value)} 
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email">
                                        <strong>Email</strong>
                                    </label>
                                    <input 
                                        type="text" 
                                        placeholder="Enter Email" 
                                        autoComplete="off" 
                                        required 
                                        name="email" 
                                        className="form-control rounded-0" 
                                        value={email} 
                                        onChange={(e) => setEmail(e.target.value)} 
                                    />
                                    {emailError && <div className="text-danger">{emailError}</div>}
                                    {generalError && <div className="text-danger">{generalError}</div>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="Password">
                                        <strong>Password</strong>
                                    </label>
                                    <input 
                                        type="password" 
                                        placeholder="Enter Password" 
                                        autoComplete="off" 
                                        required 
                                        name="password" 
                                        className="form-control rounded-0" 
                                        value={password} 
                                        onChange={(e) => setPassword(e.target.value)} 
                                    />
                                </div>
                                <button type="submit" className="main_btn w-100">REGISTER</button>
                            </form>
                            <p>Already Have An Account?</p>
                            <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
