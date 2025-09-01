
import React from 'react';
import { Zap, Droplets, Paintbrush, Home, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const services = [
    {
      icon: Zap,
      title: "Elétrica",
      description: "Materiais elétricos de qualidade para instalações seguras e eficientes",
      color: "construction-orange",
      bgColor: "bg-construction-orange/10",
      items: [
        "Fios e cabos elétricos",
        "Disjuntores e quadros",
        "Tomadas e interruptores",
        "Luminárias e lâmpadas",
        "Conduítes e eletrodutos"
      ]
    },
    {
      icon: Droplets,
      title: "Hidráulica",
      description: "Soluções completas em hidráulica para residências e comércios",
      color: "construction-blue",
      bgColor: "bg-construction-blue/10",
      items: [
        "Tubos e conexões PVC",
        "Registros e válvulas",
        "Torneiras e misturadores",
        "Caixas d'água",
        "Bombas e pressurizadores"
      ]
    },
    {
      icon: Paintbrush,
      title: "Acabamento",
      description: "Materiais de acabamento para dar o toque final da sua obra",
      color: "construction-green",
      bgColor: "bg-construction-green/10",
      items: [
        "Tintas e vernizes",
        "Pisos e revestimentos",
        "Azulejos e cerâmicas",
        "Massa corrida e gesso",
        "Ferramentas de pintura"
      ]
    },
    {
      icon: Home,
      title: "Acessórios para Casas",
      description: "Complementos essenciais para deixar sua casa completa",
      color: "primary",
      bgColor: "bg-primary/10",
      items: [
        "Ferragens em geral",
        "Parafusos e pregos",
        "Fechaduras e dobradiças",
        "Espelhos e acessórios",
        "Materiais de limpeza"
      ]
    }
  ];

  return (
    <section id="servicos" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 animate-fade-in-up">
            Nossos Serviços
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
            Oferecemos uma linha completa de materiais de construção para todas as suas necessidades
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12 sm:mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index} 
                className="card-service group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`${service.bgColor} p-3 sm:p-4 rounded-xl mb-4 inline-block`}>
                  <IconComponent className={`w-6 h-6 sm:w-8 sm:h-8 text-${service.color}`} />
                </div>
                
                <h3 className="text-lg sm:text-xl font-semibold text-card-foreground mb-3">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-xs sm:text-sm text-muted-foreground">
                      <div className={`w-2 h-2 rounded-full bg-${service.color} mr-3 flex-shrink-0 mt-1`}></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="ghost" 
                  className="w-full group-hover:bg-primary/10 group-hover:text-primary transition-colors text-sm"
                  onClick={() => window.open('https://wa.me/5584988637195?text=Olá! Gostaria de saber mais sobre ' + service.title, '_blank')}
                >
                  Saiba Mais
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="section-primary rounded-2xl p-6 sm:p-8 lg:p-12 text-center animate-scale-in">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary-foreground mb-4">
            Não encontrou o que procura?
          </h3>
          <p className="text-primary-foreground/90 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
            Entre em contato conosco! Estamos sempre aprendendo e crescendo. 
            Se não temos o que você precisa hoje, faremos o possível para conseguir amanhã.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => window.open('https://wa.me/5584988637195', '_blank')} 
              className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto"
            >
              Fale Conosco no WhatsApp
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => window.location.href = 'tel:+5584988637195'} 
              className="border-white/30 hover:bg-white/10 text-gray-950 w-full sm:w-auto"
            >
              Ligar Agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
