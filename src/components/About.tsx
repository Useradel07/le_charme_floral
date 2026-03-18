import { useEffect, useRef, useState } from 'react';

export default function About() {
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
      id="about"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-[#F8F5F2] to-white"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center mb-12">
          <div className="h-px w-16 bg-[#C9A96E]"></div>
          <h2 className={`font-serif text-4xl md:text-5xl text-[#8B0000] mx-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            À propos
          </h2>
          <div className="h-px w-16 bg-[#C9A96E]"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative group">
              <div className="absolute inset-0 bg-[#8B0000]/10 rounded-lg transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
              <img
                src="images/6.jpeg"
                alt="Création artisanale"
                className="relative rounded-lg shadow-xl w-full object-cover h-96"
              />
            </div>
          </div>

          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Basée à Bizerte, <span className="font-semibold text-[#8B0000]">Le Charme Floral</span> est née d'une passion profonde pour l'art floral et le souci du détail.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Chaque bouquet est une création unique, conçue avec soin et authenticité. Que ce soit avec des fleurs naturelles fraîches ou des compositions artificielles durables, je mets tout mon cœur dans chaque arrangement.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Mon approche allie élégance française, raffinement et une touche personnelle qui rend chaque création spéciale. De la sélection des fleurs à l'assemblage final, tout est fait main avec amour.
            </p>
            <p className="text-lg text-[#8B0000] font-serif italic">
              — Manel, créatrice florale
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
