import { useState, useEffect } from "react";
import MasterBarber from "../assets/img/Charles2.jpeg"; // Using the existing image
import { useIsMobile } from '@/context/MobileContext';
import { Link } from "react-router-dom";

const Team = () => {
  const isMobile = useIsMobile();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  if (isMobile) {
    return (
      <div className="bg-white py-20 px-6">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h2 className="text-4xl font-light text-black mb-4">
            Meet Your <span className="font-bold">Master Craftsman</span>
          </h2>
          <p className="text-zinc-600 max-w-xs mx-auto">
            Personal attention from a true artist of the craft
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-md mx-auto">
          {/* Portrait */}
          <div className={`mb-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="relative">
              <img
                src={MasterBarber}
                alt="Master Barber at Fade2Black"
                className="w-full h-80 object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>

          {/* Info */}
          <div className={`text-center mb-8 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h3 className="text-2xl font-bold text-black mb-2">Dre Harris</h3>
            {/* <p className="text-lg text-zinc-600 mb-4">15+ Years of Excellence</p> */}
            <p className="text-sm text-zinc-700 leading-relaxed mb-6">
              "Every cut tells a story. My passion is helping each client discover their best look while delivering an experience that goes beyond expectations."
            </p>
          </div>

          {/* Expertise */}
          <div className={`mb-8 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h4 className="text-lg font-semibold text-black text-center mb-4">Specialized In</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-center space-x-3">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <span className="text-sm text-zinc-700">Classic & Modern Cuts</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <span className="text-sm text-zinc-700">Straight Razor Expertise</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <span className="text-sm text-zinc-700">Beard Sculpting</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className={`text-center transition-all duration-700 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <Link to="/schedule">
              <button className="bg-black text-white px-8 py-3 hover:bg-zinc-800 transition-colors duration-300 w-full">
                Book Your Appointment
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-8 py-24">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h2 className="text-5xl font-light text-black mb-6">
            Meet Your <span className="font-bold">Master Craftsman</span>
          </h2>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            Experience the personal touch that only comes from working directly with a master of the craft
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative">
              <img
                src={MasterBarber}
                alt="Master Barber at Fade2Black"
                className="w-full h-[600px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              
              {/* Experience Badge */}
              {/* <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded">
                <div className="text-center">
                  <div className="text-2xl font-bold text-black">15+</div>
                  <div className="text-sm text-zinc-600 uppercase tracking-wide">Years Experience</div>
                </div>
              </div> */}
            </div>
          </div>

          {/* Right - Content */}
          <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="space-y-8">
              {/* Title */}
              <div>
                <h3 className="text-3xl font-bold text-black mb-2">Dre Harris</h3>
                <p className="text-lg text-zinc-600">Passionate about the art of grooming</p>
              </div>

              {/* Quote */}
              <div className="border-l-4 border-black pl-6">
                <p className="text-lg text-zinc-700 italic leading-relaxed">
                  "Every cut tells a story. My passion is helping each client discover their best look while delivering an experience that goes beyond expectations. It's not just about the haircut—it's about confidence, craftsmanship, and connection."
                </p>
              </div>

              {/* Expertise */}
              <div>
                <h4 className="text-xl font-semibold text-black mb-6">Areas of Expertise</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-black rounded-full mt-1.5"></div>
                    <div>
                      <h5 className="font-medium text-black">Classic Cuts</h5>
                      <p className="text-sm text-zinc-600">Timeless styles executed perfectly</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-black rounded-full mt-1.5"></div>
                    <div>
                      <h5 className="font-medium text-black">Modern Styling</h5>
                      <p className="text-sm text-zinc-600">Contemporary trends and techniques</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-black rounded-full mt-1.5"></div>
                    <div>
                      <h5 className="font-medium text-black">Straight Razor</h5>
                      <p className="text-sm text-zinc-600">Traditional wet shaving mastery</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-black rounded-full mt-1.5"></div>
                    <div>
                      <h5 className="font-medium text-black">Beard Sculpting</h5>
                      <p className="text-sm text-zinc-600">Precision grooming and design</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Personal Touch */}
              <div className="bg-zinc-50 p-6 rounded">
                <h4 className="text-lg font-semibold text-black mb-3">The Personal Touch</h4>
                <p className="text-zinc-700 leading-relaxed">
                  Working one-on-one means every appointment is tailored specifically to you. From consultation to final styling, you receive undivided attention and expertise that larger shops simply can't provide.
                </p>
              </div>

              {/* CTA */}
              <div className="pt-4">
                <Link to="/schedule">
                  <button className="bg-black text-white px-10 py-4 hover:bg-zinc-800 transition-colors duration-300 cursor-pointer font-medium">
                    Book Your Personal Session
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;