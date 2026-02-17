import { useState, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';

import HomePage from './components/HomePage';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';

// Lazy load heavy components
const ResumePage = lazy(() => import('./components/ResumePage'));
const ProjectsPage = lazy(() => import('./components/ProjectsPage'));
const ServicesPage = lazy(() => import('./components/ServicesPage'));
const ContactPage = lazy(() => import('./components/ContactPage'));

// Simple loading fallback for route transitions
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
  </div>
);

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(() => {
    // Check if we've already visited in this session
    return !sessionStorage.getItem('hasVisited');
  });

  const handleLoadingComplete = () => {
    setLoading(false);
    sessionStorage.setItem('hasVisited', 'true');
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen onComplete={handleLoadingComplete} key="loader" />}
      </AnimatePresence>

      {!loading && (
        <div className="min-h-screen relative">
          <div className="fixed inset-0 z-[-1]">
            {/* Use conditional background based on route if needed, or keeping global background for consistency */}
            {location.pathname !== '/services' ? (
              <>
                <img
                  src="/background.webp"
                  alt="background"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]" />
              </>
            ) : null} {/* Services page has its own background */}
          </div>
          <CustomCursor />
          <>
            <Navigation />
            <Suspense fallback={<PageLoader />}>
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomePage />} />
                <Route path="/resume" element={<ResumePage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<HomePage />} />
              </Routes>
            </Suspense>
          </>
        </div>
      )}
    </>
  );
}

export default App;
