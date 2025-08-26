
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Top bar com informações de contato */}
      <div className="bg-warm-gray text-white py-2 px-4 text-sm hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>(84) 9 8863-7195</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>alinevivianeguimaraes@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>Seg-Sáb: 07h às 17h</span>
            </div>
          </div>
        </div>
      </div>

      {/* Header principal */}
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg' 
            : 'bg-transparent'
        }`}
        style={{ marginTop: isScrolled ? '0' : '40px' }}
      >
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <div className="bg-primary text-primary-foreground p-3 rounded-xl font-heading font-bold text-xl">
                DP
              </div>
              <div className="ml-3">
                <h1 className={`font-heading font-bold text-xl ${
                  isScrolled ? 'text-foreground' : 'text-white'
                }`}>
                  Depósito Príncipe Davi
                </h1>
                <p className={`text-sm ${
                  isScrolled ? 'text-muted-foreground' : 'text-white/80'
                }`}>
                  Material de Construção
                </p>
              </div>
            </div>

            {/* Menu Desktop */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('inicio')}
                className={`font-medium transition-colors ${
                  isScrolled 
                    ? 'text-foreground hover:text-primary' 
                    : 'text-white hover:text-primary'
                }`}
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('sobre')}
                className={`font-medium transition-colors ${
                  isScrolled 
                    ? 'text-foreground hover:text-primary' 
                    : 'text-white hover:text-primary'
                }`}
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('servicos')}
                className={`font-medium transition-colors ${
                  isScrolled 
                    ? 'text-foreground hover:text-primary' 
                    : 'text-white hover:text-primary'
                }`}
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className={`font-medium transition-colors ${
                  isScrolled 
                    ? 'text-foreground hover:text-primary' 
                    : 'text-white hover:text-primary'
                }`}
              >
                Contato
              </button>
              <Button
                onClick={() => window.open('https://wa.me/5584988637195', '_blank')}
                className="btn-whatsapp"
              >
                WhatsApp
              </Button>
            </div>

            {/* Menu Mobile Toggle */}
            <button
              onClick={toggleMenu}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isScrolled 
                  ? 'text-foreground hover:bg-secondary' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Menu Mobile */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-border/10">
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection('inicio')}
                  className={`font-medium text-left transition-colors ${
                    isScrolled 
                      ? 'text-foreground hover:text-primary' 
                      : 'text-white hover:text-primary'
                  }`}
                >
                  Início
                </button>
                <button
                  onClick={() => scrollToSection('sobre')}
                  className={`font-medium text-left transition-colors ${
                    isScrolled 
                      ? 'text-foreground hover:text-primary' 
                      : 'text-white hover:text-primary'
                  }`}
                >
                  Sobre
                </button>
                <button
                  onClick={() => scrollToSection('servicos')}
                  className={`font-medium text-left transition-colors ${
                    isScrolled 
                      ? 'text-foreground hover:text-primary' 
                      : 'text-white hover:text-primary'
                  }`}
                >
                  Serviços
                </button>
                <button
                  onClick={() => scrollToSection('contato')}
                  className={`font-medium text-left transition-colors ${
                    isScrolled 
                      ? 'text-foreground hover:text-primary' 
                      : 'text-white hover:text-primary'
                  }`}
                >
                  Contato
                </button>
                <Button
                  onClick={() => window.open('https://wa.me/5584988637195', '_blank')}
                  className="btn-whatsapp w-full"
                >
                  WhatsApp
                </Button>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
