import { ArrowRight, Heart, Award, Users, Calendar, Phone, Mail, Clock, HelpCircle, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface WelcomePageProps {
  onGetStarted: () => void;
}

export function WelcomePage({ onGetStarted }: WelcomePageProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F9F9]">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 w-full bg-[#2C3E50]/30 backdrop-blur-md z-50 h-16">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="w-12 h-12 bg-gradient-to-br from-[#6CCFF6] to-[#33A1FF] rounded-full flex items-center justify-center shadow-lg">
              <Award className="w-7 h-7 text-white" />
            </div>
            <span className="text-white text-xl">Diamond Events</span>
          </div>
          <nav>
            <ul className="flex gap-8">
              <li>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="text-white hover:text-[#6CCFF6] transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="text-white hover:text-[#6CCFF6] transition-colors"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('work')} 
                  className="text-white hover:text-[#6CCFF6] transition-colors"
                >
                  Our Work
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="text-white hover:text-[#6CCFF6] transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1761110787206-2cc164e4913c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZXZlbnQlMjB2ZW51ZSUyMGludGVyaW9yfGVufDF8fHx8MTc2ODYzMTYyOXww&ixlib=rb-4.1.0&q=80&w=1080')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="relative z-10 max-w-4xl px-4">
          <p className="text-sm tracking-[4px] mb-4">——— &nbsp;&nbsp;EVENT EXCELLENCE&nbsp;&nbsp; ———</p>
          <h1 className="text-4xl md:text-5xl mb-6 leading-tight">
            WHERE EVERY DETAIL TELLS A STORY<br />WORTH CELEBRATING
          </h1>
          <p className="text-lg mb-8 leading-relaxed max-w-3xl mx-auto">
            Transforming your vision into unforgettable moments through thoughtful planning,<br />
            refined creativity, and exceptional execution that brings every detail to life.
          </p>
          <button 
            onClick={onGetStarted}
            className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-[#333333] transition-all duration-300 hover:scale-105"
          >
            <span className="text-lg">Book Your Event</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1752857015591-c1b85c01c461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwZWxlZ2FudCUyMGRlY29yYXRpb258ZW58MXx8fHwxNzY4NjMxNjI5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Elegant event decoration"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl mb-6 text-[#333333]">About Diamond Events</h2>
              <p className="text-[#333333] text-lg leading-relaxed mb-4">
                Diamond Events is your trusted partner in creating memorable personal and corporate events. 
                With years of experience and a passionate team, we specialize in designing and organizing weddings, 
                birthdays, anniversaries, baby showers, corporate conferences, product launches, galas, and more.
              </p>
              <p className="text-[#333333] text-lg leading-relaxed">
                Our mission is to turn your vision into reality with precision, creativity, and style. 
                Our team handles every detail including venue selection, décor, catering, entertainment, event 
                branding, logistics, and day-of coordination so you can simply enjoy the moment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-[#333333]">Our Services</h2>
            <p className="text-[#333333] text-lg">
              We plan both personal and corporate events,<br />
              from birthdays, weddings, and anniversaries to meetings, conferences, and team-building activities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            {[
              { name: 'Weddings', icon: Heart },
              { name: 'Birthdays', icon: '🎂' },
              { name: 'Graduations', icon: '🎓' },
              { name: 'Conferences', icon: Users },
              { name: 'Galas', icon: '🎉' },
              { name: 'Product Launch', icon: '🚀' },
            ].map((service, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow border border-gray-100"
              >
                {typeof service.icon === 'string' ? (
                  <div className="text-5xl">{service.icon}</div>
                ) : (
                  <div className="w-20 h-20 flex items-center justify-center">
                    <service.icon className="w-12 h-12 text-[#6CCFF6]" />
                  </div>
                )}
                <p className="text-[#333333] text-lg">{service.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#34495E] text-center">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-white text-lg mb-6 leading-relaxed">
            Discover our complete range of services designed to create unforgettable experiences.<br />
            Let us turn your vision into a seamless, memorable event.
          </p>
          <button 
            onClick={onGetStarted}
            className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-[#333333] transition-all duration-300 hover:scale-105"
          >
            <span>Explore All Services</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="work" className="py-20 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl text-center mb-12 text-[#333333]">Our Work</h2>
          
          <div className="flex gap-4">
            {/* Column 1 */}
            <div className="flex-1 flex flex-col gap-4">
              <div className="h-[250px]">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1752857015591-c1b85c01c461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwZWxlZ2FudCUyMGRlY29yYXRpb258ZW58MXx8fHwxNzY4NjMxNjI5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Event 1"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="h-[450px]">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1764726354539-96228698dc45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3Njg1NjA1MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Event 4"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex-1 flex flex-col gap-4">
              <div className="h-[350px]">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1668398188477-89a80f53d17b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMHBhcnR5JTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzY4NTc0NDcyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Event 2"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="h-[350px]">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1768448808550-3148cce53a19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwbWVldGluZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3Njg2MzE2MzF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Event 5"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex-1 flex flex-col gap-4">
              <div className="h-[450px]">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1768508947591-b650dacc70a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYWxhJTIwZGlubmVyJTIwZWxlZ2FudHxlbnwxfHx8fDE3Njg2MzE2MzF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Event 3"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="h-[250px]">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1761110787206-2cc164e4913c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZXZlbnQlMjB2ZW51ZSUyMGludGVyaW9yfGVufDF8fHx8MTc2ODYzMTYyOXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Event 6"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact Section */}
      <footer id="contact" className="bg-[#2C3E50] text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
            {/* Logo Section */}
            <div className="flex items-start justify-start">
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 bg-gradient-to-br from-[#6CCFF6] to-[#33A1FF] rounded-full flex items-center justify-center shadow-lg">
                  <Award className="w-9 h-9 text-white" />
                </div>
                <span className="text-2xl">Diamond Events</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => scrollToSection('about')} className="hover:text-[#6CCFF6] transition-colors">
                    About Us
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('services')} className="hover:text-[#6CCFF6] transition-colors">
                    Our Services
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('work')} className="hover:text-[#6CCFF6] transition-colors">
                    Our Work
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('contact')} className="hover:text-[#6CCFF6] transition-colors">
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#6CCFF6]" />
                  <span><strong>Call Us:</strong> +251 911 234 567</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#6CCFF6]" />
                  <span><strong>Email:</strong> info@diamond-events.et</span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#6CCFF6]" />
                  <span><strong>Hours:</strong> Mon-Fri 8AM-8PM</span>
                </li>
                <li className="flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#6CCFF6]" />
                  <span><strong>Support:</strong> 24/7 Assistance</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-700 pt-6 text-center text-gray-400">
            <p>© 2026 Diamond Events. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
