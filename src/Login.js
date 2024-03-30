import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Login() {
    const [background, setBackground] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        changeBackground();
    }, []);



    const changeBackground = () => {
        const backgrounds = [
            'url(https://wallpapercave.com/dwp1x/wp4800420.jpg)',
            'url(https://wallpapercave.com/uwp/uwp3415630.jpeg)',
            'url(https://wallpapercave.com/wp/wp5207651.jpg)',
            'url(https://wallpapercave.com/uwp/uwp4198663.jpeg)',
            'url(https://wallpapercave.com/uwp/uwp3520864.jpeg)',
            'url(https://wallpapercave.com/wp/wp9024683.jpg)',
            'url(https://wallpapercave.com/wp/wp13416887.png)',
            'url(https://wallpapercave.com/wp/wp6693131.jpg)'
        ];

        const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];

        setBackground(randomBackground);
    };

    const linearGradient = 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))';

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    axios.defaults.withCredentials = true;

    function handleSubmit(e) {
        e.preventDefault();
        axios.post("https://qpixel.onrender.com/loginUser", { email, password })
            .then(result => {
                console.log(result);
                if (result.data.status === "success") {
                    window.localStorage.setItem("token", result.data.token);
                    window.localStorage.setItem("isloggedin", true);
                    navigate('/Home');
                }
                else if (result.data === "Sorry Password Incorrect") {
                    toast.error("Incorrect password. Please try again."); // Notify user with error message
                }
                else {
                    console.log(result.data);
                    toast.error("Incorrect email or user does not exist. Please sign up."); // Notify user with error message
                }
            })
            .catch(err => {
                console.log(err);
                toast.error("Login failed. Please try again."); // Notify user with error message
            })
            .catch(err => console.log(err));
    }

    return (
        <Wrapper style={{ backgroundImage: `${linearGradient}, ${background}` }}>
            <ToastContainer />
            <Container>
                <div><h2>Sign in</h2>
                    New user? <span onClick={() => navigate('/Register')}>Create an account</span></div>
                <form action="post" onSubmit={handleSubmit}>
                    <label>Email address</label>
                    <input type="email" name="email" onChange={e => setEmail(e.target.value)} required />
                    <label>Enter your password</label>
                    <input type="password" name="pass" onChange={e => setPassword(e.target.value)} required />
                    <button className="submit">Continue</button>
                    <p id="forgot-password">Forgot password?</p>
                </form>
                <h1>Or</h1>
                <button className="additional">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="26" height="26" viewBox="0 0 48 48" className='add-icon'>
                        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                        <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                    </svg><p>Continue with Google</p>
                </button>
                <button className="additional">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="27" height="27" viewBox="0 0 48 48" className='add-icon'>
                        <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
                    </svg><p>Continue with Facebook</p>
                </button>
                <button className="additional">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50" className='add-icon'>
                        <path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z"></path>
                    </svg><p>Continue with Apple</p>
                </button>
            </Container>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    background-size: cover;
    height: 100vh;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
`

const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    background-color: white;
    flex-direction: column;
    height: auto;
    width: 400px;
    padding: 24px 56px 40px;
    border-radius: 4px;

    h2 {
        font-size: 36px;
        font-weight: 700;
    }

    div {
        font-size: 16px;
        font-weight: 700;
    }

    form {
        margin-top: 15px;
    }

    #forgot-password {
        font-size: 12px;
        text-align: center;
        margin-top: -20px;
        font-weight: 600;
        color: blue;
        cursor: pointer;
        width: 24%;
        margin-left: 38%;
    }

    #forgot-password:hover {
        text-decoration-line: underline;
    }

    span {
        color: blue;
        font-weight: 600;
        cursor: pointer;
    }

    label {
        font-size: 14px;
        font-weight: 700;
    }

    input {
        border: none;
        border-bottom: 1px solid rgba(0,0,0,.2);
        background: transparent;
        display: flex;
        margin-bottom: 20px;
        width: 100%;
        outline: none;
        font-size: 19px;
        font-weight: 600;
    }   

    input:hover {
        border-bottom: 1px solid rgba(0,0,0,.5);
    }

    input:focus {
        border-bottom: 1px solid #1267cf;
    }

    .submit {
        margin-left: 50%;
        transform: translate(-50%);
        background-color: #1267cf;
        color: white;
        border: none;
        padding: 8px 10px;
        border-radius: 5px;
        font-weight: 700;
        font-size: 14px;
        margin-bottom: 30px;
        cursor: pointer;
    }

    h1 {
        text-align: center;
        font-size: 16px;
        font-weight: 100;
        position: relative;
        margin-top: 0;
    }

    h1::before {
        content: "";
        height: 1px;
        width: 180px;
        background-color: rgba(0,0,0,.2);
        position: absolute;
        top: 50%;
        right: 0;
        z-index: -2;
    }

    h1::after {
        content: "";
        height: 1px;
        width: 180px;
        background-color: rgba(0,0,0,.2);
        position: absolute;
        top: 50%;
        left: 0;
        z-index: -2;
    }

    .additional p {
        font-size: 14px;
    }

    .add-icon {
        padding-top: 8px;
        margin-right: 5px;
    }

    .additional {
        display: flex;
        margin-bottom: 20px;
        height: 40px;
        justify-content: center;
        border: 1px solid rgba(0,0,0,.2);
        background: transparent;
        border-radius: 5px;
        padding-bottom: 40px;
        cursor: pointer;
    }

    .additional:hover {
        border: 2px solid rgba(0,0,0,.5);
    }

`