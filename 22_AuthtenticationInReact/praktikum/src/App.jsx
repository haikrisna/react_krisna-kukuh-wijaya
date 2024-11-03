import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AuthAccount from './AuthAccount';
import CreateProduct from './CreateProduct';

function App() {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'; // Memastikan boolean

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthAccount />} />
        <Route 
          path="/createproduct" 
          element={isLoggedIn ? <CreateProduct /> : <Navigate to="/" />} // Arahkan ke '/' jika tidak login
        />
      </Routes>
    </Router>
  );
}

export default App;
