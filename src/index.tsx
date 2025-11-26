import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SubjectsPage from "./pages/SubjectsPage";
import MedWorkshop from './pages/MedWorkshop';
import SignUp from './pages/SignUp';
import LoginPage from './pages/LoginPage';
import ContactPage from './pages/ContactPage';
import JoinPage from './pages/JoinPage';
import ScrollToTop from './components/ScrollToTop';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error("Root element missing");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/subjects" element={<SubjectsPage />} />
        <Route path="/med-workshop" element={<MedWorkshop />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/join-us" element={<JoinPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
