import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#8B0000] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center text-center">
          <h3 className="font-serif text-3xl mb-4">Le Charme Floral</h3>
          <p className="text-white/80 mb-6 max-w-md">
            Créations florales artisanales à Bizerte
          </p>
          <div className="flex items-center gap-2 text-sm text-white/70">
            <span>Fait avec</span>
            <Heart size={16} className="fill-current" />
            <span>par Manel</span>
          </div>
          <div className="mt-6 pt-6 border-t border-white/20 w-full text-center text-sm text-white/60">
            <p>&copy; {new Date().getFullYear()} Le Charme Floral. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
