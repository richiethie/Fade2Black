import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { useIsMobile } from "@/context/MobileContext";
import { IoClose, IoLink } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaBars, FaFacebook, FaInstagram, FaSnapchatGhost, FaUserCircle } from "react-icons/fa";
import F2B from "@/assets/img/F2B-Short.png"; // Assuming you have a barber pole image

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDrawer = () => setDrawerOpen((prev) => !prev);
  const handleAuthAction = () => {
    if (isAuthenticated) {
      navigate("/members");
    } else {
      navigate("/login");
    }
    toggleDrawer();
  };

  if (isMobile) {
    return (
      <>
        <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${isScrolled ? "bg-black" : "bg-transparent"}`}>
          {/* Notice Banner */}
          {/* <div className="w-full z-50 bg-white text-black text-center text-xs font-semibold py-1 px-4 flex justify-between items-center">
            <span>New Address. Same Empire. </span>
            <Link 
              to="/location" 
              className="underline hover:text-white transition-colors flex items-center"
            >
              <p className="pr-1">See our new location</p>
              <FaExternalLinkAlt />
            </Link>
          </div> */}
          <div className="p-4">
            <div className="flex justify-between items-center mx-auto">
              <div onClick={() => navigate("/")} className=" flex items-center text-4xl text-white font-bold cursor-pointer z-10">
                <img src={F2B} alt="Fade2Black" className="h-16" />
                
              </div>
              <button onClick={toggleDrawer} className="text-white text-2xl p-2 md:hidden" aria-label="Open Drawer">
                <FaBars />
              </button>
            </div>

            {isDrawerOpen && (
              <div className="fixed inset-0 bg-black z-20 flex">
                <aside className="bg-charcoal w-full p-4 overflow-y-scroll">
                  <div className="flex justify-between items-center mb-4">
                    <div onClick={() => navigate("/")} className=" flex items-center text-4xl text-white font-bold cursor-pointer z-10">
                      <img src={F2B} alt="Fade2Black" className="h-16" />
                    </div>
                    <button onClick={toggleDrawer} className="text-white text-4xl p-1" aria-label="Close Drawer">
                      <IoClose />
                    </button>
                  </div>
                  <nav className="flex flex-col items-center mt-12">
                    <Link to="/" onClick={toggleDrawer} className="text-4xl text-white hover:text-orange-300 py-5 tracking-wider block"><h1>Home</h1></Link>
                    <Link to="/services" onClick={toggleDrawer} className="text-4xl text-white hover:text-orange-300 py-5 tracking-wider block"><h1>Services</h1></Link>
                    <Link to="/schedule" onClick={toggleDrawer} className="text-4xl text-white hover:text-orange-300 py-5 tracking-wider block"><h1>Schedule</h1></Link>
                    <Link to="/gallery" onClick={toggleDrawer} className="text-4xl text-white hover:text-orange-300 py-5 tracking-wider block"><h1>Gallery</h1></Link>
                    {/* <Link to="/memberships" onClick={toggleDrawer} className="text-4xl text-white hover:text-orange-300 py-5 tracking-wider block"><h1>Membership</h1></Link> */}
                    <Link to="/location" onClick={toggleDrawer} className="text-4xl text-white hover:text-orange-300 py-5 tracking-wider block"><h1>Location</h1></Link>
                  </nav>
                  <div className="text-center mt-6">
                    {/* <button onClick={handleAuthAction} className="text-white text-xl font-semibold border border-white px-4 py-2 rounded-md cursor-pointer hover:text-orange-300 hover:border-orange-300">
                      {isAuthenticated ? "Member Center" : "Member Login"}
                    </button> */}
                  </div>
                  <div className="mt-auto pt-6 mb-6 flex flex-col">
                    <div className="flex items-center justify-center space-x-4">
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
                  </div>
                </aside>
                <div className="flex-1" onClick={toggleDrawer} />
              </div>
          )}
          </div>
        </header>
      </>
    );
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full z-10 px-4 py-2 transition-all duration-300 ${
        isScrolled ? "bg-black shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="relative flex items-center justify-between w-full px-4 md:px-8">
        {/* Logo: stick to the left edge */}
        <div onClick={() => navigate("/")} className=" flex items-center text-4xl text-white font-bold cursor-pointer z-10">
          <img src={F2B} alt="Fade2Black" className="h-20" />
          
        </div>

        {/* Centered Nav */}
        <nav className="md:flex space-x-8">
          <Link to="/" className="text-3xl text-white tracking-wide hover:text-orange-300"><h1>Home</h1></Link>
          <Link to="/services" className="text-3xl text-white tracking-wide hover:text-orange-300"><h1>Services</h1></Link>
          <Link to="/schedule" className="text-3xl text-white tracking-wide hover:text-orange-300"><h1>Schedule</h1></Link>
          <Link to="/gallery" className="text-3xl text-white tracking-wide hover:text-orange-300"><h1>Gallery</h1></Link>
          <Link to="/location" className="text-3xl text-white tracking-wide hover:text-orange-300"><h1>Location</h1></Link>
        </nav>

        {/* Spacer for symmetry or future buttons */}
        <div className="w-28" />
      </div>
    </header>
  );

  // return (
  //   <header className={`fixed top-0 left-0 w-full z-10 p-4 transition-all duration-300 ${isScrolled ? "bg-black shadow-lg" : "bg-transparent"}`}>
  //     <div className="flex justify-between items-center mx-auto">
  //       <div onClick={() => navigate("/")} className="flex text-6xl cursor-pointer">
  //         {/* <div className="flex justify-center items-center w-16 bg-white rounded-full">
  //           <img src={ArmonPartialLogo} alt="Fade2Black Logo" className="h-14 pb-1" />
  //         </div> */}
  //         <h1 className="text-white ml-1">Fade2Black</h1>
  //       </div>
  //       <nav className="hidden md:flex p-4 rounded-xl space-x-6">
  //         <Link to="/" className="text-xl text-white font-bold hover:text-orange-300">Home</Link>
  //         <Link to="/services" className="text-xl text-white font-bold hover:text-orange-300">Services</Link>
  //         <Link to="/schedule" className="text-xl text-white font-bold hover:text-orange-300">Schedule</Link>
  //         <Link to="/gallery" className="text-xl text-white font-bold hover:text-orange-300">Gallery</Link>
  //         <Link to="/location" className="text-xl text-white font-bold hover:text-orange-300">Location</Link>
  //         {/* <Link to="/memberships" className="text-xl text-white font-bold hover:text-orange-300">Membership</Link> */}
  //       </nav>
  //       {/* <button onClick={handleAuthAction} className="text-white font-semibold border border-white px-4 py-2 ml-32 rounded-md cursor-pointer hover:text-orange-300 hover:border-orange-300">
  //         {isAuthenticated ? "Member Center" : "Member Login"}
  //       </button> */}
  //     </div>
  //   </header>
  // );
};

export default Header;
