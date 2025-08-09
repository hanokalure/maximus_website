import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleGetStarted = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBookConsultation = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24 lg:pt-32">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{animationDelay: '4s'}}></div>
        
        {/* Parallax Background Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.4' fill-rule='nonzero'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Floating Interactive Elements - Hidden on small screens */}
      <div 
        className="absolute top-1/4 left-4 sm:left-10 md:left-20 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl sm:rounded-2xl shadow-lg animate-bounce opacity-60 sm:opacity-80 hidden sm:block"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          animationDelay: '1s'
        }}
      ></div>
      <div 
        className="absolute top-1/3 right-4 sm:right-16 md:right-32 w-6 h-6 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full shadow-lg animate-pulse opacity-60 sm:opacity-80 hidden sm:block"
        style={{
          transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`,
          animationDelay: '2s'
        }}
      ></div>
      <div 
        className="absolute bottom-1/4 left-4 sm:left-16 md:left-32 w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-2xl sm:rounded-3xl shadow-lg animate-float opacity-60 sm:opacity-80 hidden sm:block"
        style={{
          transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
          animationDelay: '3s'
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6 sm:space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/20 glass border border-white/30 backdrop-blur-sm animate-fadeInDown stagger-1">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm sm:text-base text-gray-700 font-medium">🚀 Transform Your Business Today</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight animate-fadeInUp stagger-2">
            <span className="gradient-text-primary">Empowering</span>
            <br />
            <span className="text-gray-800">Your Business to</span>
            <br />
            <span className="gradient-text bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Succeed</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fadeInUp stagger-3 px-4">
            Expert advice and tailored solutions for sustainable growth. We help businesses unlock their potential with innovative strategies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-fadeInUp stagger-4 px-4">
            <button
              onClick={handleGetStarted}
              className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-base sm:text-lg font-semibold rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                Get Started
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button
              onClick={handleBookConsultation}
              className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-300 text-gray-700 text-base sm:text-lg font-semibold rounded-xl sm:rounded-2xl hover:border-blue-500 hover:text-blue-600 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 sm:gap-3 glass"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span className="hidden xs:inline">Book Consultation</span>
              <span className="xs:hidden">Book Now</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-12 sm:mt-16 animate-fadeInUp stagger-5 px-4">
            <div className="text-center glass rounded-xl sm:rounded-2xl p-4 sm:p-6 hover-lift">
              <div className="text-2xl sm:text-3xl font-bold gradient-text-primary">3+</div>
              <div className="text-sm sm:text-base text-gray-600 mt-1 sm:mt-2">Years Experience</div>
            </div>
            <div className="text-center glass rounded-xl sm:rounded-2xl p-4 sm:p-6 hover-lift">
              <div className="text-2xl sm:text-3xl font-bold gradient-text-primary">10+</div>
              <div className="text-sm sm:text-base text-gray-600 mt-1 sm:mt-2">Successful Projects</div>
            </div>
            <div className="text-center glass rounded-xl sm:rounded-2xl p-4 sm:p-6 hover-lift">
              <div className="text-2xl sm:text-3xl font-bold gradient-text-primary">10+</div>
              <div className="text-sm sm:text-base text-gray-600 mt-1 sm:mt-2">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
