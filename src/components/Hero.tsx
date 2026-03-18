import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToGallery = () => {
    const element = document.getElementById('gallery');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://i.pinimg.com/originals/0b/c8/77/0bc8772a1f37d0e41bc91a47c01b0a2e.jpg"
          alt="Bouquet floral élégant"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
      </div>

      <div className={`relative z-10 text-center px-6 max-w-4xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 tracking-wide">
          Le Charme Floral
        </h1>
        <p className="text-xl md:text-2xl text-[#F8F5F2] mb-8 font-light tracking-wide">
          Bouquets artificiels et naturels faits avec passion
        </p>
        <button
          onClick={scrollToGallery}
          className="btn-primary"
        >
          Découvrir mes créations
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
