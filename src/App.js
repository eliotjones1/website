import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';
import { PageTransitionProvider } from './components/PageTransition';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ResearchPage from './pages/ResearchPage';
import PersonalPage from './pages/PersonalPage';
import ContactPage from './pages/ContactPage';
import './App.css';

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <PageTransitionProvider>
      <div className="App">
        {!isHomePage && <NavBar />}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/personal" element={<PersonalPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </PageTransitionProvider>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
