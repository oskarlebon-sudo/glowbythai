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

const INSTAGRAM_URL = "https://www.instagram.com/oskarlebon/";
const BOOKING_URL = "https://www.instagram.com/oskarlebon/";

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
    { name: 'Over ons', href: '#about' },
    { name: 'Diensten', href: '#services' },
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
          Lumière <span className="text-brand-taupe">nail</span> studio
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-xs uppercase tracking-widest hover:text-brand-taupe transition-colors font-medium"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-ink text-white px-8 py-2.5 rounded-full text-xs uppercase tracking-widest hover:bg-brand-taupe transition-all duration-300 font-medium"
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
          <span className="text-xs uppercase tracking-[0.3em] text-brand-taupe mb-6 block font-medium">
            Boutique Beauty Studio • Kortrijk
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif mb-8 leading-tight">
            Jouw nagels, <br />
            <span className="italic">maar beter.</span>
          </h1>
          <p className="text-lg md:text-xl text-brand-taupe font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Verfijnde en natuurlijke beauty voor de moderne vrouw die houdt van perfectie en minimalisme.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-brand-ink text-white px-10 py-5 rounded-full text-sm uppercase tracking-widest overflow-hidden transition-all duration-300 font-medium"
            >
              Boek Je Afspraak
            </a>
            <a 
              href="#services"
              className="text-sm uppercase tracking-widest border-b border-brand-taupe/30 pb-1 hover:border-brand-taupe transition-all font-medium"
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
              src="https://ddqhrvesrqlfjjtciwsr.supabase.co/storage/v1/object/public/nagelsalon/Gemini_Generated_Image_phk83sphk83sphk8%20(1)%20(1).png" 
              alt="Thai - Lumière nail studio" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
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
          <span className="text-xs uppercase tracking-widest text-brand-taupe mb-4 block font-medium">Het Verhaal</span>
          <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
            Verfijning in het hart van Kortrijk
          </h2>
          <div className="space-y-6 text-brand-taupe font-light leading-relaxed text-base md:text-lg">
            <p>
              Lumière nail studio staat voor natuurlijke schoonheid en perfectie. Wij geloven dat de mooiste resultaten diegene zijn die aanvoelen als een betere versie van jezelf.
            </p>
            <p>
              In onze boutique studio in Kortrijk focussen we op precisie, hygiëne en een minimalistische esthetiek. Geen drukke salon, maar een persoonlijke ervaring waar jij centraal staat.
            </p>
          </div>
          
          <div className="mt-10 flex gap-12">
            <div>
              <h4 className="font-serif text-3xl mb-1">100%</h4>
              <p className="text-xs uppercase tracking-widest text-brand-taupe font-medium">Focus op jou</p>
            </div>
            <div>
              <h4 className="font-serif text-3xl mb-1">Premium</h4>
              <p className="text-xs uppercase tracking-widest text-brand-taupe font-medium">Producten</p>
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
      className="group bg-white p-10 rounded-[2.5rem] border border-brand-beige/40 hover:border-brand-taupe/30 hover:shadow-2xl hover:shadow-brand-taupe/5 transition-all duration-700 flex flex-col relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700">
        <span className="text-8xl font-serif leading-none">0{index + 1}</span>
      </div>
      
      <div className="relative z-10">
        <h3 className="text-2xl md:text-3xl font-serif mb-6 group-hover:text-brand-taupe transition-colors duration-500">{title}</h3>
        <p className="text-base text-brand-taupe font-light leading-relaxed mb-10 flex-grow">
          {description}
        </p>
        <div className="pt-8 border-t border-brand-beige/30">
          <p className="text-[10px] uppercase tracking-[0.2em] text-brand-taupe/60 mb-3 font-semibold">Ideaal voor</p>
          <p className="text-sm font-medium italic text-brand-ink/80">{perfectFor}</p>
        </div>
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
    <section id="services" className="py-24 md:py-40 px-6 relative bg-brand-nude/30">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-xs uppercase tracking-widest text-brand-taupe mb-4 block font-medium">Onze Expertise</span>
          <h2 className="text-5xl md:text-7xl font-serif">Diensten</h2>
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
    "https://ddqhrvesrqlfjjtciwsr.supabase.co/storage/v1/object/public/nagelsalon/nails/Gemini_Generated_Image_d7wxv9d7wxv9d7wx.png",
    "https://ddqhrvesrqlfjjtciwsr.supabase.co/storage/v1/object/public/nagelsalon/nails/Gemini_Generated_Image_fwt7bvfwt7bvfwt7.png",
    "https://ddqhrvesrqlfjjtciwsr.supabase.co/storage/v1/object/public/nagelsalon/nails/Gemini_Generated_Image_jyfva1jyfva1jyfv.png",
    "https://ddqhrvesrqlfjjtciwsr.supabase.co/storage/v1/object/public/nagelsalon/nails/Gemini_Generated_Image_kjpad1kjpad1kjpa.png",
    "https://ddqhrvesrqlfjjtciwsr.supabase.co/storage/v1/object/public/nagelsalon/nails/Gemini_Generated_Image_sqc2jlsqc2jlsqc2.png",
    "https://ddqhrvesrqlfjjtciwsr.supabase.co/storage/v1/object/public/nagelsalon/nails/Gemini_Generated_Image_vb2ntbvb2ntbvb2n.png",
  ];

  return (
    <section id="portfolio" className="py-24 md:py-40 px-6 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <span className="text-xs uppercase tracking-widest text-brand-taupe mb-4 block font-medium">Visueel Verhaal</span>
            <h2 className="text-5xl md:text-7xl font-serif">Portfolio</h2>
          </div>
          <a 
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-xs uppercase tracking-widest group border-b border-transparent hover:border-brand-taupe transition-all pb-1 font-medium"
          >
            <Instagram size={18} />
            <span>@lumiere_nailstudio</span>
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
    <section className="pt-16 md:pt-24 pb-24 md:pb-40 px-6 bg-brand-nude">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs uppercase tracking-widest text-brand-taupe mb-4 block font-medium">Het Verschil</span>
            <h2 className="text-4xl md:text-6xl font-serif mb-8">Waarom Lumière nail studio?</h2>
            
            <div className="grid sm:grid-cols-2 gap-10 mt-12">
              {features.map((feature, index) => (
                <div key={index} className="space-y-4">
                  <div className="text-brand-taupe">{feature.icon}</div>
                  <h4 className="font-serif text-2xl">{feature.title}</h4>
                  <p className="text-sm text-brand-taupe font-light leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[360px] md:max-w-[480px]">
              <div className="aspect-square rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <img 
                  src="https://ddqhrvesrqlfjjtciwsr.supabase.co/storage/v1/object/public/nagelsalon/Gemini_Generated_Image_fu012ffu012ffu01.png" 
                  alt="Thai - Lumière nail studio" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white px-8 py-6 rounded-2xl shadow-xl hidden sm:block">
                <p className="text-2xl font-serif italic">Kortrijk</p>
                <p className="text-xs uppercase tracking-widest text-brand-taupe font-medium">Boutique Beauty Studio</p>
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
      text: "Prachtig resultaat van mijn lash lift. Heel natuurlijk en precies wat ik zocht. Een echte aanrader in Kortrijk.",
      service: "Lash Lift"
    },
    {
      name: "Julie D.",
      text: "Eindelijk een salon dat minimalisme begrijpt. Mijn wenkbrauwen zien er fantastisch uit. Zeer professioneel.",
      service: "Brow Styling"
    }
  ];

  return (
    <section id="testimonials" className="py-24 md:py-40 px-6 bg-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-brand-beige to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-xs uppercase tracking-widest text-brand-taupe mb-4 block font-medium">Reviews</span>
          <h2 className="text-5xl md:text-7xl font-serif">Klantervaringen</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="bg-brand-nude/40 backdrop-blur-sm p-12 rounded-[2.5rem] flex flex-col items-center text-center border border-brand-beige/30 hover:bg-brand-nude/60 transition-all duration-500"
            >
              <div className="flex gap-1.5 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-brand-taupe text-brand-taupe" />
                ))}
              </div>
              <p className="text-base text-brand-taupe font-light italic leading-relaxed mb-10">
                "{review.text}"
              </p>
              <div className="mt-auto">
                <p className="font-serif text-xl mb-1.5">{review.name}</p>
                <p className="text-xs uppercase tracking-widest text-brand-taupe font-medium">{review.service}</p>
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
    <section className="py-20 md:py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-brand-beige/20" />
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/60 backdrop-blur-md p-12 md:p-24 rounded-[3rem] border border-white/40 shadow-xl"
        >
          <span className="text-xs uppercase tracking-widest text-brand-taupe mb-6 block font-medium">Klaar om te stralen?</span>
          <h2 className="text-4xl md:text-6xl font-serif mb-8">Reserveer Je Glow</h2>
          <p className="text-base md:text-lg text-brand-taupe font-light mb-12 max-w-lg mx-auto leading-relaxed">
            Beleef de perfecte beauty ervaring in onze boutique studio. Afspraken zijn beperkt, boek tijdig online.
          </p>
          <a 
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-brand-ink text-white px-12 py-5 rounded-full text-sm uppercase tracking-widest hover:bg-brand-taupe transition-all duration-300 shadow-lg font-medium"
          >
            <Calendar size={20} />
            <span>Boek Online</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-ink text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-16 mb-16">
          <div>
            <a href="#" className="text-2xl font-serif tracking-widest uppercase mb-6 block">
              Lumière <span className="text-brand-beige/50">nail</span> studio
            </a>
            <p className="text-brand-beige/40 font-light text-sm max-w-xs leading-relaxed">
              Boutique beauty studio in Kortrijk voor natuurlijke verfijning.
            </p>
          </div>
          
          <div>
            <h5 className="text-xs uppercase tracking-widest mb-6 font-semibold">Locatie</h5>
            <p className="text-brand-beige/40 font-light text-sm">
              Kortrijk, België<br />
              Enkel op afspraak
            </p>
          </div>
          
          <div>
            <h5 className="text-xs uppercase tracking-widest mb-6 font-semibold">Contact</h5>
            <div className="flex gap-8">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-brand-beige/40 hover:text-white transition-colors text-sm flex items-center gap-2">
                <Instagram size={18} />
                Instagram
              </a>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="text-brand-beige/40 hover:text-white transition-colors text-sm flex items-center gap-2">
                <Calendar size={18} />
                Boek Nu
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs uppercase tracking-widest text-brand-beige/30">
            © {new Date().getFullYear()} Lumière nail studio.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-xs uppercase tracking-widest text-brand-beige/30 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-xs uppercase tracking-widest text-brand-beige/30 hover:text-white transition-colors">Terms</a>
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
