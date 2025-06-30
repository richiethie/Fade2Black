import { useState, useEffect } from "react";
// import Fade2BlackLogo from "../assets/img/Fade2BlackLogo.png";
import { useIsMobile } from '@/context/MobileContext';
import { Link } from "react-router-dom";
import Fade2BlackLogo from "../assets/img/F2B-White.png"; // Updated to use the new logo

const Hero = () => {
  const isMobile = useIsMobile();
  const [isLoaded, setIsLoaded] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  
  useEffect(() => {
    const timer1 = setTimeout(() => setIsLoaded(true), 200);
    const timer2 = setTimeout(() => setAnimationComplete(true), 1500);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (isMobile) {
    return (
      <div className="relative w-full h-screen flex flex-col overflow-hidden pt-16"> {/* Added pt-16 for top spacing */}

        {/* Split Background - 60% Black on top, 40% White on bottom */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 right-0 h-[60%] bg-black"></div>
          <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-white"></div>
        </div>
        
        {/* Subtle Dot Pattern Overlays with improved opacity */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMikiLz48L3N2Zz4=')] opacity-30 top-0 left-0 right-0 h-[60%]"></div>
        <div className="absolute bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxIiBmaWxsPSJyZ2JhKDAsIDAsIDAsIDAuMSkiLz48L3N2Zz4=')] opacity-30 bottom-0 left-0 right-0 h-[40%]"></div>
        
        {/* Horizontal Divider Line - Animated */}
        <div className={`absolute left-0 right-0 top-[60%] h-px bg-zinc-400 transition-all duration-1000 ${isLoaded ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>
        
        {/* Top Section Content (Black Background) */}
        <div className="relative w-full h-[60%] flex flex-col justify-center items-center text-white">
          
          {/* Brand Name */}
          <div className={`mt-6 text-center transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${animationComplete ? 'translate-x-0' : '-translate-x-8'}`}>
            <p className="text-xl font-bold uppercase tracking-wider text-white">Fade</p>
          </div>
          
          {/* Thin Divider Line */}
          <div className={`w-16 h-px bg-white opacity-60 mt-4 transition-all duration-500 delay-300 ${isLoaded ? 'opacity-60 scale-x-100' : 'opacity-0 scale-x-0'} `}></div>
          
          {/* Tagline */}
          <p className={`mt-4 text-sm uppercase tracking-widest text-zinc-300 transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            Est. 2024
          </p>
          {/* Logo - Centered and slide in from top */}
          <div className={`transition-all duration-700 mt-12 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
            <img
              src={Fade2BlackLogo}
              alt="Fade2Black Logo"
              className="w-full max-w-[220px] p-4 bg-[#1b1f23]/80 rounded-xl"
            />
          </div>
        </div>
        
        {/* Bottom Section Content (White Background) */}
        <div className="relative w-full h-[40%] flex flex-col justify-start items-center text-black pt-8">
          {/* Brand Name - 2Black */}
          <div className={`text-center transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-80 scale-100' : 'opacity-0 scale-90'} ${animationComplete ? 'translate-x-0' : 'translate-x-8'}`}>
            <p className="text-xl font-bold uppercase tracking-wider text-black">2Black</p>
          </div>

           {/* Thin Divider Line */}
           <div className={`w-16 h-px bg-black opacity-60 mt-2 transition-all duration-500 delay-300 ${isLoaded ? 'opacity-60 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>
          
          {/* Tagline with improved spacing */}
          <p className={`text-base text-center font-medium max-w-xs mt-4 transition-all duration-700 delay-400 ${isLoaded ? 'opacity-80' : 'opacity-0'}`}>
            Where precision meets perfection
          </p>
          
          {/* Services List with improved spacing and animation */}
          <div className={`mt-6 text-center transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-sm font-medium text-zinc-800 mb-2 uppercase tracking-wider">Services</div>
            <div className="text-sm text-zinc-700">
              Premium Cuts • Beard Grooming • Styling
            </div>
          </div>
          
          {/* CTA Button with enhanced hover effect */}
          <Link to="/schedule" className={`mt-6 transition-all duration-700 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <button className="relative overflow-hidden text-base font-medium px-10 py-3 rounded-none group border border-black">
              <span className="absolute inset-0 bg-black transition-transform duration-300 origin-left transform scale-x-0 group-hover:scale-x-100"></span>
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">BOOK NOW</span>
            </button>
          </Link>
        </div>
        
        {/* Large "FADE" Text Overlay - Similar to desktop effect */}
        <div className={`absolute -left-4 top-16 pointer-events-none transition-all duration-1500 ease-out ${animationComplete ? 'opacity-25' : 'opacity-0'}`}>
          <h1 className="text-[12rem] font-black uppercase tracking-normal text-white mix-blend-overlay whitespace-nowrap">
            Fade
          </h1>
        </div>
        
        {/* Large "2BLACK" Text Overlay - Similar to desktop effect */}
        <div className={`absolute -right-6 bottom-10 pointer-events-none transition-all duration-1500 ease-out ${animationComplete ? 'opacity-25' : 'opacity-0'}`}>
          <h1 className="text-[10rem] font-black uppercase tracking-normal text-black mix-blend-overlay whitespace-nowrap">
            2Black
          </h1>
        </div>
        
        {/* Business Hours - Added to mobile */}
        <div className={`absolute bottom-4 left-0 right-0 text-center text-xs text-zinc-500 transition-all duration-700 delay-800 ${animationComplete ? 'opacity-100' : 'opacity-0'}`}>
          <p>OPEN TUE-FRI: 11AM-7PM | SAT: 12PM-7PM</p>
        </div>
        
        {/* Fixed Top Accent Line with animation */}
        <div className={`absolute top-0 left-0 right-0 h-1 bg-zinc-800 transition-all duration-700 ${isLoaded ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>
        
        {/* Fixed Bottom Accent Line with animation */}
        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-zinc-200 transition-all duration-700 ${isLoaded ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Split Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black"></div>
        <div className={`absolute right-0 top-0 bottom-0 w-1/3 bg-white transition-all duration-1000 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0 translate-x-full'}`}></div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMykiLz48L3N2Zz4=')] opacity-10"></div>
      
      {/* Large Text Overlay - Appears from offscreen */}
      <div className={`absolute -left-8 top-0 bottom-0 flex items-center transition-all duration-1500 ease-out ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
        {/* The large h1 with mix-blend-overlay */}
        <h1 className="text-[12rem] md:text-[16rem] lg:text-[20rem] xl:text-[24rem] font-black uppercase tracking-normal text-white mix-blend-overlay opacity-40 whitespace-nowrap">
          Fade
        </h1>
      </div>
      
      {/* Content Container */}
      <div className="absolute inset-0 flex">
        {/* Left Content Area */}
        <div className="w-2/3 h-full flex items-center justify-center">
          <div className={`ml-24 transition-opacity duration-1000 delay-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex flex-col items-start text-white max-w-lg">
              <div className="flex items-center mb-8">
                <div className="h-px w-12 bg-white opacity-50 mr-4"></div>
                <span className="text-sm tracking-widest uppercase text-zinc-400">Est. 2024</span>
              </div>
              
              {/* <img
                src={Fade2BlackLogo}
                alt="Fade2Black Logo"
                className="w-full max-w-[350px] mb-8 bg-[#1b1f23]/50 rounded-xl"
              /> */}
              
              <div className="relative mt-6 mb-10">
                <h2 className="font-light text-2xl max-w-md">
                  A premium grooming experience where precision meets perfection
                </h2>
                <div className="absolute -left-6 top-0 bottom-0 w-px bg-white opacity-30"></div>
              </div>
              
              <Link to="/schedule">
                <button className="relative overflow-hidden text-lg font-medium px-12 py-4 border-2 border-white cursor-pointer rounded-none group">
                  <span className="relative z-2 transition-colors duration-300 group-hover:text-black">BOOK YOUR APPOINTMENT</span>
                  <span className="absolute inset-0 bg-white transform -translate-y-full transition-transform duration-300 group-hover:translate-y-0"></span>
                </button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Right Content Area */}
        <div className="w-1/3 h-full flex flex-col justify-center items-center relative">
          <div className={`text-right pr-16 text-black transition-all duration-700 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="uppercase font-bold text-lg tracking-wider mb-4">Services</h2>
            <ul className="space-y-3 font-light">
              <li>Premium Haircuts</li>
              <li>Straight Razor Shaves</li>
              <li>Beard Grooming</li>
              <li>Hair Styling</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Text Bar */}
      <div className={`absolute bottom-0 left-0 right-0 flex justify-between items-center px-12 py-6 text-white transition-all duration-1000 delay-800 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-sm font-light flex flex-col items-end">
          <div className="flex items-center space-x-6">
            <span>OPEN TUE-FRI</span>
            <span>11AM - 7PM</span>
          </div>
          <div className="flex items-center space-x-6">
            <span>SAT</span>
            <span>12PM - 7PM</span>
          </div>
        </div>
        
        <div className="text-sm font-light">
          <div className="flex items-center">
            <div className="h-px w-6 bg-white opacity-50 mr-3"></div>
            SINCE 2024
          </div>
        </div>
      </div>
      
      {/* 2Black Text - Slide in from right */}
      <div className={`absolute right-0 top-24 transition-all duration-1000 delay-300 ${animationComplete ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
        <h1 className="text-[6rem] lg:text-[12rem] font-black uppercase tracking-normal text-black mix-blend-overlay z-5 opacity-30">
          2Black
        </h1>
      </div>
    </div>
  );
};

export default Hero;