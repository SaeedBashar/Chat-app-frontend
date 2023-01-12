import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import axios from 'axios';
import { connect } from 'react-redux';

import { userAdd } from '../../store/actions/actions';
import {signinApi, signupApi } from '../../apis/chat';
import "react-toastify/dist/ReactToastify.css";

const Signin = props=>{

    const navigate = useNavigate()
    const [userInfo, setInfo] = useState({ 
                                            username: "", email: "", 
                                            password: "", confirmPassword: "" 
                                        });
    const [isSignUpPage, setIsSignUp] = useState(false);

    useEffect(() => {
        setIsSignUp(window.location.href.includes('signup'))
      });
      
    const toastOptions = {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      };

    const handleChange = (event) => {
        setInfo({ ...userInfo, [event.target.name]: event.target.value });
      };
    
    const validateForm = () => {
        console.log(userInfo)
        const { username, password } = userInfo;
        if (username === "") {
            toast.error("Username is required.", toastOptions);
            return false;
        } else if (password === "") {
            toast.error("Password is required.", toastOptions);
            return false;
        } else if (password.length < 8) {
            toast.error(
              "Password should be equal or greater than 8 characters.",
              toastOptions
            );
            return false;
          }
        console.log(isSignUpPage)
        if(isSignUpPage){
            const {email, confirmPassword } = userInfo;
            if (email === "") {
                toast.error("Email is required.", toastOptions);
                return false;
            } else if (confirmPassword === "") {
                toast.error("Confirm password is required.", toastOptions);
                return false;
            } else if (password !== confirmPassword) {
                toast.error(
                  "Password and confirm password should be same.",
                  toastOptions
                );
                return false;
            }
        }
        return true;
    };

    const handleSubmit = async (event) =>{
        event.preventDefault();
        if (validateForm()) {
            if(isSignUpPage) {
                const { email, username, password } = userInfo;
                var { data } = await axios.post(signupApi, {
                    username,
                    email,
                    password,
                });
                console.log(data)
            }

            if(!isSignUpPage) {
                const { username, password } = userInfo;
                var { data } = await axios.post(signinApi, {
                    username,
                    password,
                });
                console.log(data)
            }
            
            if (data.status === false) toast.error(data.msg, toastOptions);

            if (data.status === true) {
                sessionStorage.setItem('userInfo', JSON.stringify(data.user))
                props.setUser(data.user);
                navigate("/home");
            }
            console.log(userInfo);
        } else {
            console.log("Failed to Sign In");
        }
    }

    return (
        <main>
            <div className="container">

            <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                    <div className="d-flex justify-content-center py-4">
                        <a href="index.html" className="logo d-flex align-items-center w-auto">
                        <img src="#" alt=""/>
                        <span className="d-none d-lg-block">WeChat</span>
                        </a>
                    </div>

                    <div className="card mb-3">

                        <div className="card-body">

                        <div className="pt-4 pb-2">
                            {isSignUpPage ? 
                                <>
                                    <h5 className="card-title text-center pb-0 fs-4">Create An Account</h5>
                                    <p className="text-center small">Enter Your Personal Details To Create Account</p>
                                </>
                                :  <>
                                    <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                                    <p className="text-center small">Enter your username & password to login</p>
                                </>
                            }
                        </div>

                        <form className="row g-3 needs-validation" onSubmit={(event) => handleSubmit(event)} noValidate>

                            <div className="col-12">
                            <label htmlFor="username" className="form-label">Username</label>
                            <div className="input-group has-validation">
                                <span className="input-group-text" id="inputGroupPrepend">@</span>
                                <input 
                                    type="text" name="username"
                                    onChange={(e) => handleChange(e)}
                                    className="form-control" id="username" 
                                    required/>
                                <div className="invalid-feedback">Please enter your username.</div>
                            </div>
                            </div>
                            {isSignUpPage ? (
                                <div className="col-12">
                                <label htmlFor="email" className="form-label">Email</label>
                                <div className="input-group has-validation">
                                    <span className="input-group-text" id="inputGroupPrepend">@</span>
                                    <input 
                                        type="email" name="email"
                                        onChange={(e) => handleChange(e)}
                                        className="form-control" id="email" 
                                        required/>
                                    <div className="invalid-feedback">Please enter your email.</div>
                                </div>
                                </div>
                            ) : null}

                            <div className="col-12">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input 
                                type="password" name="password"
                                onChange={(e) => handleChange(e)} 
                                className="form-control" id="password" 
                                required/>
                            <div className="invalid-feedback">Please enter your password!</div>
                            </div>
                            {isSignUpPage ? (
                                <div className="col-12">
                                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                                <input 
                                    type="password" name="confirmPassword"
                                    onChange={(e) => handleChange(e)} 
                                    className="form-control" id="confirmPassword" 
                                    required/>
                                <div className="invalid-feedback">Passwords do not match!</div>
                                </div>
                            ): null}

                            <div className="col-12">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe"/>
                                <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                            </div>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary w-100" type="submit">{isSignUpPage ? 'Sign Up' : 'Sign In'}</button>
                            </div>
                            <div className="col-12">
                                {isSignUpPage ? 
                                    <p className="small mb-0">Already have an account? <Link to="/signin">Log in</Link></p>
                                : 
                                    <p className="small mb-0">Don't have account? <Link to="/signup">Create an account</Link></p>
                                }
                            </div>
                        </form>
                        <ToastContainer />
                        </div>
                    </div>

                    </div>
                </div>
                </div>

            </section>

            </div>
        </main>
    )
}

const mapDispatchToProps = dispatch=>{
    return {
        setUser : (user)=>dispatch({type: userAdd, user : user})
    }
}
export default connect(null, mapDispatchToProps)(Signin);