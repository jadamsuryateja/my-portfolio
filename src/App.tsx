import { useState, Suspense, lazy } from 'react';
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
  const [loading, setLoading] = useState(() => {
    // Check if we've already visited in this session
    return !sessionStorage.getItem('hasVisited');
  });

  /* Removed sessionStorage for currentPage - navigation resets on refresh */
  const [currentPage, setCurrentPage] = useState('HOME');

  /* Removed useEffect that saved currentPage */

  const handleNavigate = (page: string) => {
    if (page === 'ENTRY') return; // Entry page no longer exists
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLoadingComplete = () => {
    setLoading(false);
    sessionStorage.setItem('hasVisited', 'true');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'HOME':
        return <HomePage onNavigate={handleNavigate} />;
      case 'RESUME':
        return <ResumePage />;
      case 'MY PROJECTS':
        return <ProjectsPage />;
      case 'MY SERVICES':
        return <ServicesPage />;
      case 'CONTACT':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen onComplete={handleLoadingComplete} key="loader" />}
      </AnimatePresence>

      {!loading && (
        <div className="min-h-screen relative">
          <div className="fixed inset-0 z-[-1]">
            <img
              src="/background.webp"
              alt="background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]" />
          </div>
          <CustomCursor />
          <>
            <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
            <Suspense fallback={<PageLoader />}>
              {renderPage()}
            </Suspense>
          </>
        </div>
      )}
    </>
  );
}

export default App;
