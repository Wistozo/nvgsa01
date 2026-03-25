import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Facebook,
  Linkedin,
  ArrowUp,
  Heart
} from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAnchorClick = (anchor: string) => {
    if (isHome) {
      document.querySelector(anchor)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => document.querySelector(anchor)?.scrollIntoView({ behavior: 'smooth' }), 300);
    }
  };

  const quickLinks = [
    { label: 'Accueil',        type: 'page',   href: '/'           },
    { label: 'À propos',       type: 'page',   href: '/a-propos'   },
    { label: 'Nos Expertises', type: 'page',   href: '/expertises' },
    { label: 'Zones',          type: 'page',   href: '/zones'      },
    { label: 'Partenaires',    type: 'anchor', href: '#partners'   },
    { label: 'Contact',        type: 'anchor', href: '#contact'    },
  ];

  const services = [
    'Sacs Solaires LIGHT-TC',
    'Serviettes Hygiéniques',
    'Tenues Scolaires',
    'Fournitures Scolaires',
    'Équipements Médicaux',
    'Intrants Agricoles'
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/newvisiongroupsa', label: 'Facebook' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/new-vision-group-sa', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-nvg-dark text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/logos/nvg-logo.png" 
                alt="NVG Logo" 
                className="h-16 w-auto"
              />
              <div>
                <h3 className="font-bold text-lg">NEW VISION</h3>
                <p className="text-nvg-orange text-sm">GROUP SA</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Plus de 15 ans d'expérience au service des communautés et organisations 
              publiques comme privées. Groupe sous-régional reconnu depuis 2008.
            </p>
            <div className="inline-block px-4 py-2 bg-nvg-blue/20 rounded-lg">
              <span className="text-nvg-orange font-semibold">Capital social:</span>
              <span className="text-white ml-2">100 000 000 FCFA</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6 flex items-center gap-2">
              <div className="w-8 h-1 bg-nvg-orange rounded-full" />
              Liens rapides
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  {link.type === 'page' ? (
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-nvg-orange transition-colors flex items-center gap-2 group"
                    >
                      <div className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-nvg-orange transition-colors" />
                      {link.label}
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleAnchorClick(link.href)}
                      className="text-gray-400 hover:text-nvg-orange transition-colors flex items-center gap-2 group"
                    >
                      <div className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-nvg-orange transition-colors" />
                      {link.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6 flex items-center gap-2">
              <div className="w-8 h-1 bg-nvg-green rounded-full" />
              Nos services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-400 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-gray-600 rounded-full" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6 flex items-center gap-2">
              <div className="w-8 h-1 bg-nvg-blue rounded-full" />
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-nvg-orange flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Lokossa, Mono, Bénin<br />
                  BP 248 Lokossa
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-nvg-green flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  +22901 94 74 74 11<br />
                  +22901 90 94 52 55
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-nvg-blue flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  info@newvisiongroupsa.bj
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-nvg-orange flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  www.newvisiongroupsa.bj
                </span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="mt-6">
              <h5 className="text-sm font-medium mb-3">Suivez-nous</h5>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-nvg-orange transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} New Vision Group SA. Tous droits réservés.
            </p>
            <p className="text-gray-500 text-sm flex items-center gap-1">
              Fait avec <Heart className="w-4 h-4 text-nvg-orange fill-nvg-orange" /> au Bénin
            </p>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-nvg-orange rounded-lg flex items-center justify-center hover:bg-nvg-orange-light transition-colors"
              aria-label="Retour en haut"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
