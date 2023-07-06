import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/login/LoginForm';
import Dashboard from './components/dashboard/Dashboard';
import Products from './components/items/Products';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products/:categoryId" element={<Products />} />
      </Routes>
    </Router>
  );
};

export default App;
