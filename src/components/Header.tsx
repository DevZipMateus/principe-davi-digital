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
      {/* Top bar com informações de contato - oculto em mobile */}
      <div className="bg-warm-gray text-white py-2 px-4 text-sm hidden lg:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4 xl:space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span className="text-xs xl:text-sm">(84) 9 8863-7195</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span className="text-xs xl:text-sm">alinevivianeguimaraes@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span className="text-xs xl:text-sm">Seg-Sáb: 07h às 17h</span>
            </div>
          </div>
        </div>
      </div>

      {/* Header principal */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white shadow-md lg:top-[40px]">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/f1c1fe08-f392-46c8-93ab-fa5232590eb8.png" 
                alt="Depósito Príncipe Davi" 
                className="h-12 sm:h-14 lg:h-16 w-auto"
              />
            </div>

            {/* Menu Desktop */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <button
                onClick={() => scrollToSection('inicio')}
                className="font-medium text-sm xl:text-base transition-colors text-foreground hover:text-primary"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('sobre')}
                className="font-medium text-sm xl:text-base transition-colors text-foreground hover:text-primary"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('servicos')}
                className="font-medium text-sm xl:text-base transition-colors text-foreground hover:text-primary"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="font-medium text-sm xl:text-base transition-colors text-foreground hover:text-primary"
              >
                Contato
              </button>
              <Button
                onClick={() => window.open('https://wa.me/5584988637195', '_blank')}
                className="btn-whatsapp text-sm"
                size="sm"
              >
                WhatsApp
              </Button>
            </div>

            {/* Menu Mobile Toggle */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg transition-colors text-foreground hover:bg-secondary"
            >
              {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>

          {/* Menu Mobile */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 py-4 border-t border-border/10">
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection('inicio')}
                  className="font-medium text-left text-sm sm:text-base transition-colors text-foreground hover:text-primary"
                >
                  Início
                </button>
                <button
                  onClick={() => scrollToSection('sobre')}
                  className="font-medium text-left text-sm sm:text-base transition-colors text-foreground hover:text-primary"
                >
                  Sobre
                </button>
                <button
                  onClick={() => scrollToSection('servicos')}
                  className="font-medium text-left text-sm sm:text-base transition-colors text-foreground hover:text-primary"
                >
                  Serviços
                </button>
                <button
                  onClick={() => scrollToSection('contato')}
                  className="font-medium text-left text-sm sm:text-base transition-colors text-foreground hover:text-primary"
                >
                  Contato
                </button>
                
                {/* Informações de contato no mobile */}
                <div className="pt-4 mt-4 border-t border-border/10 space-y-3">
                  <div className="flex items-center text-xs sm:text-sm text-muted-foreground">
                    <Phone className="w-4 h-4 mr-2" />
                    <span>(84) 9 8863-7195</span>
                  </div>
                  <div className="flex items-center text-xs sm:text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>Seg-Sáb: 07h às 17h</span>
                  </div>
                </div>
                
                <Button
                  onClick={() => window.open('https://wa.me/5584988637195', '_blank')}
                  className="btn-whatsapp w-full mt-4"
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
