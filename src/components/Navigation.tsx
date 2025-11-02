import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const pages = ['HOME', 'RESUME', 'MY PROJECTS', 'MY SERVICES', 'CONTACT'];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button 
            onClick={() => onNavigate('ENTRY')} 
            className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 bg-[length:200%_auto] animate-[shine_3s_linear_infinite] text-xl tracking-wider font-[Pacifico] hover:opacity-80 transition-opacity duration-300 -mt-1 leading-relaxed py-1"
          >
            Surya Teja
          </button>

          <div className="hidden md:flex space-x-8">
            {pages.map((page) => (
              <button
                key={page}
                onClick={() => onNavigate(page)}
                className={`px-4 py-2 font-normal transition-all duration-300 ${
                  currentPage === page
                    ? 'text-orange-400 border-b-2 border-orange-400'
                    : 'text-gray-400 hover:text-orange-400'
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-orange-400"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black">
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => {
                onNavigate(page);
                setIsOpen(false);
              }}
              className={`block w-full text-left px-4 py-3 font-normal transition-all duration-300 ${
                currentPage === page
                  ? 'text-orange-400 bg-orange-400/10'
                  : 'text-gray-400 hover:text-orange-400 hover:bg-orange-400/5'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navigation;
