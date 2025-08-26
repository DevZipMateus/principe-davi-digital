
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
        <div className="absolute top-10 left-10 w-16 h-16 border-2 border-white rotate-45"></div>
        <div className="absolute top-32 right-20 w-12 h-12 border-2 border-white rotate-12"></div>
        <div className="absolute bottom-20 left-1/4 w-8 h-8 border-2 border-white rotate-45"></div>
        <div className="absolute bottom-40 right-1/3 w-20 h-20 border-2 border-white rotate-12"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo principal */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-in-up">
              <Star className="w-4 h-4 text-white mr-2" />
              <span className="text-white text-sm font-medium">Realizando sonhos desde o início</span>
            </div>
            
            <h1 className="heading-xl text-white mb-6 animate-fade-in-up">
              Construindo o Futuro com
              <span className="block text-white/90 font-heading">
                Qualidade e Dedicação
              </span>
            </h1>
            
            <p className="text-lead text-white/90 mb-8 max-w-xl animate-fade-in-up">
              Do sonho à realidade: oferecemos materiais de construção de qualidade em elétrica, 
              hidráulica, acabamento e acessórios para transformar sua casa no lar dos seus sonhos.
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-4 mb-8 animate-fade-in-up">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <Shield className="w-5 h-5 text-white mr-2" />
                <span className="text-white text-sm">Qualidade Garantida</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <Clock className="w-5 h-5 text-white mr-2" />
                <span className="text-white text-sm">Seg-Sáb 7h-17h</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
              <Button 
                size="lg"
                onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-hero group"
              >
                Nossos Serviços
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => window.open('https://wa.me/5584988637195', '_blank')}
                className="btn-hero"
              >
                Fale Conosco
              </Button>
            </div>
          </div>

          {/* Imagem/Visual */}
          <div className="relative lg:mt-0 mt-12 animate-scale-in">
            <div className="relative">
              {/* Card principal */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-center">
                  <div className="bg-white/20 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                    <div className="text-4xl font-bold text-white">DP</div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Depósito Príncipe Davi
                  </h3>
                  <p className="text-white/80 mb-6">
                    "Uma empresa nascida de um sonho, crescendo a cada dia com fé e dedicação"
                  </p>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-white">100%</div>
                      <div className="text-xs text-white/70">Dedicação</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">24h</div>
                      <div className="text-xs text-white/70">Atendimento</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">∞</div>
                      <div className="text-xs text-white/70">Aprendizado</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cards flutuantes */}
              <div className="absolute -top-4 -right-4 bg-construction-orange text-white p-4 rounded-xl shadow-lg animate-pulse-custom">
                <div className="text-sm font-semibold">Elétrica</div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-construction-blue text-white p-4 rounded-xl shadow-lg animate-pulse-custom">
                <div className="text-sm font-semibold">Hidráulica</div>
              </div>
              <div className="absolute top-1/2 -right-8 bg-construction-green text-white p-4 rounded-xl shadow-lg animate-pulse-custom">
                <div className="text-sm font-semibold">Acabamento</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
