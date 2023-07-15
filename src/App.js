import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Products from './components/items/Products';
import LoginForm from './components/User/LoginForm';
import RegisterForm from './components/User/RegisterForm';
import Userhome from './components/User/dashboard';
import DesignCompetitionPage from './components/Design/DesignCompetition';
import Profile from './components/User/Profile';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products/" element={<Products />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path='/signup' element={<RegisterForm/>} />
        <Route path='/dashboard' element={<Userhome/>} />
        <Route path='/design-competition' element={<DesignCompetitionPage />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
