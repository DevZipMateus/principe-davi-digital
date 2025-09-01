
import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  return (
    <section id="contato" className="py-12 sm:py-16 lg:py-20 section-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 animate-fade-in-up">
            Fale Conosco
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
            Estamos aqui para ajudar você a realizar seus projetos. Entre em contato conosco!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Informações de Contato */}
          <div className="animate-fade-in-up">
            <div className="bg-card card-elevated rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-semibold text-card-foreground mb-6 sm:mb-8">
                Informações de Contato
              </h3>
              
              <div className="space-y-6">
                {/* Telefone */}
                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 sm:p-3 rounded-xl mr-3 sm:mr-4 flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-card-foreground mb-1 text-sm sm:text-base">Telefone</h4>
                    <p className="text-muted-foreground text-sm sm:text-base">(84) 9 8863-7195</p>
                    <Button 
                      variant="link" 
                      className="p-0 h-auto text-primary hover:text-accent text-xs sm:text-sm"
                      onClick={() => window.location.href = 'tel:+5584988637195'}
                    >
                      Ligar Agora
                    </Button>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="bg-accent/10 p-2 sm:p-3 rounded-xl mr-3 sm:mr-4 flex-shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-card-foreground mb-1 text-sm sm:text-base">E-mail</h4>
                    <p className="text-muted-foreground break-all text-xs sm:text-sm">alinevivianeguimaraes@gmail.com</p>
                    <Button 
                      variant="link" 
                      className="p-0 h-auto text-primary hover:text-accent text-xs sm:text-sm"
                      onClick={() => window.location.href = 'mailto:alinevivianeguimaraes@gmail.com'}
                    >
                      Enviar E-mail
                    </Button>
                  </div>
                </div>

                {/* Endereço */}
                <div className="flex items-start">
                  <div className="bg-construction-green/10 p-2 sm:p-3 rounded-xl mr-3 sm:mr-4 flex-shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-construction-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-1 text-sm sm:text-base">Endereço</h4>
                    <p className="text-muted-foreground text-xs sm:text-sm">
                      Rua São José<br />
                      Muriu Praia
                    </p>
                  </div>
                </div>

                {/* Horário */}
                <div className="flex items-start">
                  <div className="bg-construction-orange/10 p-2 sm:p-3 rounded-xl mr-3 sm:mr-4 flex-shrink-0">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-construction-orange" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-1 text-sm sm:text-base">Horário de Funcionamento</h4>
                    <p className="text-muted-foreground text-xs sm:text-sm">
                      Segunda a Sábado<br />
                      07:00 às 17:00
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-green-50 rounded-xl border border-green-200">
                <div className="flex items-center mb-4">
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mr-3" />
                  <h4 className="font-semibold text-green-800 text-sm sm:text-base">Atendimento via WhatsApp</h4>
                </div>
                <p className="text-green-700 text-xs sm:text-sm mb-4">
                  Fale conosco diretamente pelo WhatsApp para um atendimento mais rápido e personalizado!
                </p>
                <Button 
                  className="btn-whatsapp w-full text-sm sm:text-base"
                  onClick={() => window.open('https://wa.me/5584988637195?text=Olá! Gostaria de conhecer mais sobre o Depósito Príncipe Davi.', '_blank')}
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Conversar no WhatsApp
                </Button>
              </div>
            </div>
          </div>

          {/* Mapa */}
          <div className="animate-slide-in-right">
            <div className="bg-card card-elevated rounded-2xl p-6 sm:p-8 h-full">
              <h3 className="text-xl sm:text-2xl font-semibold text-card-foreground mb-6">
                Nossa Localização
              </h3>
              
              {/* Placeholder para o mapa - seria implementado com API do Google Maps */}
              <div className="bg-muted rounded-xl h-64 sm:h-80 flex items-center justify-center mb-6">
                <div className="text-center">
                  <MapPin className="w-8 h-8 sm:w-12 sm:h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground font-medium text-sm sm:text-base">Mapa Interativo</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Rua São José, Muriu Praia
                  </p>
                </div>
              </div>

              <div className="text-center">
                <p className="text-muted-foreground mb-4 text-xs sm:text-sm">
                  Estamos localizados na Rua São José, Muriu Praia. 
                  Venha nos visitar e conheça nossos produtos!
                </p>
                <Button 
                  variant="outline"
                  onClick={() => window.open('https://maps.google.com/?q=Rua+São+José+Muriu+Praia', '_blank')}
                  className="btn-primary-outline w-full sm:w-auto text-sm"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Ver no Google Maps
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Informações Empresariais */}
        <div className="mt-12 sm:mt-16 bg-card card-elevated rounded-2xl p-6 sm:p-8 animate-scale-in">
          <div className="text-center">
            <h3 className="text-lg sm:text-xl font-semibold text-card-foreground mb-4">
              Depósito Príncipe Davi
            </h3>
            <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
              <div>
                <strong className="text-card-foreground">CNPJ:</strong><br />
                35.835.871/0001-35
              </div>
              <div>
                <strong className="text-card-foreground">Responsável:</strong><br />
                Depósito Príncipe Davi
              </div>
              <div>
                <strong className="text-card-foreground">Website:</strong><br />
                www.depositoprincipedavi.com.br
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
