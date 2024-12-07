import React, { useState } from 'react';
import Logo from "/ConceptFitnessLogo.png";
import '../App.css'
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/home");
    };
    
    const handleSignUp = (e) => {
        e.preventDefault();
        navigate("/signUp");
    };

  return (
      <div className='w-full h-full bg-[#EAE7DC] flex flex-col justify-center items-center gap-10'>
         <div className='flex justify-center items-center'>
          <img src={Logo} alt="" />

          </div>
        <form onSubmit={handleSubmit} className="bg-white-100 p-6 w-full">
        <h2 className="text-xl text-black mb-4">Login</h2>
        <div className="mb-4">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email/Username'
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
        <button
          type="submit"
          className="bg-[#E98074] text-white rounded w-full py-2 hover:bg-[#E85A4F]"
        >
          Login
        </button>
        <p className='text-black m-2'>Don't have an account?</p>
        <button onClick={handleSignUp} className='text-[#E85A4F] hover-underline'>
          Sign Up
        </button>
      </form>
      </div>
  )
}

export default Login;
