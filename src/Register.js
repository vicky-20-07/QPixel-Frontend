import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

export default function Register() {
    const navigate = useNavigate();

    const [background, setBackground] = useState('');

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        if (password === confirmPassword && password !== "") {
            axios.post("https://qpixel.onrender.com/createUser", { firstName, lastName, email, password })
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err));
        }
        else {
            alert("INVALID USER !!!");
        }
    }


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

    return (
        <Wrapper style={{ backgroundImage: `${linearGradient}, ${background}` }}>
            <Container>
                <div className='alternate'><h2>Create an account</h2></div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48" className='add-icons'>
                        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                        <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48" className='add-icons'>
                        <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50" className='add-icons'>
                        <path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z"></path>
                    </svg>
                </div>
                <h1>Or</h1>
                <div className='alternate'>Already have an account? <span onClick={() => navigate('/Login')}>Sign in</span></div>
                <form onSubmit={handleSubmit}>
                    <label>First name</label>
                    <input type="text" name="firstname" onChange={(e) => setFirstName(e.target.value)} className='input' />
                    <label>Last name</label>
                    <input type="text" name="lastname" onChange={(e) => setLastName(e.target.value)} className='input' />
                    <label>Email address</label>
                    <input type="email" className='input' onChange={(e) => setEmail(e.target.value)} name="email" required />
                    <label>Password</label>
                    <input type='password' name="password" onChange={(e) => setPassword(e.target.value)} className='input' required />
                    <label>Confirm password</label>
                    <input type='password' name="confirm" onChange={(e) => setConfirmPassword(e.target.value)} className='input' required />
                    <button className='submit'>Continue</button>
                </form>
            </Container>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    background-size: cover;
    height: 100vh;
    position: absolute;
    width: 100%;
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
    padding: 20px 56px 5px;
    border-radius: 4px;

    h2 {
        font-size: 36px;
        margin-top: 0px;
    }

    .alternate {
        font-size: 16px;
        font-weight: 700;
        margin-top: 15px;
        margin-bottom: 15px;
    }

    span {
        color: blue;
        font-weight: 600;
        cursor: pointer;
    }

    label {
        font-size: 12px;
        font-weight: 700;
    }

    #input {
        margin-left: 20px;
        display: flex;
        flex-direction: column;
        width: 90%;
        border: none;
        font-weight: 600;
        outline: none;
        border-bottom: 1px solid rgba(0,0,0,.2);
        font-size: 18px;
        background: transparent;
    }

    .submit {
        margin-left: 50%;
        transform: translate(-50%);
        background-color: #1267cf;
        color: white;
        border: none;
        padding: 8px 10px;
        width: 100px;
        border-radius: 5px;
        font-weight: 700;
        font-size: 14px;
        margin-bottom: 30px;
        cursor: pointer;
    }

    .input {
        border: none;
        border-bottom: 1px solid rgba(0,0,0,.2);
        background: transparent;
        display: flex;
        margin-bottom: 20px;
        width: 100%;
        outline: none;
        font-size: 19px;
    }   

    .input:hover {
        border-bottom: 1px solid rgba(0,0,0,.5);
    }

    .input:focus {
        border-bottom: 1px solid #1267cf;
    }



    h1 {
        text-align: center;
        font-size: 16px;
        font-weight: 100;
        position: relative;
        margin-top: 20px;
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

    .add-icons {
        border: 1px solid rgba(0,0,0,.2);
        margin-right: 10px;
        padding: 10px;
        border-radius: 50%;
    }

    .add-icons:hover {
        border: 1px solid rgba(0,0,0,.5);
    }

    .add-icons:focus {
        border: 1px solid #1267cf;
    }

`