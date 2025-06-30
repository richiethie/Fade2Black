import { useState, useEffect } from "react";
import Backsplash from "../assets/img/Backsplash.jpg";
import { useIsMobile } from '@/context/MobileContext';
import { Link } from "react-router-dom";

const Book = () => {
  const isMobile = useIsMobile();
  const [isVisible, setIsVisible] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    
    // Update current time
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
      }));
    };
    
    updateTime();
    const timeInterval = setInterval(updateTime, 1000);
    
    return () => {
      clearTimeout(timer);
      clearInterval(timeInterval);
    };
  }, []);

  if (isMobile) {
    return (
      <div className="relative bg-black overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={Backsplash}
            alt="Fade2Black Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 px-6 py-20">
          {/* Header */}
          <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="mb-6">
              <div className="inline-flex items-center space-x-2 mb-4">
                <div className="w-8 h-px bg-white opacity-50"></div>
                <span className="text-xs tracking-[0.3em] text-zinc-400 uppercase">Ready?</span>
                <div className="w-8 h-px bg-white opacity-50"></div>
              </div>
              <h2 className="text-3xl font-light text-white mb-2">
                Experience the
              </h2>
              <h3 className="text-4xl font-bold text-white">
                FADE<span className="text-zinc-400">2</span>BLACK
              </h3>
              <h3 className="text-4xl font-bold text-white mb-4">
                Difference
              </h3>
            </div>
            <p className="text-zinc-300 max-w-xs mx-auto leading-relaxed">
              Your transformation awaits. Book your appointment and discover what precision craftsmanship feels like.
            </p>
          </div>

          {/* Booking Info */}
          <div className={`mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 max-w-sm mx-auto">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h4 className="text-white font-medium">Current Time</h4>
                  <p className="text-zinc-300 text-sm">{currentTime}</p>
                </div>
                <div className="text-right">
                  <h4 className="text-white font-medium">Today's Status</h4>
                  <p className="text-green-400 text-sm">Accepting Appointments</p>
                </div>
              </div>
              <div className="border-t border-white/20 pt-4">
                <h4 className="text-white font-medium mb-2">Hours</h4>
                <div className="space-y-1 text-sm text-zinc-300">
                  <div className="flex justify-between">
                    <span>Tue - Fri</span>
                    <span>11AM - 7PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>12PM - 7PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sun - Mon</span>
                    <span className="text-zinc-500">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className={`text-center space-y-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Link to="/schedule" className="block">
              <button className="w-full max-w-xs bg-white text-black py-4 px-8 font-bold hover:bg-zinc-200 transition-colors duration-300">
                BOOK APPOINTMENT
              </button>
            </Link>
            <Link to="/services" className="block">
              <button className="w-full max-w-xs border-2 border-white text-white py-4 px-8 font-medium hover:bg-white hover:text-black transition-colors duration-300">
                VIEW SERVICES & PRICING
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-black min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0">
        <img
          src={Backsplash}
          alt="Fade2Black Barbershop Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-black/70"></div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-8 w-full">
        <div className="grid grid-cols-2 gap-16 items-center">
          {/* Left Side - Main CTA */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="mb-8">
              <div className="flex items-center mb-6">
                <div className="h-px w-16 bg-white opacity-50 mr-4"></div>
                <span className="text-sm tracking-[0.2em] text-zinc-400 uppercase">Ready to Begin?</span>
              </div>
              
              <h2 className="text-6xl font-light text-white mb-4 leading-tight">
                Experience the
              </h2>
              <h3 className="text-7xl font-bold text-white mb-2">
                FADE<span className="text-zinc-500">2</span>BLACK
              </h3>
              <h3 className="text-7xl font-bold text-white mb-8">
                Difference
              </h3>
              
              <p className="text-xl text-zinc-300 leading-relaxed max-w-lg mb-12">
                Your transformation awaits. Step into a world where precision meets perfection, and every detail is crafted with care.
              </p>
            </div>

            {/* Primary CTA */}
            <div className="space-y-6">
              <Link to="/schedule">
                <button className="bg-white text-black px-12 py-5 text-xl font-bold hover:bg-zinc-200 transition-colors duration-300 w-full mb-4">
                  BOOK YOUR APPOINTMENT
                </button>
              </Link>
              
              <div className="flex space-x-4">
                <Link to="/services" className="flex-1">
                  <button className="border-2 border-white text-white px-6 py-3 font-medium hover:bg-white hover:text-black transition-colors duration-300 w-full">
                    VIEW SERVICES
                  </button>
                </Link>
                <Link to="/contact" className="flex-1">
                  <button className="border border-white/50 text-zinc-300 px-6 py-3 font-medium hover:border-white hover:text-white transition-colors duration-300 w-full">
                    CONTACT US
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side - Booking Information */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="space-y-8">
              {/* Current Status */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h4 className="text-2xl font-semibold text-white mb-1">Current Time</h4>
                    <p className="text-xl text-zinc-300">{currentTime}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-400 font-medium">Available Today</span>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-white/20 pt-6">
                  <h4 className="text-xl font-semibold text-white mb-4">Business Hours</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-zinc-300">Tuesday - Friday</span>
                      <span className="text-white font-medium">11:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-zinc-300">Saturday</span>
                      <span className="text-white font-medium">12:00 PM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-zinc-300">Sunday - Monday</span>
                      <span className="text-zinc-500">Closed</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Book */}
              <div className="bg-black/40 backdrop-blur-sm border border-white/10 p-8">
                <h4 className="text-xl font-semibold text-white mb-4">Why Choose Fade2Black?</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-zinc-300">One-on-one personal attention</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-zinc-300">15+ years of master craftsmanship</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-zinc-300">Premium products & techniques</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-zinc-300">Exclusive, sophisticated environment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
    </div>
  );
};

export default Book;