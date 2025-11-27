import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../index.css';
import ScrollToTop from './components/ScrollToTop';

// Lazy-load pages
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const SubjectsPage = lazy(() => import('./pages/SubjectsPage'));
const MedWorkshop = lazy(() => import('./pages/MedWorkshop'));
const SignUp = lazy(() => import('./pages/SignUp'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const JoinPage = lazy(() => import('./pages/JoinPage'));

const Spinner = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-primary">
    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error("Root element missing");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<Spinner />}>
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
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
