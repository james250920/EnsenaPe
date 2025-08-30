import { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl md:text-3xl font-bold gradient-text">
              EnseñaPe
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300">
              Inicio
            </a>
            <a href="#como-funciona" className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300">
              Cómo Funciona
            </a>
            <a href="#caracteristicas" className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300">
              Características
            </a>
            <a href="#estadisticas" className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300">
              Estadísticas
            </a>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-primary-600 hover:text-primary-700 font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
              Iniciar Sesión
            </button>
            <button className="btn-primary">
              Registrarse
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600 focus:outline-none focus:text-primary-600 transition-colors duration-300"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <a href="#inicio" className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300">
                Inicio
              </a>
              <a href="#como-funciona" className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300">
                Cómo Funciona
              </a>
              <a href="#caracteristicas" className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300">
                Características
              </a>
              <a href="#estadisticas" className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300">
                Estadísticas
              </a>
              <div className="flex flex-col space-y-2 px-3 pt-4">
                <button className="text-primary-600 hover:text-primary-700 font-semibold py-2 px-4 rounded-lg transition-colors duration-300 text-left">
                  Iniciar Sesión
                </button>
                <button className="btn-primary text-center">
                  Registrarse
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
