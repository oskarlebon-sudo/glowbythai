/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Instagram, 
  Calendar, 
  Menu, 
  X, 
  ChevronRight, 
  Sparkles, 
  ShieldCheck, 
  Heart, 
  Star
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const INSTAGRAM_URL = "https://www.instagram.com/glow_by_thai/";
const BOOKING_URL = "https://booking.optios.net/20771/menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Diensten', href: '#services' },
    { name: 'Over ons', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Reviews', href: '#testimonials' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4",
      isScrolled ? "bg-brand-nude/90 backdrop-blur-lg shadow-sm py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="text-xl md:text-2xl font-serif tracking-widest uppercase">
          Glow <span className="text-brand-taupe">by</span> Thai
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-[10px] uppercase tracking-widest hover:text-brand-taupe transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-ink text-white px-6 py-2 rounded-full text-[10px] uppercase tracking-widest hover:bg-brand-taupe transition-all duration-300"
          >
            Boek Nu
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-brand-nude border-t border-brand-beige p-6 md:hidden flex flex-col space-y-6 shadow-xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xs uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
            <a 
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-ink text-white px-6 py-3 rounded-full text-center text-xs uppercase tracking-widest"
            >
              Afspraak Maken
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-24 pb-12">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-beige/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-taupe/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-brand-taupe mb-4 block">
            Boutique Beauty Studio • Oostkamp
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6 leading-tight">
            Jouw nagels, <br />
            <span className="italic">maar beter.</span>
          </h1>
          <p className="text-base md:text-lg text-brand-taupe font-light mb-10 max-w-xl mx-auto leading-relaxed">
            Verfijnde en natuurlijke beauty voor de moderne vrouw die houdt van perfectie en minimalisme.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-brand-ink text-white px-8 py-4 rounded-full text-xs uppercase tracking-widest overflow-hidden transition-all duration-300"
            >
              Boek Je Afspraak
            </a>
            <a 
              href="#services"
              className="text-xs uppercase tracking-widest border-b border-brand-taupe/30 pb-1 hover:border-brand-taupe transition-all"
            >
              Ontdek Diensten
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 px-6 md:px-12 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative order-2 md:order-1"
        >
          <div className="aspect-[3/4] md:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl w-full max-w-md mx-auto">
            <img 
              src="/images/logo.jpeg" 
              alt="Glow by Thai Logo" 
              className="w-full h-full object-contain bg-brand-nude"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-1 md:order-2"
        >
          <span className="text-[10px] uppercase tracking-widest text-brand-taupe mb-3 block">Het Verhaal</span>
          <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">
            Verfijning in het hart van Oostkamp
          </h2>
          <div className="space-y-4 text-brand-taupe font-light leading-relaxed text-sm md:text-base">
            <p>
              Glow by Thai staat voor natuurlijke schoonheid en perfectie. Wij geloven dat de mooiste resultaten diegene zijn die aanvoelen als een betere versie van jezelf.
            </p>
            <p>
              In onze boutique studio in Oostkamp focussen we op precisie, hygiëne en een minimalistische esthetiek. Geen drukke salon, maar een persoonlijke ervaring waar jij centraal staat.
            </p>
          </div>
          
          <div className="mt-8 flex gap-10">
            <div>
              <h4 className="font-serif text-xl mb-1">100%</h4>
              <p className="text-[9px] uppercase tracking-widest text-brand-taupe">Focus op jou</p>
            </div>
            <div>
              <h4 className="font-serif text-xl mb-1">Premium</h4>
              <p className="text-[9px] uppercase tracking-widest text-brand-taupe">Producten</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  title: string;
  description: string;
  perfectFor: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, perfectFor, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-brand-nude p-6 rounded-2xl border border-brand-beige hover:border-brand-taupe/20 transition-all duration-500 flex flex-col"
    >
      <h3 className="text-xl font-serif mb-3 group-hover:italic transition-all">{title}</h3>
      <p className="text-xs text-brand-taupe font-light leading-relaxed mb-4 flex-grow">
        {description}
      </p>
      <div className="pt-4 border-t border-brand-beige/50">
        <p className="text-[9px] uppercase tracking-widest text-brand-taupe mb-1">Ideaal voor</p>
        <p className="text-[11px] font-medium italic">{perfectFor}</p>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      title: "BIAB Specialist",
      description: "Onze signature behandeling voor sterke, gezonde natuurlijke nagels die 3-4 weken perfect blijven.",
      perfectFor: "Natuurlijke nagelgroei & Clean Girl look."
    },
    {
      title: "Brow Styling",
      description: "Laminatie, shaping en tinting voor wenkbrauwen die je gezicht perfect omlijsten.",
      perfectFor: "Een verzorgde, open blik."
    },
    {
      title: "Lash Lifts",
      description: "Een lift van je eigen wimpers voor een natuurlijk open-eye effect zonder extensions.",
      perfectFor: "Een frisse blik zonder mascara."
    },
    {
      title: "Minimalist Art",
      description: "Subtiele details zoals fijne lijntjes of chrome voor een unieke maar elegante touch.",
      perfectFor: "Subtiele personalisatie."
    }
  ];

  return (
    <section id="services" className="pt-20 md:pt-32 pb-12 md:pb-16 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[10px] uppercase tracking-widest text-brand-taupe mb-3 block">Onze Expertise</span>
          <h2 className="text-4xl md:text-5xl font-serif">Diensten</h2>
        </motion.div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              title={service.title}
              description={service.description}
              perfectFor={service.perfectFor}
              index={index} 
            />
          ))}
        </div>
      </div>
      
      {/* Decorative transition element to WhyChooseUs */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-brand-nude pointer-events-none" />
    </section>
  );
};

