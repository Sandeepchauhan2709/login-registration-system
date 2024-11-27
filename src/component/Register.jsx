import  { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { MdPerson } from "react-icons/md";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  const navigate = useNavigate(); 

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/auth/register", {
        name,
        dateOfBirth,
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      setError("");
      alert("Registration successful! Please log in.");
      navigate("/login"); 
    } catch (err) {
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-b from-teal-600 to-teal-300">
      <div className="bg-blue-950 rounded-lg shadow-lg p-6 w-full max-w-sm">
        <h2 className="text-2xl font-bold text-teal-300 text-center mb-6">
          REGISTER
        </h2>
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-gray-600 rounded-full flex items-center justify-center">
            <MdPerson className="text-gray-300 text-5xl" />
          </div>
        </div>
        <form onSubmit={handleRegister}>
          <div className="relative mb-4">
            <FaUser className="absolute top-3 left-3 text-gray-500" />
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full pl-10 p-3 bg-gray-600 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div className="relative mb-4">
            <input
              type="date"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              className="w-full pl-3 p-3 bg-gray-600 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div className="relative mb-4">
            <FaEnvelope className="absolute top-3 left-3 text-gray-500" />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          <button
            type="submit"
            className="w-full py-3 bg-teal-500 text-white font-bold rounded-lg hover:bg-teal-600 transition duration-300 mb-4"
          >
            REGISTER
          </button>
        </form>
        <p className="text-center text-teal-300">
          Already have an account?{" "}
          <button
            className="text-teal-500 underline hover:text-teal-600"
            onClick={() => navigate("/login")} 
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default RegistrationForm;
