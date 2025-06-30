import { useState, useEffect } from "react";
import { FaShower, FaRegSmile, FaSpa, FaClipboardList, FaAngleRight } from "react-icons/fa";
import { GiRazor } from "react-icons/gi";
import { PiScissorsFill, PiSparkle } from "react-icons/pi";
import { FaScissors } from "react-icons/fa6";
import { TbMassage } from "react-icons/tb";
import { RiScissorsCutFill } from "react-icons/ri";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const Services = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const serviceCategories = [
    { id: "all", label: "All Services" },
    { id: "haircuts", label: "Haircuts" },
    { id: "facial", label: "Facial Hair" },
    { id: "specialty", label: "Specialty" },
  ];

  const services = [
    {
      id: 1,
      title: "Full Haircut & Facial Hair",
      price: 50,
      description: "A tailored haircut and facial hair grooming session for a sharp, cohesive look.",
      icon: <FaScissors size={24} />,
      categories: ["haircuts", "facial"],
      featured: true,
    },
    {
      id: 2,
      title: "Scalp Treatment",
      price: 45,
      description: "A nourishing treatment to soothe and revitalize your scalp, promoting healthy hair.",
      icon: <FaShower size={24} />,
      categories: ["specialty"],
    },
    {
      id: 3,
      title: "Kid's Haircut (12 & Under)",
      price: 30,
      description: "A fun, precise haircut designed for kids 12 and under, ensuring a comfortable experience.",
      icon: <PiScissorsFill size={24} />,
      categories: ["haircuts"],
    },
    {
      id: 4,
      title: "Bald Head | Beard Trim & Lining",
      price: 35,
      description: "A smooth bald head shave with precise beard trimming and lining for a polished appearance.",
      icon: <GiRazor size={24} />,
      categories: ["haircuts", "facial"],
    },
    {
      id: 5,
      title: "Hair Lining & Taper Back",
      price: 30,
      description: "Crisp hair lining and tapered back for a clean, defined style that enhances your look.",
      icon: <RiScissorsCutFill size={24} />,
      categories: ["haircuts"],
    },
    {
      id: 6,
      title: "Full Haircut, Beard & Enhancements",
      price: 55,
      description: "A complete haircut, beard grooming, and enhancements for a bold, refined finish.",
      icon: <PiSparkle size={24} />,
      categories: ["haircuts", "facial", "specialty"],
      featured: true,
    },
    {
      id: 7,
      title: "Haircut & Sponge",
      price: 50,
      description: "A stylish haircut paired with sponge styling for textured, defined curls.",
      icon: <TbMassage size={24} />,
      categories: ["haircuts", "specialty"],
    },
    {
      id: 8,
      title: "Full Haircut | No Facial Hair",
      price: 45,
      description: "A precision haircut tailored to your style, without facial hair grooming.",
      icon: <FaScissors size={24} />,
      categories: ["haircuts"],
    },
    {
      id: 9,
      title: "Haircut | Removal of Longer Hair",
      price: 55,
      description: "A detailed haircut with expert removal of longer hair for a sleek, polished look.",
      icon: <RiScissorsCutFill size={24} />,
      categories: ["haircuts"],
    },
  ];

  const filteredServices = activeCategory === "all" 
    ? services 
    : services.filter(service => service.categories.includes(activeCategory));

  return (
    <div className="bg-white text-black min-h-screen">
      <Header />
      
      {/* Hero Section - Sharp Aesthetic */}
      <div className="relative bg-black overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDIpIi8+PC9zdmc+')] opacity-30"></div>
        

        
        <div className="max-w-7xl mx-auto px-8 py-24 relative">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Header */}
            <div className="flex items-center justify-center mb-8">
              <span className="text-sm tracking-[0.3em] text-zinc-400 uppercase">Services</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-light text-white mb-6 tracking-tight">
              Precision <span className="">Craftsmanship</span>
            </h1>
            <p className="text-xl text-zinc-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Where every cut tells a story of expertise, every shave reflects mastery, and every detail matters.
            </p>
            
            {/* CTA */}
            <Link to="/schedule">
              <button className="relative overflow-hidden text-lg font-medium px-12 py-4 border-2 border-white cursor-pointer group hover:border-zinc-300 transition-all duration-300">
                <span className="relative z-2 text-white transition-colors duration-300 group-hover:text-black">BOOK APPOINTMENT</span>
                <span className="absolute inset-0 bg-white transform -translate-y-full transition-transform duration-300 group-hover:translate-y-0"></span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Category Filter - Minimalist Design */}
      <div className="bg-zinc-50 py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className={`flex justify-center mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="grid grid-cols-2 md:flex border border-zinc-200 bg-white">
              {serviceCategories.map((category, index) => (
                <button
                  key={category.id}
                  className={`relative px-8 py-4 font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-black text-white"
                      : "text-black hover:bg-zinc-100"
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Services Grid - Clean Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div 
                key={service.id} 
                className={`group relative bg-white border border-zinc-200 hover:border-zinc-400 transition-all duration-300 hover:shadow-lg ${service.featured ? 'ring-1 ring-zinc-300' : ''} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                {/* Featured badge */}
                {service.featured && (
                  <div className="absolute top-0 right-0 bg-black text-white text-xs font-medium px-3 py-1">
                    <span>POPULAR</span>
                  </div>
                )}
                
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 bg-black text-white flex items-center justify-center group-hover:bg-zinc-800 transition-colors duration-300">
                      {service.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-black">${service.price}</div>
                      <div className="text-xs text-zinc-500 uppercase tracking-wide">Starting at</div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold mb-4 text-black group-hover:text-zinc-800 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-zinc-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* CTA */}
                  <Link to="/schedule" className="inline-flex items-center text-black hover:text-zinc-600 font-medium transition-colors duration-300 group">
                    <span>Book Service</span>
                    <FaAngleRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Experience Section - Split Design */}
      <div className="bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid">
            {/* Left Content */}
            <div className="p-16 lg:p-24">
              <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                <div className="flex items-center mb-8">
                  <div className="h-px w-12 bg-white opacity-50 mr-4"></div>
                  <span className="text-sm tracking-widest uppercase text-zinc-400">Excellence</span>
                </div>
                
                <h2 className="text-4xl font-light mb-8">
                  The <span className="font-bold">Fade2Black</span> Standard
                </h2>
                <p className="text-xl text-zinc-300 mb-12 leading-relaxed">
                  Every service is delivered with meticulous attention to detail, using only premium products and time-tested techniques.
                </p>
                
                <div className="space-y-6">
                  {[
                    // "15+ years of master craftsmanship",
                    "Premium products for superior results",
                    "Personalized consultation every visit",
                    "Precision techniques, guaranteed satisfaction"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-4"></div>
                      <span className="text-zinc-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Right Content - Membership */}
            {/* <div className="bg-white text-black p-16 lg:p-24">
              <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                <div className="flex items-center mb-8">
                  <span className="text-sm tracking-widest uppercase text-zinc-600">Membership</span>
                  <div className="h-px w-12 bg-black opacity-30 ml-4"></div>
                </div>
                
                <h3 className="text-4xl font-light mb-8">
                  Exclusive <span className="font-bold">Benefits</span>
                </h3>
                
                <div className="space-y-4 mb-12">
                  {[
                    "Priority booking and scheduling",
                    "20% discount on all services",
                    "Complimentary consultations",
                    "Access to exclusive treatments"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center p-4 border border-zinc-200 bg-zinc-50">
                      <div className="w-8 h-8 bg-black text-white flex items-center justify-center mr-4">
                        <FaRegSmile size={16} />
                      </div>
                      <span className="font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <Link to="/memberships">
                  <button className="relative overflow-hidden bg-black text-white px-10 py-4 font-medium group border border-black hover:border-zinc-600 transition-all duration-300">
                    <span className="relative z-10">JOIN MEMBERSHIP</span>
                  </button>
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Testimonials - Minimal Design */}
      <div className="bg-zinc-50 py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className={`text-center mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center justify-center mb-6">
              <div className="h-px w-16 bg-zinc-400 mr-4"></div>
              <span className="text-sm tracking-[0.3em] text-zinc-600 uppercase">Testimonials</span>
              <div className="h-px w-16 bg-zinc-400 ml-4"></div>
            </div>
            <h2 className="text-3xl font-light">Client <span className="font-bold">Experiences</span></h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "The attention to detail is unmatched. My haircut was exactly what I wanted and lasted longer than expected.",
                author: "Michael R."
              },
              {
                quote: "The barbers truly understand men's hair. Great atmosphere, excellent service, and reasonable prices.",
                author: "James T."
              },
              {
                quote: "The beard trim and lineup was perfect. It's refreshing to find barbers who really know what they're doing.",
                author: "William K."
              }
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className={`bg-white p-8 border border-zinc-200 group hover:border-zinc-400 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${400 + index * 200}ms` }}
              >
                <div className="flex items-start mb-6">
                  <p className="text-lg italic text-zinc-700 leading-relaxed">"{testimonial.quote}"</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="font-bold text-black">— {testimonial.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA - Clean Design */}
      <div className="bg-black text-white py-24">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center justify-center mb-8">
              <span className="text-sm tracking-[0.3em] text-zinc-400 uppercase">Ready?</span>
            </div>
            
            <h2 className="text-4xl font-light mb-6">
              Experience the <span className="font-bold">Difference</span>
            </h2>
            <p className="text-xl text-zinc-300 mb-12 leading-relaxed">
              Don't wait to elevate your style. Schedule your appointment and discover what precision craftsmanship feels like.
            </p>
            
            <Link to="/schedule">
              <button className="relative overflow-hidden bg-white text-black px-12 py-4 font-medium group hover:bg-zinc-100 transition-all duration-300 mr-6">
                <span className="relative z-10">BOOK NOW</span>
              </button>
            </Link>
            
            <Link to="/location" className="text-zinc-400 hover:text-white transition-colors duration-300 text-sm tracking-wide">
              CONTACT US
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;