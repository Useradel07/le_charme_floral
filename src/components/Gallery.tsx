import { useEffect, useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

const GALLERY_IMAGES = [
  {
    id: 1,
    url: 'images/2.jpeg',
    alt: 'Bouquet rouge élégant',
    size: 'large'
  },
  {
    id: 2,
    url: 'images/4.jpeg',
    alt: 'Composition florale artisanale',
    size: 'small'
  },
  {
    id: 3,
    url: 'images/5.jpeg',
    alt: 'Détail bouquet romantique',
    size: 'small'
  },
  {
    id: 4,
    url: 'images/6.jpeg',
    alt: 'Bouquet premium',
    size: 'large'
  },
  {
    id: 5,
    url: 'images/7.jpeg',
    alt: 'Création personnalisée',
    size: 'medium'
  },
  {
    id: 6,
    url: 'images/8.jpeg',
    alt: 'Arrangement floral délicat',
    size: 'medium'
  },
  {
    id: 7,
    url: 'images/9.jpeg',
    alt: 'Bouquet artisanal',
    size: 'small'
  }
];

export default function Gallery() {
  const [isVisible, setIsVisible] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [lightboxIndex]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % GALLERY_IMAGES.length);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((lightboxIndex + 1) % GALLERY_IMAGES.length);
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((lightboxIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="py-24 bg-white"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center mb-16">
          <div className="h-px w-16 bg-[#C9A96E]"></div>
          <h2 className={`font-serif text-4xl md:text-5xl text-[#8B0000] mx-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Galerie
          </h2>
          <div className="h-px w-16 bg-[#C9A96E]"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {GALLERY_IMAGES.map((image, index) => (
            <div
              key={image.id}
              className={`
                gallery-item
                ${image.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
                ${image.size === 'medium' ? 'md:col-span-2' : ''}
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
              `}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => openLightbox(index)}
            >
              <OptimizedImage
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="gallery-overlay">
                <span className="text-white text-sm font-light tracking-wide">Voir en grand</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center" onClick={closeLightbox}>
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-[#C9A96E] transition-colors z-50"
          >
            <X size={32} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-6 text-white hover:text-[#C9A96E] transition-colors z-50"
          >
            <ChevronLeft size={48} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-6 text-white hover:text-[#C9A96E] transition-colors z-50"
          >
            <ChevronRight size={48} />
          </button>

          <div className="max-w-6xl max-h-[90vh] px-16" onClick={(e) => e.stopPropagation()}>
            <img
              src={GALLERY_IMAGES[lightboxIndex].url}
              alt={GALLERY_IMAGES[lightboxIndex].alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
            <p className="text-center text-white mt-4 font-light">
              {GALLERY_IMAGES[lightboxIndex].alt}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
