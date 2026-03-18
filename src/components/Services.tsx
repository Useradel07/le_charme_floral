import { useEffect, useRef, useState } from 'react';
import { Flower2, Heart, Wand } from 'lucide-react';

const SERVICES = [
  {
    icon: Flower2,
    title: 'Bouquets Naturels',
    description: 'Des compositions fraîches et élégantes, créées avec des fleurs de saison soigneusement sélectionnées pour leur beauté et leur qualité.'
  },
  {
    icon: Wand,
    title: 'Bouquets Artificiels',
    description: 'Des créations durables et raffinées qui conservent leur éclat dans le temps, parfaites pour une décoration permanente et sophistiquée.'
  },
  {
    icon: Heart,
    title: 'Créations Personnalisées',
    description: 'Un service sur-mesure pour donner vie à vos envies. Chaque bouquet est conçu selon vos préférences, couleurs et occasions spéciales.'
  }
];

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-white to-[#F8F5F2]"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center mb-16">
          <div className="h-px w-16 bg-[#C9A96E]"></div>
          <h2 className={`font-serif text-4xl md:text-5xl text-[#8B0000] mx-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Services
          </h2>
          <div className="h-px w-16 bg-[#C9A96E]"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {SERVICES.map((service, index) => (
            <div
              key={service.title}
              className={`service-card ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="mb-6 inline-block p-4 bg-[#8B0000]/5 rounded-full">
                <service.icon size={36} className="text-[#8B0000]" />
              </div>
              <h3 className="font-serif text-2xl text-[#8B0000] mb-4">
                {service.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
