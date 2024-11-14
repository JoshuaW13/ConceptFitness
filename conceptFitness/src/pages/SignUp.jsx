import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../App.css'
import viteLogo from "/ConceptFitnessLogo.png";


function SignUp() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
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


    return (
        <div className='w-full h-full flex flex-col items-center'>
            <div className='text-black text-lg font-bold w-full bg-gray-100 h-10 flex items-center justify-start px-2'>
                <img src={viteLogo} alt="" className="h-full w-auto " />
            </div>
            <form onSubmit={handleSubmit} className="bg-white-100 p-6 w-full">
                <h2 className="text-xl mb-4">Login</h2>
                <div className="mb-4">
                    <label className="block text-gray-700" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border rounded w-full py-2 px-3"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700" htmlFor="password">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border rounded w-full py-2 px-3"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700" htmlFor="confirmPassword">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="border rounded w-full py-2 px-3"
                        required
                    />
                </div>
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                <button
                type="submit"
                className="bg-blue-500 text-white rounded w-full py-2 hover:bg-blue-600"
                >
                Login
                </button>
            </form>
        </div>
            
    )
}

export default SignUp