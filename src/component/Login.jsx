import  { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { MdPerson } from "react-icons/md";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 

const LoginForm = ({ onLogin }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate(); 

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        name,
        password,
      });
      localStorage.setItem("token", response.data.token);
      setError(""); 
      onLogin();
      alert("Login successful!");
      navigate('/dashboard');
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-b from-teal-600 to-teal-300">
      <div className="bg-blue-950 rounded-lg shadow-lg p-6 w-full max-w-sm">
        <h2 className="text-2xl font-bold text-teal-300 text-center mb-6">
          SIGN IN
        </h2>
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-gray-600 rounded-full flex items-center justify-center">
            <MdPerson className="text-gray-300 text-5xl" />
          </div>
        </div>
        <form onSubmit={handleLogin}>
          <div className="relative mb-4">
            <FaUser className="absolute top-3 left-3 text-gray-500" />
            <input
              type="text"
              placeholder="Username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full pl-10 p-3 bg-gray-600 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div className="relative mb-4">
            <FaLock className="absolute top-3 left-3 text-gray-500" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 p-3 bg-gray-600 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center text-teal-300">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="#" className="text-teal-300 hover:underline">
              Forgot your password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-teal-500 text-white font-bold rounded-lg hover:bg-teal-600 transition duration-300 mb-4"
          >
            LOGIN
          </button>
        </form>
        <p className="text-center text-teal-300">
          Don't have an account?{" "}
          <button
            className="text-teal-500 underline hover:text-teal-600"
            onClick={() => navigate("/register")} 
          >
            Register
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
