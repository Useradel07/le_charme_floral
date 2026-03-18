import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F8F5F2]/95 backdrop-blur-sm border-b border-[#C9A96E]/20">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-2xl font-serif text-[#8B0000] tracking-wide"
          >
            Le Charme Floral
          </button>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('about')} className="nav-link">À propos</button>
            <button onClick={() => scrollToSection('gallery')} className="nav-link">Galerie</button>
            <button onClick={() => scrollToSection('services')} className="nav-link">Services</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
          </div>

          <button
            className="md:hidden text-[#8B0000]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button onClick={() => scrollToSection('about')} className="nav-link text-left">À propos</button>
            <button onClick={() => scrollToSection('gallery')} className="nav-link text-left">Galerie</button>
            <button onClick={() => scrollToSection('services')} className="nav-link text-left">Services</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link text-left">Contact</button>
          </div>
        )}
      </nav>
    </header>
  );
}
