
import React from 'react';
import { Phone, Mail, MapPin, Clock, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-warm-gray text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="bg-primary text-primary-foreground p-3 rounded-xl font-heading font-bold text-xl mr-3">
                DP
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl">Depósito Príncipe Davi</h3>
                <p className="text-white/70 text-sm">Material de Construção</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed mb-6 max-w-md">
              Um sonho realizado através da fé e dedicação. Oferecemos materiais de construção 
              de qualidade com atendimento personalizado e preços justos.
            </p>
            <div className="flex items-center text-white/70 text-sm">
              <Heart className="w-4 h-4 mr-2 text-primary" />
              <span>Feito com dedicação e fé</span>
            </div>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-primary flex-shrink-0" />
                <div>
                  <a 
                    href="tel:+5584988637195" 
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    (84) 9 8863-7195
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="w-4 h-4 mr-3 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <a 
                    href="mailto:alinevivianeguimaraes@gmail.com" 
                    className="text-white/80 hover:text-white transition-colors text-sm break-all"
                  >
                    alinevivianeguimaraes@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-white/80 text-sm">
                  Rua São José<br />
                  Muriu Praia
                </div>
              </div>
            </div>
          </div>

          {/* Horário */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Funcionamento</h4>
            <div className="flex items-start">
              <Clock className="w-4 h-4 mr-3 text-primary flex-shrink-0 mt-0.5" />
              <div className="text-white/80 text-sm">
                <div className="mb-2">
                  <strong className="text-white">Segunda a Sábado</strong><br />
                  07:00 às 17:00
                </div>
                <div className="text-white/60">
                  Domingo: Fechado
                </div>
              </div>
            </div>

            <div className="mt-6">
              <a
                href="https://wa.me/5584988637195"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2024 Depósito Príncipe Davi. Todos os direitos reservados.</p>
              <p className="mt-1">CNPJ: 35.835.871/0001-35</p>
            </div>
            <div className="text-center md:text-right">
              <p>www.depositoprincipedavi.com.br</p>
              <p className="mt-1 text-primary">Realizando sonhos desde o início</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
