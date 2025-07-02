import { FaFacebook, FaInstagram, FaSnapchatGhost } from "react-icons/fa";
import { IoLink } from "react-icons/io5";
import Fade2BlackLogo from "../assets/img/F2B-Black.png";
import { useIsMobile } from '@/context/MobileContext';
import { Link } from "react-router-dom";

const Footer = () => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <footer className="bg-white text-white py-10">
        <div className="flex flex-col items-center max-w-7xl mx-auto px-8 gap-8">
          {/* Mobile: Google Maps Embed */}
          <div className="w-full h-[200px] rounded-lg shadow-2xl shadow-black mb-6">
            <iframe
              className="w-full h-full rounded-lg"
              src={`https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&q=15+Sterling+Ave,+Suite+1,+Oshkosh,+WI+54901`}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          {/* Mobile: Footer Content */}
          <div className="w-full flex flex-col items-center text-black mb-6">
            {/* Logo */}
            <div className="flex items-center space-x-4 mb-4">
              <img src={Fade2BlackLogo} alt="Fade2Black Logo" className="h-16" />
              <div className="flex flex-col text-center">
                <p className="text-sm">15 Sterling Ave, Suite 1</p>
                <p className="text-sm">Oshkosh, WI 54901</p>
                <p>
                  <a href="tel:+19202511683" className="text-sm">920-251-1683</a>
                </p>
                <p>
                  <a href="mailto:fade2blackbarbershop@gmail.com" className="text-xs">fade2blackbarbershop@gmail.com</a>
                </p>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center space-x-3 mb-6">
              <Link to="/" className="text-lg font-bold hover:text-orange-300">Home</Link>
              <Link to="/location" className="text-lg font-bold hover:text-orange-300">Location</Link>
              <Link to="/services" className="text-lg font-bold hover:text-orange-300">Services</Link>
              <Link to="/schedule" className="text-lg text-nowrap font-bold hover:text-orange-300">Book Now</Link>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4 mb-6">
              <a href="https://www.facebook.com/dre.harris.395" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={30} className="hover:text-orange-300" />
              </a>
              <a href="https://www.instagram.com/drestylez_barber" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={30} className="hover:text-orange-300" />
              </a>
              <a href="https://www.snapchat.com/add/" target="_blank" rel="noopener noreferrer">
                <FaSnapchatGhost size={30} className="hover:text-orange-300" />
              </a>
              <a href="https://www.google.com/search?q=Fade+2+Black+Barbershop+Oshkosh" target="_blank" rel="noopener noreferrer">
                <IoLink size={30} className="hover:text-orange-300" />
              </a>
            </div>

            {/* Copyright and Accessibility */}
            <div className="text-sm text-gray-400 text-center">
              <p className="text-lg">&copy; {new Date().getFullYear()} Fade2Black Barbershop. All Rights Reserved.</p>
              <div className="flex justify-center space-x-4 mt-2">
                <a href="#accessibility" className="hover:text-gray-600">Accessibility</a>
                <a href="#privacy" className="hover:text-gray-600">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-white text-white py-10">
      <div className="flex flex-col md:flex-row items-start max-w-7xl mx-auto px-8 gap-[8rem]">
        {/* Left Side: Google Maps Embed */}
        <div className="w-full md:w-1/2 h-[300px] md:h-[300px] lg:h-[400px] rounded-lg shadow-2xl shadow-black">
          <iframe
            className="w-full h-full rounded-lg"
            src={`https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&q=15+Sterling+Ave,+Suite+1,+Oshkosh,+WI+54901`}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* Right Side: Footer Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center text-black mt-8 md:mt-0 md:pl-10">
          {/* Logo */}
            <div className="flex items-center space-x-4">
              <img src={Fade2BlackLogo} alt="Fade2Black Logo" className="h-30 mb-4" />
              <div className="flex flex-col text-center">
                <p className="text-sm">15 Sterling Ave, Suite 1</p>
                <p className="text-sm">Oshkosh, WI 54901</p>
                <p>
                  <a href="tel:+19202511683" className="text-sm">920-251-1683</a>
                </p>
                <p>
                  <a href="mailto:fade2blackbarbershop@gmail.com" className="text-xs">fade2blackbarbershop@gmail.com</a>
                </p>
              </div>
            </div>

          {/* Navigation Links */}
          <div className="flex space-x-4 mb-6">
            <Link to="/" className="text-lg font-bold hover:text-orange-300">Home</Link>
            <Link to="/location" className="text-lg font-bold hover:text-orange-300">Location</Link>
            <Link to="/services" className="text-lg font-bold hover:text-orange-300">Services</Link>
            <Link to="/schedule" className="text-lg text-nowrap font-bold hover:text-orange-300">Book Now</Link>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4 mb-6">
            <a href="https://www.facebook.com/dre.harris.395" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={30} className="hover:text-orange-300" />
            </a>
            <a href="https://www.instagram.com/drestylez_barber" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} className="hover:text-orange-300" />
            </a>
            <a href="https://www.snapchat.com/add/" target="_blank" rel="noopener noreferrer">
              <FaSnapchatGhost size={30} className="hover:text-orange-300" />
            </a>
            <a href="https://www.google.com/search?q=Fade+2+Black+Barbershop+Oshkosh" target="_blank" rel="noopener noreferrer">
              <IoLink size={30} className="hover:text-orange-300" />
            </a>
          </div>

          {/* Copyright and Accessibility */}
          <div className="text-sm text-gray-400 text-right">
            <p className="text-lg">&copy; {new Date().getFullYear()} Fade2Black Barbershop. All Rights Reserved.</p>
            <div className="flex justify-center space-x-4 mt-2">
              <a href="#accessibility" className="hover:text-gray-600">Accessibility</a>
              <a href="#privacy" className="hover:text-gray-600">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
