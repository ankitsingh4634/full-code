import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const [isChecking, setIsChecking] = useState(true); // Prevents flicker

  // useEffect(() => {
  //   const email = localStorage.getItem('email');

  //   if (!email || email === 'false' || email === 'null' || email === 'undefined') {
  //     navigate('/login');
  //   } else {
  //     setIsChecking(false);
  //   }
  // }, [navigate]);

  // if (isChecking) return null; // or show a loader

  return children;
};

export default ProtectedRoute;
