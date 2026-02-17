import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation();

  const pages = [
    { path: '/', label: 'Home *' },
    { path: '/resume', label: 'Resume' },
    { path: '/services', label: 'Services' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed top-4 right-4 md:top-6 md:right-6 z-50 flex flex-col items-end gap-0.5 md:gap-1 text-xs md:text-base font-bold text-white uppercase tracking-wide">
      {pages.map((page) => {
        const isActive = location.pathname === page.path;
        return (
          <Link
            key={page.path}
            to={page.path}
            className={`transition-colors duration-300 ${isActive
              ? 'text-orange-400 cursor-default'
              : 'text-white/70 hover:text-orange-400'
              }`}
          >
            {page.label}
          </Link>
        );
      })}
    </nav>
  );
}

export default Navigation;
