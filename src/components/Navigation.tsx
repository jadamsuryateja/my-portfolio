
interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const pages = [
    { id: 'HOME', label: 'Home *' },
    { id: 'RESUME', label: 'Resume' },
    { id: 'MY SERVICES', label: 'Services' },
    { id: 'MY PROJECTS', label: 'Projects' },
    { id: 'CONTACT', label: 'Contact' }
  ];

  return (
    <nav className="fixed top-4 right-4 md:top-6 md:right-6 z-50 flex flex-col items-end gap-0.5 md:gap-1 text-xs md:text-base font-bold text-white uppercase tracking-wide">
      {pages.map((page) => (
        <button
          key={page.id}
          onClick={() => onNavigate(page.id)}
          className={`transition-colors duration-300 ${currentPage === page.id
              ? 'text-orange-400 cursor-default'
              : 'text-white/70 hover:text-orange-400'
            }`}
        >
          {page.label}
        </button>
      ))}
    </nav>
  );
}

export default Navigation;
