import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Manageaccount from './Manageaccount';
import Loginpage from './Loginpage';
import Registerpage from './Registerpage';
import Dashboard from './Dashboardpage';
import Phone from './Phone';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/register" element={<Registerpage />} />
        
        <Route path="/dashboard" element={<Dashboard />}>
        <Route path="manageaccount" element={<Manageaccount />} />
        <Route path="phone" element={<Phone />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);



