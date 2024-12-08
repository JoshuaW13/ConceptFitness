import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../App.css'
import viteLogo from "/ConceptFitnessLogo.png";


function SignUp() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password != confirmPassword) {
            setError("Passwords do not match");
            return;
        }
        setError("");
        navigate("/home");
    };

    const handleLogIn = (e) => {
        e.preventDefault();
        navigate("/");
    };


    return (
        <div className='w-full h-full bg-[#EAE7DC] flex flex-col justify-center items-center'>
            <form onSubmit={handleSubmit} className="bg-white-100 p-6 w-full">
                <h2 className="text-xl text-black mb-6">Create an Account</h2>
                <div className="mb-4">
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Email'
                        className="bg-white text-black border border-black rounded w-full py-2 px-3"
                        required
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="username"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder='Username'
                        className="bg-white text-black border border-black rounded w-full py-2 px-3"
                        required
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Password'
                        className="bg-white text-black border border-black rounded w-full py-2 px-3"
                        required
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder='Confirm Password'
                        className="bg-white text-black border border-black rounded w-full py-2 px-3"
                        required
                    />
                </div>
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                <button
                type="submit"
                className="bg-[#E98074] text-white rounded w-full py-2 hover:bg-[#E85A4f]"
                >
                Sign Up
                </button>
                <p className='text-black m-2'>Already have an account?</p>
                <button onClick={handleLogIn} className='text-[#E85A4f] bg-[#EAE7DC] hover-underline'>
                Log In
                </button>
            </form>
        </div>
            
    )
}

export default SignUp