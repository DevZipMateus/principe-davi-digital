
import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    // Mostrar o botão após 2 segundos
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    // Esconder tooltip após 5 segundos
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 7000);

    return () => {
      clearTimeout(timer);
      clearTimeout(tooltipTimer);
    };
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá! Vim do site e gostaria de conhecer mais sobre o Depósito Príncipe Davi.');
    window.open(`https://wa.me/5584988637195?text=${message}`, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg p-4 mb-2 max-w-xs animate-fade-in-up">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="pr-6">
            <p className="text-sm font-medium text-gray-900 mb-1">
              Precisa de ajuda?
            </p>
            <p className="text-xs text-gray-600">
              Converse conosco no WhatsApp! Estamos aqui para ajudar com seus projetos de construção.
            </p>
          </div>
          {/* Seta do tooltip */}
          <div className="absolute bottom-0 right-6 transform translate-y-full">
            <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
          </div>
        </div>
      )}

      {/* Botão WhatsApp */}
      <button
        onClick={handleWhatsAppClick}
        className="whatsapp-float group"
        aria-label="Conversar no WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        
        {/* Animação de pulse */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></div>
      </button>
    </div>
  );
};

export default WhatsAppFloat;
