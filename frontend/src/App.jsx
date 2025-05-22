import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Collection from './pages/Collection';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import PlaceOrder from './pages/PlaceOrder';
import Orders from './pages/Orders';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './pages/Verify';
import 'font-awesome/css/font-awesome.min.css';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer />
      <Navbar />
      <SearchBar />

      <Routes>
        {/* Public Routes */}
        <Route path='/login' element={<Login />} />
        <Route path='/verify' element={<Verify />} />

        {/* Protected Routes */}
        <Route path='/' element={
          <ProtectedRoute><Home /></ProtectedRoute>
        } />
        <Route path='/about' element={
          <ProtectedRoute><About /></ProtectedRoute>
        } />
        <Route path='/contact' element={
          <ProtectedRoute><Contact /></ProtectedRoute>
        } />
        <Route path='/product/:productId' element={
          <ProtectedRoute><Product /></ProtectedRoute>
        } />
        <Route path='/cart' element={
          <ProtectedRoute><Cart /></ProtectedRoute>
        } />
        <Route path='/place-order' element={
          <ProtectedRoute><PlaceOrder /></ProtectedRoute>
        } />
        <Route path='/orders' element={
          <ProtectedRoute><Orders /></ProtectedRoute>
        } />
        <Route path="/collection/:collectionName" element={
          <ProtectedRoute><Collection /></ProtectedRoute>
        } />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
