import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/' },
    {
      name: 'Projects',
      path: '#',
      dropdown: true,
      items: [
        { name: 'Aethon V4', path: '/projects/aethon' },
        { name: 'EBaja', path: '/projects/ebaja' },
      ]
    },
    { name: 'Alumni', path: '/alumni' },
    { name: 'Project Gallery', path: '/gallery' }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-transparent shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src="/faviconLogo (1).png" alt="Club Logo" className="h-10 w-auto mr-2" />
            <span className="font-bold text-2xl" style={{ fontFamily: "'Montserrat', sans-serif", color: '#cc3333' }}>
              MITS Motorsports
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              item.dropdown ? (
                <div key={item.name} className="relative group">
                  <button
                    onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                    className={`px-8 py-4 rounded-md font-medium flex items-center text-xl ${
                      location.pathname.startsWith('/projects') && location.pathname !== '/projects/gallery'
                        ? 'text-primary-600'
                        : isScrolled ? 'text-secondary-900 hover:text-primary-600' : 'text-secondary-900 hover:text-primary-600'
                    }`}
                  >
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-1">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className={`block px-4 py-2 text-sm ${
                            location.pathname === subItem.path
                              ? 'bg-primary-50 text-primary-600'
                              : 'text-secondary-900 hover:bg-primary-50 hover:text-primary-600'
                          }`}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-4 py-2 rounded-md font-medium text-xl ${
                    location.pathname === item.path
                      ? 'text-primary-600'
                      : isScrolled ? 'text-secondary-900 hover:text-primary-600' : 'text-secondary-900 hover:text-primary-600'
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-secondary-900 hover:text-primary-600 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white border-t mt-2"
        >
          <div className="container-custom py-4 space-y-1">
            {navItems.map((item) => (
              item.dropdown ? (
                <div key={item.name}>
                  <button
                    onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                    className="w-full flex justify-between items-center px-4 py-2 text-left font-medium text-secondary-900 hover:bg-primary-50 hover:text-primary-600 rounded-md"
                  >
                    {item.name}
                    <ChevronDown className={`h-4 w-4 transition-transform ${isProjectsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isProjectsOpen && (
                    <div className="pl-6 space-y-1 mt-1">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className={`block px-4 py-2 rounded-m ${
                            location.pathname === subItem.path
                              ? 'bg-primary-50 text-primary-600'
                              : 'text-secondary-900 hover:bg-primary-50 hover:text-primary-600'
                          }`}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-4 py-2 rounded-md font-medium ${
                    location.pathname === item.path
                      ? 'bg-primary-50 text-primary-600'
                      : 'text-secondary-900 hover:bg-primary-50 hover:text-primary-600'
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
