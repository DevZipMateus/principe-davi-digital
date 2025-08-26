
import React from 'react';
import { Heart, TrendingUp, Users, Award } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 section-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-foreground mb-4 animate-fade-in-up">
            Nossa História
          </h2>
          <p className="text-lead max-w-3xl mx-auto animate-fade-in-up">
            Uma jornada de fé, aprendizado e dedicação no mundo da construção
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* História */}
          <div className="animate-fade-in-up">
            <div className="bg-card card-elevated rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-primary/10 p-3 rounded-xl mr-4">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="heading-md text-card-foreground">Um Sonho Realizado</h3>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                "Minha empresa é um sonho que eu tenho há muitos anos, e comecei do nada sem entender 
                nada sobre o assunto de material de construção, mas a cada dia aprendo algo novo e 
                tenho fé em Deus que já deu certo."
              </p>
              
              <div className="bg-primary/5 rounded-lg p-4 border-l-4 border-primary">
                <p className="text-primary font-medium italic">
                  Com fé, dedicação e aprendizado constante, transformamos sonhos em realidade, 
                  oferecendo sempre o melhor para nossos clientes.
                </p>
              </div>
            </div>
          </div>

          {/* Valores */}
          <div className="animate-slide-in-right">
            <div className="grid gap-6">
              {/* Fé */}
              <div className="bg-card card-elevated rounded-xl p-6 flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4 flex-shrink-0">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground mb-2">Fé e Determinação</h4>
                  <p className="text-muted-foreground text-sm">
                    Acreditamos que com fé e trabalho árduo, todos os sonhos podem se tornar realidade.
                  </p>
                </div>
              </div>

              {/* Aprendizado */}
              <div className="bg-card card-elevated rounded-xl p-6 flex items-start">
                <div className="bg-accent/10 p-3 rounded-lg mr-4 flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground mb-2">Aprendizado Contínuo</h4>
                  <p className="text-muted-foreground text-sm">
                    A cada dia aprendemos algo novo, sempre buscando oferecer o melhor para nossos clientes.
                  </p>
                </div>
              </div>

              {/* Dedicação */}
              <div className="bg-card card-elevated rounded-xl p-6 flex items-start">
                <div className="bg-construction-green/10 p-3 rounded-lg mr-4 flex-shrink-0">
                  <Users className="w-6 h-6 text-construction-green" />
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground mb-2">Atendimento Dedicado</h4>
                  <p className="text-muted-foreground text-sm">
                    Tratamos cada cliente como família, oferecendo suporte personalizado e atencioso.
                  </p>
                </div>
              </div>

              {/* Qualidade */}
              <div className="bg-card card-elevated rounded-xl p-6 flex items-start">
                <div className="bg-construction-orange/10 p-3 rounded-lg mr-4 flex-shrink-0">
                  <Award className="w-6 h-6 text-construction-orange" />
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground mb-2">Qualidade Garantida</h4>
                  <p className="text-muted-foreground text-sm">
                    Selecionamos cuidadosamente os melhores produtos para garantir a satisfação total.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Estatísticas */}
        <div className="bg-card card-elevated rounded-2xl p-8 animate-scale-in">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Dedicação</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">7-17h</div>
              <div className="text-muted-foreground">Atendimento Diário</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-construction-green mb-2">∞</div>
              <div className="text-muted-foreground">Aprendizado</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-construction-orange mb-2">1</div>
              <div className="text-muted-foreground">Sonho Realizado</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
