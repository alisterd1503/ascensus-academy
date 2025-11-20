import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SubjectsPage from "./pages/SubjectsPage";
import MedWorkshop from './pages/MedWorkshop';
import ApplyPage from './pages/ApplyPage';
import LoginPage from './pages/LoginPage';
import ContactPage from './pages/ContactPage';
import JoinPage from './pages/JoinPage';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error("Root element missing");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/subjects" element={<SubjectsPage />} />
        <Route path="/med-workshop" element={<MedWorkshop />} />
        <Route path="/apply" element={<ApplyPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/join-us" element={<JoinPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
