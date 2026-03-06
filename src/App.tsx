import React from 'react';
import { Phone, MessageCircle, ArrowRight, ShieldCheck, Bug, Sprout, Star, CheckCircle2, MapPin, User, Send, Quote, Search, ClipboardList, Leaf, Heart, ChevronDown } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const floatAnimation = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const pulseAnimation = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function App() {
  const { scrollYProgress, scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 1000], [0, 300]);
  const heroOpacity = useTransform(scrollY, [0, 500], [0.7, 0.2]);

  return (
    <div className="min-h-screen bg-petal font-sans text-verdant selection:bg-leafy selection:text-verdant">
      
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-moss z-[100] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-whisper/90 backdrop-blur-md border-b border-dewdrop">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <motion.div variants={floatAnimation} animate="animate">
              <ShieldCheck className="w-8 h-8 text-moss" />
            </motion.div>
            <span className="text-2xl font-serif font-bold tracking-tight text-verdant">Verdant Shield</span>
          </div>
          <div className="flex items-center gap-4 md:gap-6">
            <div className="hidden md:flex flex-col items-end">
              <span className="text-[10px] font-mono font-bold text-moss uppercase tracking-widest">Call for Free Inspection</span>
              <a href="tel:+919876543210" className="flex items-center gap-2 text-verdant hover:text-moss font-serif font-bold text-lg transition-colors">
                <Phone className="w-5 h-5" />
                <span>+91 98765 43210</span>
              </a>
            </div>
            <a href="https://wa.me/919876543210" className="flex items-center gap-2 bg-moss text-whisper px-5 py-2.5 rounded-full font-mono text-sm font-bold hover:bg-verdant transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-200">
              <MessageCircle className="w-5 h-5" />
              <span className="hidden sm:inline">WhatsApp Us</span>
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8 flex flex-col gap-12">
        
        {/* 1. Gorgeous Hero Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="bento-card w-full min-h-[60vh] md:min-h-[70vh] bg-verdant text-whisper flex flex-col justify-end relative group overflow-hidden shadow-2xl"
        >
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ y: heroY, opacity: heroOpacity }}
            src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2000&auto=format&fit=crop" 
            alt="Lush, healthy green leaves with morning dew in soft golden hour light" 
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-verdant via-verdant/40 to-transparent"></div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="relative z-10 p-8 md:p-16 max-w-4xl"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-leafy/30 backdrop-blur-md border border-leafy/50 px-4 py-2 rounded-full mb-6">
              <Sprout className="w-4 h-4 text-petal" />
              <span className="font-mono text-xs font-bold tracking-widest uppercase text-petal">Delhi NCR's #1 Plant Care Experts</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-[1.05] mb-6 text-whisper drop-shadow-lg">
              Your dream garden,<br/> <span className="text-leafy italic">pest-free.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="font-sans text-lg md:text-xl text-petal/90 max-w-2xl mb-8 leading-relaxed">
              We restore the health of your indoor and outdoor plants with eco-friendly, expert horticultural treatments. See the "after" you've been dreaming of.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent hover:bg-orange-500 text-whisper font-mono text-sm font-bold tracking-widest uppercase px-8 py-4 rounded-full transition-colors shadow-lg flex items-center gap-2"
              >
                Get a Free Quote <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-whisper/10 hover:bg-whisper/20 backdrop-blur-sm border border-whisper/30 text-whisper font-mono text-sm font-bold tracking-widest uppercase px-8 py-4 rounded-full transition-colors"
              >
                View Services
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* 1.5 Infinite Marquee Banner */}
        <div className="w-full overflow-hidden bg-moss text-whisper py-3 rounded-2xl flex items-center shadow-sm">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
            className="flex whitespace-nowrap gap-8 items-center font-mono text-xs font-bold uppercase tracking-widest"
          >
            {/* Repeat content twice for seamless loop */}
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                <span className="flex items-center gap-2"><Leaf className="w-4 h-4 text-accent" /> 100% Organic Solutions</span>
                <span className="flex items-center gap-2"><Heart className="w-4 h-4 text-accent" /> Pet & Child Safe</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Certified Horticulturists</span>
                <span className="flex items-center gap-2"><Star className="w-4 h-4 text-accent" /> 4.9/5 Google Rating</span>
                <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-accent" /> Guaranteed Results</span>
              </React.Fragment>
            ))}
          </motion.div>
        </div>

        {/* 2. Credibility Stats Bar */}
        <motion.section 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {[
            { number: "15+", label: "Years Experience" },
            { number: "850+", label: "Happy Clients" },
            { number: "1200+", label: "Gardens Saved" },
            { number: "4.9/5", label: "Google Rating (150+ Reviews)" }
          ].map((stat, i) => (
            <motion.div key={i} variants={fadeUp} className="bg-whisper rounded-3xl p-8 border border-dewdrop flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-all hover:-translate-y-1 relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 w-16 h-16 bg-leafy/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
              <motion.span 
                variants={pulseAnimation}
                animate="animate"
                className="font-serif text-4xl md:text-5xl font-bold text-moss mb-3 relative z-10"
              >
                {stat.number}
              </motion.span>
              <span className="font-mono text-[10px] md:text-xs font-bold text-verdant uppercase tracking-widest relative z-10">{stat.label}</span>
            </motion.div>
          ))}
        </motion.section>

        {/* 3. Clear Service Segmentation */}
        <motion.section 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
          <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-4xl font-bold text-verdant mb-4">Specialized Horticultural Services</h2>
            <p className="font-sans text-moss">Targeted solutions for every type of green space, backed by science and experience.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: "Pest & Disease Control", desc: "Eradication of mealybugs, aphids, spider mites, and fungal infections using eco-safe treatments.", icon: Bug, price: "From ₹999", img: "https://picsum.photos/seed/houseplants/600/500" },
              { title: "Landscape Maintenance", desc: "Comprehensive monthly care including pruning, fertilizing, and soil health optimization.", icon: Sprout, price: "From ₹2499/mo", img: "https://picsum.photos/seed/gardening/600/500" },
              { title: "Natural Lawn Solutions", desc: "Weed management, aeration, and natural grass development for a lush, barefoot-ready lawn.", icon: ShieldCheck, price: "Custom Quote", img: "https://picsum.photos/seed/lawncare/600/500" }
            ].map((service, i) => (
              <motion.div key={i} variants={fadeUp} className="bento-card bg-whisper border border-dewdrop group hover:border-moss transition-all duration-300 flex flex-col h-full hover:shadow-xl hover:-translate-y-1">
                <div className="h-56 overflow-hidden relative">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-verdant/60 to-transparent opacity-60"></div>
                  <div className="absolute top-4 right-4 bg-whisper/95 backdrop-blur-md px-4 py-1.5 rounded-full font-mono text-xs font-bold text-verdant shadow-sm">
                    {service.price}
                  </div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-whisper/95 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-moss" />
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="font-serif text-2xl font-bold text-verdant mb-3 group-hover:text-moss transition-colors">{service.title}</h3>
                  <p className="font-sans text-sm text-moss mb-8 flex-grow leading-relaxed">{service.desc}</p>
                  <button className="text-moss font-mono text-xs font-bold tracking-widest uppercase flex items-center gap-2 group-hover:text-verdant transition-colors mt-auto">
                    Learn More <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 3.5 How It Works */}
        <motion.section 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="bg-leafy/10 rounded-[3rem] p-8 md:p-16 border border-leafy/20"
        >
          <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-4xl font-bold text-verdant mb-4">Our Simple 4-Step Process</h2>
            <p className="font-sans text-moss">From diagnosis to a thriving garden, we make plant care effortless for you.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-dewdrop -z-10 -translate-y-1/2"></div>
            {[
              { icon: Search, title: "1. Free Inspection", desc: "We visit your space to identify pests and assess plant health." },
              { icon: ClipboardList, title: "2. Custom Plan", desc: "You get a tailored, eco-friendly treatment strategy and quote." },
              { icon: Leaf, title: "3. Safe Treatment", desc: "Our experts apply organic, pet-safe solutions to eradicate pests." },
              { icon: Heart, title: "4. Thriving Garden", desc: "Enjoy lush, healthy plants with our ongoing maintenance tips." }
            ].map((step, i) => (
              <motion.div key={i} variants={fadeUp} className="flex flex-col items-center text-center relative">
                <motion.div 
                  variants={floatAnimation}
                  animate="animate"
                  style={{ animationDelay: `${i * 0.2}s` }}
                  className="w-16 h-16 bg-whisper border-4 border-petal rounded-full flex items-center justify-center mb-6 shadow-sm z-10"
                >
                  <step.icon className="w-6 h-6 text-moss" />
                </motion.div>
                <h4 className="font-serif text-xl font-bold text-verdant mb-2">{step.title}</h4>
                <p className="font-sans text-sm text-moss">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 4. Founder Story & Simple Quote Form */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 overflow-hidden">
          {/* Founder Story */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bento-card bg-moss text-whisper p-8 md:p-12 flex flex-col justify-center relative overflow-hidden"
          >
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -right-20 -bottom-20 w-64 h-64 bg-verdant rounded-full opacity-50 blur-3xl"
            ></motion.div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <motion.img 
                  variants={floatAnimation}
                  animate="animate"
                  src="https://picsum.photos/seed/portrait1/200/200" alt="Dr. Ritu Sharma" className="w-20 h-20 rounded-full border-4 border-leafy object-cover shadow-lg" referrerPolicy="no-referrer" 
                />
                <div>
                  <h3 className="font-serif text-2xl font-bold">Dr. Ritu Sharma</h3>
                  <p className="font-mono text-xs text-petal uppercase tracking-wider mt-1">Founder & Ph.D. Horticulturist</p>
                </div>
              </div>
              <Quote className="w-10 h-10 text-leafy/50 mb-4" />
              <p className="font-serif text-xl md:text-2xl leading-relaxed text-whisper/90 mb-6">
                "After 15 years of studying plant pathology, I realized most nurseries and homeowners were using harsh chemicals that damaged soil health. I founded Verdant Shield to provide science-backed, eco-safe solutions that actually cure the root cause."
              </p>
              <div className="flex items-center gap-2 text-petal font-mono text-sm">
                <CheckCircle2 className="w-5 h-5" />
                <span>Certified Plant Pathologist</span>
              </div>
            </div>
          </motion.div>

          {/* Simple Quote Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="bento-card bg-whisper border border-dewdrop p-8 md:p-12 flex flex-col justify-center"
          >
            <h3 className="font-serif text-3xl font-bold text-verdant mb-2">Get a Free Assessment</h3>
            <p className="font-sans text-moss mb-8">Fill out this simple form and our experts will call you within 2 hours.</p>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-mono text-xs font-bold text-verdant uppercase tracking-wider pl-1">Name</label>
                  <input type="text" placeholder="Your Name" className="w-full bg-petal/30 border border-dewdrop rounded-xl px-4 py-3 font-sans text-verdant focus:outline-none focus:border-moss focus:ring-1 focus:ring-moss transition-all" />
                </div>
                <div className="space-y-1">
                  <label className="font-mono text-xs font-bold text-verdant uppercase tracking-wider pl-1">Phone</label>
                  <input type="tel" placeholder="Your Phone Number" className="w-full bg-petal/30 border border-dewdrop rounded-xl px-4 py-3 font-sans text-verdant focus:outline-none focus:border-moss focus:ring-1 focus:ring-moss transition-all" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="font-mono text-xs font-bold text-verdant uppercase tracking-wider pl-1">Service Needed</label>
                <select className="w-full bg-petal/30 border border-dewdrop rounded-xl px-4 py-3 font-sans text-verdant focus:outline-none focus:border-moss focus:ring-1 focus:ring-moss transition-all appearance-none">
                  <option>Pest & Disease Control</option>
                  <option>Landscape Maintenance</option>
                  <option>Lawn Solutions</option>
                  <option>Other / Not Sure</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="font-mono text-xs font-bold text-verdant uppercase tracking-wider pl-1">Message (Optional)</label>
                <textarea placeholder="Tell us about your plant issues..." rows={3} className="w-full bg-petal/30 border border-dewdrop rounded-xl px-4 py-3 font-sans text-verdant focus:outline-none focus:border-moss focus:ring-1 focus:ring-moss transition-all resize-none"></textarea>
              </div>
              <button className="w-full bg-verdant hover:bg-moss text-whisper font-mono text-sm font-bold tracking-widest uppercase px-6 py-4 rounded-xl transition-colors flex items-center justify-center gap-2 mt-4">
                <Send className="w-4 h-4" /> Request Quote
              </button>
            </form>
          </motion.div>
        </section>

        {/* 4.5 Before & After Gallery */}
        <motion.section 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
          <motion.div variants={fadeUp} className="flex flex-col md:flex-row justify-between items-end gap-4 border-b border-dewdrop pb-4">
            <div>
              <h2 className="font-serif text-4xl font-bold text-verdant mb-2">Real Results</h2>
              <p className="font-sans text-moss">Swipe to see how we've transformed dying plants into lush sanctuaries.</p>
            </div>
            <button className="text-moss font-mono text-xs font-bold tracking-widest uppercase hover:text-verdant transition-colors flex items-center gap-1">
              View Gallery <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Severe Mealybug Infestation", location: "Vasant Vihar", before: "https://picsum.photos/seed/deadplant/400/300", after: "https://picsum.photos/seed/healthyplant/400/300" },
              { title: "Yellowing Lawn Recovery", location: "Gurgaon Sector 54", before: "https://picsum.photos/seed/drylawn/400/300", after: "https://picsum.photos/seed/greenlawn/400/300" }
            ].map((caseStudy, i) => (
              <motion.div key={i} variants={fadeUp} className="bento-card bg-whisper border border-dewdrop p-4 group hover:shadow-md transition-shadow">
                <div className="flex gap-2 mb-4 h-48 md:h-64">
                  <motion.div 
                    whileHover={{ scale: 1.02, rotate: -1 }}
                    className="w-1/2 relative rounded-xl overflow-hidden cursor-pointer"
                  >
                    <img src={caseStudy.before} alt="Before" className="w-full h-full object-cover grayscale-[50%]" referrerPolicy="no-referrer" />
                    <div className="absolute top-2 left-2 bg-red-500/80 backdrop-blur-sm text-white text-[10px] font-mono font-bold px-2 py-1 rounded uppercase tracking-wider">Before</div>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.02, rotate: 1 }}
                    className="w-1/2 relative rounded-xl overflow-hidden cursor-pointer"
                  >
                    <img src={caseStudy.after} alt="After" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    <div className="absolute top-2 right-2 bg-leafy/90 backdrop-blur-sm text-verdant text-[10px] font-mono font-bold px-2 py-1 rounded uppercase tracking-wider">After</div>
                  </motion.div>
                </div>
                <div className="px-2">
                  <h4 className="font-serif text-xl font-bold text-verdant">{caseStudy.title}</h4>
                  <p className="font-mono text-xs text-moss flex items-center gap-1 mt-1"><MapPin className="w-3 h-3" /> {caseStudy.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 5. Aggressive Social Proof */}
        <motion.section 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
          <motion.div variants={fadeUp} className="flex flex-col md:flex-row justify-between items-end gap-4 border-b border-dewdrop pb-4">
            <div>
              <h2 className="font-serif text-4xl font-bold text-verdant mb-2">Loved by Delhi NCR</h2>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-accent text-accent" />)}
                </div>
                <span className="font-mono text-sm font-bold text-moss">4.9/5 from 150+ Google Reviews</span>
              </div>
            </div>
            <button className="text-moss font-mono text-xs font-bold tracking-widest uppercase hover:text-verdant transition-colors flex items-center gap-1">
              Read all reviews <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Google Style Review */}
            <motion.div variants={fadeUp} className="bg-whisper p-8 rounded-[2rem] border border-dewdrop shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">A</div>
                <div>
                  <p className="font-bold text-verdant font-sans">Amit Kumar</p>
                  <p className="text-xs text-moss font-mono">Local Guide · 24 reviews</p>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-accent text-accent" />)}
              </div>
              <p className="font-sans text-sm text-verdant/80 leading-relaxed">
                "Verdant Shield completely eradicated the spider mite infestation that was ruining our indoor calatheas. Highly professional team and they explained exactly how to prevent it in the future. Worth every penny."
              </p>
            </motion.div>

            {/* WhatsApp Style Review */}
            <motion.div variants={fadeUp} className="bg-[#EFEAE2] p-6 rounded-[2rem] border border-dewdrop shadow-sm flex flex-col relative overflow-hidden">
              <div className="bg-[#075E54] text-white p-3 -mx-6 -mt-6 mb-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center"><User className="w-5 h-5" /></div>
                <div>
                  <p className="font-bold text-sm">Priya (Vasant Vihar)</p>
                  <p className="text-[10px] opacity-80">online</p>
                </div>
              </div>
              <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[85%] mb-2 self-start">
                <p className="text-sm font-sans text-gray-800">Hi Dr. Ritu! Just wanted to share an update. The hibiscus plants are blooming again! 🌺 The organic spray worked wonders.</p>
                <p className="text-[10px] text-gray-400 text-right mt-1">10:42 AM</p>
              </div>
              <div className="bg-[#DCF8C6] p-3 rounded-lg rounded-tr-none shadow-sm max-w-[85%] self-end">
                <p className="text-sm font-sans text-gray-800">That's wonderful news Priya! Keep up the watering schedule we discussed. 😊</p>
                <p className="text-[10px] text-gray-500 text-right mt-1 flex justify-end items-center gap-1">10:45 AM <CheckCircle2 className="w-3 h-3 text-blue-500" /></p>
              </div>
            </motion.div>

            {/* Google Style Review */}
            <motion.div variants={fadeUp} className="bg-whisper p-8 rounded-[2rem] border border-dewdrop shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <img src="https://picsum.photos/seed/portrait3/100/100" alt="Rahul" className="w-12 h-12 rounded-full object-cover shadow-sm" referrerPolicy="no-referrer" />
                <div>
                  <p className="font-bold text-verdant font-sans">Rahul Singh</p>
                  <p className="text-xs text-moss font-mono">Gurgaon Sector 54</p>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-accent text-accent" />)}
              </div>
              <p className="font-sans text-sm text-verdant/80 leading-relaxed">
                "Their eco-friendly approach means my kids and dogs can play on the lawn immediately after treatment. Our grass has never looked healthier. Best landscaping service in Gurgaon."
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* 5.5 Frequently Asked Questions */}
        <motion.section 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto w-full space-y-6"
        >
          <motion.div variants={fadeUp} className="text-center mb-10">
            <h2 className="font-serif text-4xl font-bold text-verdant mb-4">Common Questions</h2>
            <p className="font-sans text-moss">Everything you need to know about our pest control and landscaping services.</p>
          </motion.div>
          <div className="space-y-4">
            {[
              { q: "Are your pest control treatments safe for pets and children?", a: "Yes, absolutely. We use 100% organic, eco-friendly botanical extracts that target specific pests without harming mammals, birds, or beneficial insects like bees." },
              { q: "How long does a typical treatment take to show results?", a: "For most common pests like aphids and spider mites, you will see a significant reduction within 48 hours. Complete eradication usually takes 2-3 sessions spaced a week apart." },
              { q: "Do I need to move my indoor plants outside for treatment?", a: "No. Our indoor treatments are odor-free and safe to apply right where your plants live. We bring protective drop cloths to ensure your home stays spotless." },
              { q: "Do you offer ongoing garden maintenance?", a: "Yes! We offer weekly and monthly maintenance packages that include preventive pest control, pruning, fertilizing, and soil health monitoring." }
            ].map((faq, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-whisper border border-dewdrop rounded-2xl p-6 hover:border-moss transition-colors cursor-pointer group">
                <div className="flex justify-between items-center">
                  <h4 className="font-serif text-lg font-bold text-verdant pr-8">{faq.q}</h4>
                  <ChevronDown className="w-5 h-5 text-moss group-hover:text-verdant transition-colors flex-shrink-0" />
                </div>
                <p className="font-sans text-sm text-moss mt-4 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 6. Educational Content / Blog Snippets */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bento-card bg-leafy/20 border border-leafy/30 p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-8">
            <div className="max-w-xl">
              <h2 className="font-serif text-4xl font-bold text-verdant mb-4">Expert Plant Care Tips</h2>
              <p className="font-sans text-moss">Read our latest articles authored by certified horticulturists to keep your garden thriving in the Delhi climate.</p>
            </div>
            <button className="bg-whisper hover:bg-petal text-verdant font-mono text-xs font-bold tracking-widest uppercase px-6 py-3 rounded-full transition-colors border border-dewdrop">
              View All Articles
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-whisper rounded-3xl p-6 flex gap-6 hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer group border border-transparent hover:border-dewdrop">
              <motion.img 
                whileHover={{ scale: 1.05, rotate: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
                src="https://picsum.photos/seed/monsoon/200/200" alt="Monsoon care" className="w-24 h-24 rounded-2xl object-cover shadow-sm" referrerPolicy="no-referrer" 
              />
              <div className="flex flex-col justify-center">
                <span className="font-mono text-[10px] font-bold text-moss uppercase tracking-widest mb-2">Seasonal Care</span>
                <h4 className="font-serif text-lg font-bold text-verdant mb-2 leading-tight group-hover:text-moss transition-colors">How to Maintain Your Lawn in Monsoon Season</h4>
                <p className="font-sans text-xs text-moss line-clamp-2">Prevent fungal diseases and root rot during heavy Delhi rains with these 5 simple steps.</p>
              </div>
            </div>
            <div className="bg-whisper rounded-3xl p-6 flex gap-6 hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer group border border-transparent hover:border-dewdrop">
              <motion.img 
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
                src="https://picsum.photos/seed/indoorplant/200/200" alt="Indoor plants" className="w-24 h-24 rounded-2xl object-cover shadow-sm" referrerPolicy="no-referrer" 
              />
              <div className="flex flex-col justify-center">
                <span className="font-mono text-[10px] font-bold text-moss uppercase tracking-widest mb-2">Indoor Plants</span>
                <h4 className="font-serif text-lg font-bold text-verdant mb-2 leading-tight group-hover:text-moss transition-colors">5 Low-Maintenance Plants for Office Spaces</h4>
                <p className="font-sans text-xs text-moss line-clamp-2">Improve air quality and aesthetics without the hassle. Perfect for busy professionals.</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 7. Final CTA Banner */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bento-card bg-verdant text-whisper p-8 md:p-16 text-center relative overflow-hidden mt-8"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://picsum.photos/seed/leavespattern/1000/500')] opacity-10 object-cover mix-blend-overlay"></div>
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <motion.div variants={floatAnimation} animate="animate">
              <ShieldCheck className="w-12 h-12 text-leafy mb-6" />
            </motion.div>
            <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6 leading-tight">Ready to rescue your plants?</h2>
            <p className="font-sans text-lg text-petal/90 mb-8">
              Don't let pests destroy your beautiful garden. Book a free inspection today and let our experts restore your green oasis.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent hover:bg-orange-500 text-whisper font-mono text-sm font-bold tracking-widest uppercase px-8 py-4 rounded-full transition-colors shadow-lg flex items-center gap-2"
              >
                Book Free Inspection
              </motion.button>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+919876543210" className="bg-whisper/10 hover:bg-whisper/20 backdrop-blur-sm border border-whisper/30 text-whisper font-mono text-sm font-bold tracking-widest uppercase px-8 py-4 rounded-full transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4" /> Call Now
              </motion.a>
            </div>
          </div>
        </motion.section>

      </main>

      {/* Footer & Location SEO */}
      <footer className="bg-verdant text-whisper pt-16 pb-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-moss/50 pb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <ShieldCheck className="w-8 h-8 text-leafy" />
                <span className="text-2xl font-serif font-bold tracking-tight">Verdant Shield</span>
              </div>
              <p className="font-sans text-petal/80 max-w-sm mb-8">
                Science-backed, eco-friendly horticultural pest control and landscape maintenance for residential and commercial spaces.
              </p>
              <div className="flex gap-4">
                <motion.a 
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                  href="tel:+919876543210" className="bg-moss/50 hover:bg-moss p-3 rounded-full transition-colors"
                >
                  <Phone className="w-5 h-5" />
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://wa.me/919876543210" className="bg-moss/50 hover:bg-moss p-3 rounded-full transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
            
            <div>
              <h4 className="font-mono text-xs font-bold text-leafy uppercase tracking-widest mb-6">Quick Links</h4>
              <ul className="space-y-3 font-sans text-petal/80">
                <li><a href="#" className="hover:text-whisper transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-whisper transition-colors">Our Services</a></li>
                <li><a href="#" className="hover:text-whisper transition-colors">Pricing & Packages</a></li>
                <li><a href="#" className="hover:text-whisper transition-colors">Blog & Tips</a></li>
                <li><a href="#" className="hover:text-whisper transition-colors">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-xs font-bold text-leafy uppercase tracking-widest mb-6 flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Serving Delhi NCR
              </h4>
              <ul className="space-y-3 font-sans text-petal/80 text-sm">
                <li><a href="#" className="hover:text-whisper transition-colors">Plant Nursery in Noida Sector 62</a></li>
                <li><a href="#" className="hover:text-whisper transition-colors">Landscaping in Gurgaon Golf Course Rd</a></li>
                <li><a href="#" className="hover:text-whisper transition-colors">Pest Control in South Delhi</a></li>
                <li><a href="#" className="hover:text-whisper transition-colors">Garden Maintenance in Ghaziabad</a></li>
                <li><a href="#" className="hover:text-whisper transition-colors">Lawn Grass Installation in Faridabad</a></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-xs text-moss">
            <p>© 2026 Verdant Shield Pest Control. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-whisper transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-whisper transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
