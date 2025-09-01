
import React from 'react';
import { ArrowRight, Star, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background com imagem da loja */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: `url('/lovable-uploads/76fcb485-4f16-4e21-88f1-61d6210f14fb.png')`
        }}
      ></div>
      
      {/* Overlay escuro para melhorar legibilidade */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Padrão de construção sutil */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 sm:top-10 left-4 sm:left-10 w-8 h-8 sm:w-16 sm:h-16 border-2 border-white rotate-45"></div>
        <div className="absolute top-16 sm:top-32 right-8 sm:right-20 w-6 h-6 sm:w-12 sm:h-12 border-2 border-white rotate-12"></div>
        <div className="absolute bottom-10 sm:bottom-20 left-1/4 w-4 h-4 sm:w-8 sm:h-8 border-2 border-white rotate-45"></div>
        <div className="absolute bottom-20 sm:bottom-40 right-1/3 w-10 h-10 sm:w-20 sm:h-20 border-2 border-white rotate-12"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Conteúdo principal */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 mb-4 sm:mb-6 animate-fade-in-up">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-white mr-2" />
              <span className="text-white text-xs sm:text-sm font-medium">Realizando sonhos desde o início</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-4 sm:mb-6 animate-fade-in-up">
              Construindo o Futuro com
              <span className="block text-white/90 font-heading">
                Qualidade e Dedicação
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in-up">
              Do sonho à realidade: oferecemos materiais de construção de qualidade em elétrica, 
              hidráulica, acabamento e acessórios para transformar sua casa no lar dos seus sonhos.
            </p>

            {/* Features */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-6 sm:mb-8 animate-fade-in-up">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2 justify-center sm:justify-start">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-white mr-2" />
                <span className="text-white text-xs sm:text-sm">Qualidade Garantida</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2 justify-center sm:justify-start">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-white mr-2" />
                <span className="text-white text-xs sm:text-sm">Seg-Sáb 7h-17h</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in-up">
              <Button 
                size="lg" 
                onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })} 
                className="btn-hero group w-full sm:w-auto"
              >
                Nossos Serviços
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => window.open('https://wa.me/5584988637195', '_blank')} 
                className="btn-hero bg-[#e1bb3b] w-full sm:w-auto"
              >
                Fale Conosco
              </Button>
            </div>
          </div>

          {/* Imagem/Visual */}
          <div className="relative mt-8 lg:mt-0 animate-scale-in">
            <div className="relative">
              {/* Card principal */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20">
                <div className="text-center">
                  <div className="bg-white/20 rounded-full w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 flex items-center justify-center mx-auto mb-4 sm:mb-6 p-4">
                    <img 
                      src="/lovable-uploads/8d2b0c1e-ffc6-4252-9485-5e4e8c27563c.png" 
                      alt="Depósito Príncipe Davi" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2">
                    Depósito Príncipe Davi
                  </h3>
                  <p className="text-sm sm:text-base text-white/80 mb-4 sm:mb-6">
                    "Uma empresa nascida de um sonho, crescendo a cada dia com fé e dedicação"
                  </p>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
                    <div>
                      <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white">100%</div>
                      <div className="text-xs text-white/70">Dedicação</div>
                    </div>
                    <div>
                      <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white">24h</div>
                      <div className="text-xs text-white/70">Atendimento</div>
                    </div>
                    <div>
                      <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white">∞</div>
                      <div className="text-xs text-white/70">Aprendizado</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cards flutuantes - apenas em telas maiores */}
              <div className="hidden md:block">
                <div className="absolute -top-4 -right-4 bg-construction-orange text-white p-3 lg:p-4 rounded-xl shadow-lg animate-pulse-custom">
                  <div className="text-xs lg:text-sm font-semibold">Elétrica</div>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-construction-blue text-white p-3 lg:p-4 rounded-xl shadow-lg animate-pulse-custom">
                  <div className="text-xs lg:text-sm font-semibold">Hidráulica</div>
                </div>
                <div className="absolute top-1/2 -right-8 bg-construction-green text-white p-3 lg:p-4 rounded-xl shadow-lg animate-pulse-custom">
                  <div className="text-xs lg:text-sm font-semibold">Acabamento</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-white/50 rounded-full mt-1 sm:mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
