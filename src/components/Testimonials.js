import React, { useState, useEffect, useRef } from 'react';

const TestimonialCard = ({ testimonial, isActive, index }) => {
  return (
    <div className={`flex-shrink-0 w-full transition-all duration-700 ${isActive ? 'opacity-100 scale-100' : 'opacity-50 scale-95'}`}>
      <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 mx-4 relative overflow-hidden">
        {/* Quote Icon */}
        <div className="absolute top-6 right-6 text-6xl text-blue-100 font-serif">&ldquo;</div>
        
        {/* Content */}
        <div className="relative z-10">
          {/* Rating Stars */}
          <div className="flex gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
              </svg>
            ))}
          </div>
          
          {/* Quote */}
          <p className="text-xl text-gray-700 leading-relaxed mb-8 italic">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
          
          {/* Author */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <img 
                src={testimonial.imageUrl} 
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover border-4 border-blue-100"
                loading="lazy"
              />
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
              <p className="text-gray-600">{testimonial.title}</p>
              <p className="text-sm text-blue-600 font-medium">{testimonial.company}</p>
            </div>
          </div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute bottom-0 right-0 w-32 h-32 opacity-5">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="40" fill="currentColor" className="text-blue-500"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const sectionRef = useRef(null);
  const intervalRef = useRef(null);

  const testimonials = [
    {
      name: "Sarah Thompson",
      title: "CEO & Founder",
      company: "RetailTech Solutions",
      quote: "Maximus delivered an incredible mobile app that transformed our customer engagement. Downloads increased by 300% in the first month, and our sales grew by 150%. The app's intuitive design and smooth performance exceeded all expectations.",
      imageUrl: "https://images.unsplash.com/photo-1494790108755-2616b332c96b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 5
    },
    {
      name: "David Rodriguez",
      title: "Founder & CTO",
      company: "TechForward Inc.",
      quote: "Our new website created by Maximus is absolutely stunning and performs flawlessly. It's modern, fast, and perfectly represents our brand. We've seen a 200% increase in lead generation since the launch. Outstanding work!",
      imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 5
    },
    {
      name: "Emily Chen",
      title: "Operations Director",
      company: "Global Logistics Pro",
      quote: "The desktop application Maximus built for our inventory management revolutionized our operations. It's powerful, user-friendly, and has reduced our processing time by 60%. The team understood our needs perfectly.",
      imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 5
    },
    {
      name: "Michael Johnson",
      title: "Managing Partner",
      company: "CloudVenture Solutions",
      quote: "The SaaS platform developed by Maximus has been a game-changer for our business. It's scalable, secure, and our customers love it. We've gained 500+ new subscribers in just 3 months. Professional and results-driven team.",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 5
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isAutoPlay) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlay, testimonials.length]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section ref={sectionRef} id="testimonials" className="py-24 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full -translate-x-1/2 opacity-30 animate-float"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-tl from-indigo-200 to-pink-200 rounded-full translate-x-1/2 opacity-30 animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 font-medium mb-4">
            ⭐ Client Success Stories
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            What Our <span className="gradient-text-primary">Clients</span> Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say about their transformation journey.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative reveal">
          {/* Main Carousel */}
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                testimonial={testimonial}
                isActive={index === currentIndex}
                index={index}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300 flex items-center justify-center group"
          >
            <svg className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300 flex items-center justify-center group"
          >
            <svg className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mt-8 reveal">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-blue-600 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-20 reveal">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">10+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-indigo-600 mb-2">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
