import React, { useState } from 'react';
import viteLogo from "../../public/ConceptFitnessLogo.png";
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

  return (
      <div className='w-full h-full flex flex-col items-center gap-10'>
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

export default Login;
