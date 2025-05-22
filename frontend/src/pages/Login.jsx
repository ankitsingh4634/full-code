import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();  // React Router navigate function

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      let response;

      if (currentState === 'Sign Up') {
        response = await axios.post("http://localhost:3000/api/auth/register", { name, email, password });

        if (response.data) {
          toast.success('Registration successful');
          setCurrentState('Login');  // After registration, switch to login
        } else {
          toast.error(response.data.message || 'Registration failed');
        }
      } else {
        response = await axios.post("http://localhost:3000/api/auth/login", { email, password });

        // Debugging step: Log the response
        console.log("Login Response: ", response.data);

        if (response.data) {
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('token', response.data?.token);
          localStorage.setItem('email', email); // 🔴 Add this line

          console.log("Navigating to dashboard...");
          window.location.reload()
          navigate('/');
        } else {
          toast.error(response.data.message || 'Login failed');
        }
      }
    } catch (error) {
      console.log("Error during login or registration: ", error);

      // Capture the error message from the response
      if (error.response) {
        // Handle error response from backend
        toast.error(error.response.data.message || 'An error occurred');
      } else {
        // Handle other types of errors (e.g., network errors)
        toast.error(error.message || 'An unexpected error occurred');
      }
    }
  };

  useEffect(() => {
    // Debugging step: Check if user is already logged in when the component mounts
    const loggedIn = localStorage.getItem('isLoggedIn');
    console.log("User logged in status: ", loggedIn);

    if (loggedIn === 'true') {
      navigate('/');  // Redirect to dashboard if already logged in
    }
  }, [navigate]);

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      {currentState === 'Login' ? '' : (
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Name"
          required
        />
      )}
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Email"
        required
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Password"
        required
      />
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className=" cursor-pointer">Forgot your password?</p>
        {currentState === 'Login' ? (
          <p onClick={() => setCurrentState('Sign Up')} className=" cursor-pointer">
            Create account
          </p>
        ) : (
          <p onClick={() => setCurrentState('Login')} className=" cursor-pointer">
            Login Here
          </p>
        )}
      </div>
      <button className="bg-black text-white font-light px-8 py-2 mt-4">{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
    </form>
  );
};

export default Login;
