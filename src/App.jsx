import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginForm from './component/Login';
import RegistrationForm from './component/Register';
import Dashboard from './component/Dashboard';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
 
  const handleLogin = () => {
    localStorage.setItem('isLoggedIn', 'true');  
    setIsLoggedIn(true);
  };

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <Router>
      <Routes>

        <Route
          path="/login"
          element={<LoginForm onLogin={handleLogin}/>}
        />
        
        <Route path="/register" element={<RegistrationForm />} />
        
        <Route
          path="/dashboard"
          element={
            isLoggedIn ? <Dashboard /> : <Navigate to="/login" />
          }
        />
        
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
