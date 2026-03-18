import { useEffect, useRef, useState } from 'react';
import { Send, MapPin, Mail, Phone } from 'lucide-react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1000));

    setSubmitStatus('success');
    setIsSubmitting(false);
    setFormData({ name: '', email: '', phone: '', message: '' });

    setTimeout(() => setSubmitStatus('idle'), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 bg-[#F8F5F2]"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center mb-16">
          <div className="h-px w-16 bg-[#C9A96E]"></div>
          <h2 className={`font-serif text-4xl md:text-5xl text-[#8B0000] mx-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Contact
          </h2>
          <div className="h-px w-16 bg-[#C9A96E]"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <h3 className="font-serif text-3xl text-[#8B0000] mb-6">
              Parlons de votre projet
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              Que ce soit pour un événement spécial, une décoration d'intérieur ou simplement pour offrir, je serais ravie de créer le bouquet parfait pour vous.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#8B0000]/5 rounded-full">
                  <MapPin size={24} className="text-[#8B0000]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Localisation</h4>
                  <p className="text-gray-600">Bizerte, Tunisie</p>
                </div>
              </div>

              <a href="mailto:contact@lecharmefloral.tn" className="flex items-start gap-4 hover:bg-black/5 p-2 -m-2 rounded-xl transition-colors group cursor-pointer">
                <div className="p-3 bg-[#8B0000]/5 rounded-full group-hover:bg-[#8B0000]/10 transition-colors">
                  <Mail size={24} className="text-[#8B0000]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-[#8B0000] transition-colors">Email</h4>
                  <p className="text-gray-600">contact@lecharmefloral.tn</p>
                </div>
              </a>

              <a href="tel:+216" className="flex items-start gap-4 hover:bg-black/5 p-2 -m-2 rounded-xl transition-colors group cursor-pointer">
                <div className="p-3 bg-[#8B0000]/5 rounded-full group-hover:bg-[#8B0000]/10 transition-colors">
                  <Phone size={24} className="text-[#8B0000]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-[#8B0000] transition-colors">Téléphone</h4>
                  <p className="text-gray-600">+216 XX XXX XXX</p>
                </div>
              </a>
            </div>
          </div>

          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input-field"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input-field"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2 font-medium">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="input-field resize-none"
                ></textarea>
              </div>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                  Merci pour votre message ! Je vous répondrai très bientôt.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  'Envoi en cours...'
                ) : (
                  <>
                    Commander un bouquet
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
