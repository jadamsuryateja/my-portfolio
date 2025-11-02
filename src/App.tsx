import { useState, useEffect } from 'react';
import EntryPage from './components/EntryPage';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import ResumePage from './components/ResumePage';
import ProjectsPage from './components/ProjectsPage';
import ServicesPage from './components/ServicesPage';
import ContactPage from './components/ContactPage';
import CustomCursor from './components/CustomCursor';

function App() {
  const [hasEntered, setHasEntered] = useState(() => {
    return localStorage.getItem('hasEntered') === 'true';
  });
  
  const [currentPage, setCurrentPage] = useState(() => {
    return localStorage.getItem('currentPage') || 'HOME';
  });

  // Update localStorage when hasEntered changes
  useEffect(() => {
    localStorage.setItem('hasEntered', hasEntered.toString());
  }, [hasEntered]);

  // Update localStorage when currentPage changes
  useEffect(() => {
    localStorage.setItem('currentPage', currentPage);
  }, [currentPage]);

  const handleEnter = () => {
    setHasEntered(true);
    setCurrentPage('HOME');
  };

  const handleNavigate = (page: string) => {
    if (page === 'ENTRY') {
      setHasEntered(false);
      localStorage.removeItem('hasEntered');
      localStorage.removeItem('currentPage');
    } else {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'HOME':
        return <HomePage />;
      case 'RESUME':
        return <ResumePage />;
      case 'MY PROJECTS':
        return <ProjectsPage />;
      case 'MY SERVICES':
        return <ServicesPage />;
      case 'CONTACT':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <CustomCursor />
      {hasEntered ? (
        <>
          <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
          {renderPage()}
        </>
      ) : (
        <EntryPage onEnter={handleEnter} />
      )}
    </div>
  );
}

export default App;
