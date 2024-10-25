import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import ProductListingPage from "./components/ProductListingPage";
import ProductDetailPage from "./components/ProductDetailPage";
import CartPage from "./components/CartPage";
import AdminDashboard from './components/admin/AdminDashboard';
import Login from './components/Login';
import Register from './components/Register';
import React, { useEffect, useState } from 'react';



const App = () => {


  return (
    <Router>
      <AppContent />
    </Router>
  );
};

const AppContent = () => {
  const [token, setToken] = useState(null);
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from localStorage
    setToken(null); // Update state to reflect logout

    navigate('/'); // Redirect to home page (or login page as per your logic)
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    setToken(token);

  }, [token]);

  const location = useLocation();

  // Define admin routes
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div>
      {/* Render Navbar only if NOT on admin routes */}
      {!isAdminRoute && <Navbar />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/admin/*" element={<AdminDashboard />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};


export default App;
