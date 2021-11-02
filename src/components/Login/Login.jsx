import React from 'react'
import './login.css'
import { useContext, useRef } from 'react';
import { Context } from '../../context/Context';
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function Login() {
    const userRef = useRef();
    const passwordRef = useRef();
    const {dispatch, isFetching } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({type: "LOGIN_START"});
        try {
            const res = await axios.post("http://localhost:8000/api/v1/sessions", {
                user: {
                    email: userRef.current.value,
                    password: passwordRef.current.value
                }
            }, { withCredentials: true });
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        } catch (error) {
            dispatch({ type: "LOGIN_FAILURE" });
        }
    };

    // console.log("USER: ", user);
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const history = useHistory();

    // const handleSuccessfulAuth = (data) => {
    //     history.push("/home");
    //  //   props.handleLogin(data);
    // }

    // const handleSubmit = (e) => {
    //     axios.post("http://localhost:8000/api/v1/sessions", {
    //         user: {
    //             email: email,
    //             password: password
    //         }
    //     },
    //     { withCredentials: true }
    //     ).then(response => {
    //         console.log("response from login ", response);
    //         if (response.data.status === 'created') {
    //             handleSuccessfulAuth(response.data);
    //         }

    //     }).catch(error => {
    //         console.log("login error: ", error)
    //     })
    //     e.preventDefault();
    // }

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="signin-signout-logo">sphere_blog</div>
                <div className="input-form-title">Sign in</div>
                <div className="input-form-fields">
                    <form onSubmit={handleSubmit}>
                        <div className="input-field-box">
                            <input 
                                className="input-field input-email-space"
                                type="email" 
                                name="email" 
                                placeholder="Enter your email..." 
                                ref={userRef}
                                // value={email}
                                // onChange={e => setEmail(e.target.value)}
                                required
                            />  
                        </div>
                        <div className="input-field-box">
                            <input 
                                className="input-field"
                                type="password" 
                                name="password" 
                                placeholder="Enter your password..." 
                                ref={passwordRef}
                                // value={password}
                                // onChange={e => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="no-account-login-box">
                            <div className="no-account-login">No account? </div>
                            
                            <Link className="no-account-login create-account" to="/signup">
                                    Create one!
                            </Link>
                        </div>
                        
                        <button 
                            className="submit-button"
                            type="submit" 
                            disabled={isFetching}
                        >Sign in</button>
                    </form>
                </div>
            </div>
            <div className="login-signup-footer">
                <div className="login-signup-footer-space footer-space-copyright">sphere_blog &#169; 2021</div>
                <div className="login-signup-footer-space">
                    <div className="footer-space-between">Terms of use</div>
                    <div>Privacy & cookies</div>
                </div>
                
            </div>
        </div>
    )
}