const Portfolio = () => {
  const images = [
    "/images/SaveClip.App_525411260_17967007754934198_560237891442298755_n.jpg",
    "/images/SaveClip.App_527449235_17967666572934198_579534202566866219_n.jpg",
    "/images/SaveClip.App_564966776_17976267386934198_7481806575206015230_n.jpg",
    "/images/SaveClip.App_572889606_17977681076934198_1847128962047203715_n.jpg",
    "/images/SaveClip.App_576006096_17978764124934198_2504130075196160415_n.jpg",
    "/images/SaveClip.App_586695615_17982189431934198_5155461450697461730_n.jpg",
  ];

  return (
    <section id="portfolio" className="py-20 md:py-32 px-6 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4"
        >
          <div>
            <span className="text-[10px] uppercase tracking-widest text-brand-taupe mb-3 block">Visueel Verhaal</span>
            <h2 className="text-4xl md:text-5xl font-serif">Portfolio</h2>
          </div>
          <a 
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[10px] uppercase tracking-widest group border-b border-transparent hover:border-brand-taupe transition-all pb-1"
          >
            <Instagram size={16} />
            <span>@glow_by_thai</span>
          </a>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="aspect-square rounded-2xl overflow-hidden group relative shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <img 
                src={img} 
                alt={`Portfolio ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-ink/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Smooth transition to Testimonials */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-white pointer-events-none" />
    </section>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Sparkles size={20} />,
      title: "Natuurlijke Elegantie",
      description: "Wij versterken je natuurlijke schoonheid met een tijdloze esthetiek."
    },
    {
      icon: <ShieldCheck size={20} />,
      title: "Hygiëne Voorop",
      description: "Strikte sterilisatie en medische standaarden voor jouw veiligheid."
    },
    {
      icon: <Heart size={20} />,
      title: "Persoonlijke Focus",
      description: "Geen haast, enkel onverdeelde aandacht voor het beste resultaat."
    },
    {
      icon: <Star size={20} />,
      title: "Premium Merken",
      description: "Enkel de beste producten die de gezondheid van je nagels respecteren."
    }
  ];

  return (
    <section className="pt-12 md:pt-16 pb-16 md:pb-24 px-6 bg-brand-nude">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-brand-taupe mb-3 block">Het Verschil</span>
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Waarom Glow by Thai?</h2>
            
            <div className="grid sm:grid-cols-2 gap-6 mt-10">
              {features.map((feature, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-brand-taupe">{feature.icon}</div>
                  <h4 className="font-serif text-lg">{feature.title}</h4>
                  <p className="text-[11px] text-brand-taupe font-light leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[320px] md:max-w-[400px]">
              <div className="aspect-square rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img 
                  src="/images/face.jpeg" 
                  alt="Thai - Glow by Thai" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white px-6 py-4 rounded-xl shadow-lg hidden sm:block">
                <p className="text-xl font-serif italic">Oostkamp</p>
                <p className="text-[8px] uppercase tracking-widest text-brand-taupe">Boutique Beauty Studio</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Sophie M.",
      text: "De beste BIAB ervaring ooit. Thai's oog voor detail is ongezien. Mijn nagels zijn nog nooit zo sterk geweest.",
      service: "BIAB Manicure"
    },
    {
      name: "Emma L.",
      text: "Prachtig resultaat van mijn lash lift. Heel natuurlijk en precies wat ik zocht. Een echte aanrader in Oostkamp.",
      service: "Lash Lift"
    },
    {
      name: "Julie D.",
      text: "Eindelijk een salon dat minimalisme begrijpt. Mijn wenkbrauwen zien er fantastisch uit. Zeer professioneel.",
      service: "Brow Styling"
    }
  ];

  return (
    <section id="testimonials" className="py-20 md:py-32 px-6 bg-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-brand-beige to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[10px] uppercase tracking-widest text-brand-taupe mb-3 block">Reviews</span>
          <h2 className="text-4xl md:text-5xl font-serif">Klantervaringen</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="bg-brand-nude/40 backdrop-blur-sm p-10 rounded-[2rem] flex flex-col items-center text-center border border-brand-beige/30 hover:bg-brand-nude/60 transition-all duration-500"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="fill-brand-taupe text-brand-taupe" />
                ))}
              </div>
              <p className="text-sm text-brand-taupe font-light italic leading-relaxed mb-8">
                "{review.text}"
              </p>
              <div className="mt-auto">
                <p className="font-serif text-lg mb-1">{review.name}</p>
                <p className="text-[8px] uppercase tracking-widest text-brand-taupe">{review.service}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Booking = () => {
  return (
    <section className="py-12 md:py-16 px-6 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-brand-beige/20" />
      
      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/60 backdrop-blur-md p-10 md:p-16 rounded-[2rem] border border-white/40 shadow-xl"
        >
          <span className="text-[10px] uppercase tracking-widest text-brand-taupe mb-4 block">Klaar om te stralen?</span>
          <h2 className="text-3xl md:text-5xl font-serif mb-6">Reserveer Je Glow</h2>
          <p className="text-sm text-brand-taupe font-light mb-10 max-w-md mx-auto leading-relaxed">
            Beleef de perfecte beauty ervaring in onze boutique studio. Afspraken zijn beperkt, boek tijdig online.
          </p>
          <a 
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-brand-ink text-white px-10 py-4 rounded-full text-xs uppercase tracking-widest hover:bg-brand-taupe transition-all duration-300 shadow-lg"
          >
            <Calendar size={18} />
            <span>Boek Online</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-ink text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <a href="#" className="text-xl font-serif tracking-widest uppercase mb-4 block">
              Glow <span className="text-brand-beige/50">by</span> Thai
            </a>
            <p className="text-brand-beige/40 font-light text-xs max-w-xs leading-relaxed">
              Boutique beauty studio in Oostkamp voor natuurlijke verfijning.
            </p>
          </div>
          
          <div>
            <h5 className="text-[10px] uppercase tracking-widest mb-4 font-semibold">Locatie</h5>
            <p className="text-brand-beige/40 font-light text-xs">
              Oostkamp, België<br />
              Enkel op afspraak
            </p>
          </div>
          
          <div>
            <h5 className="text-[10px] uppercase tracking-widest mb-4 font-semibold">Contact</h5>
            <div className="flex gap-6">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-brand-beige/40 hover:text-white transition-colors text-xs flex items-center gap-2">
                <Instagram size={14} />
                Instagram
              </a>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="text-brand-beige/40 hover:text-white transition-colors text-xs flex items-center gap-2">
                <Calendar size={14} />
                Boek Nu
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[9px] uppercase tracking-widest text-brand-beige/30">
            © {new Date().getFullYear()} Glow by Thai.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[9px] uppercase tracking-widest text-brand-beige/30 hover:text-white">Privacy</a>
            <a href="#" className="text-[9px] uppercase tracking-widest text-brand-beige/30 hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-beige selection:text-brand-ink">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Portfolio />
        <Testimonials />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}
