import React, { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

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

  const features = [
    {
      icon: '🎯',
      title: 'Strategic Focus',
      description: 'We develop comprehensive strategies tailored to your unique business goals and market position.'
    },
    {
      icon: '💡',
      title: 'Innovation Driven',
      description: 'Our team brings cutting-edge solutions and fresh perspectives to traditional business challenges.'
    },
    {
      icon: '🤝',
      title: 'Partnership Approach',
      description: 'We work alongside you as trusted partners, ensuring sustainable growth and long-term success.'
    },
    {
      icon: '📈',
      title: 'Proven Results',
      description: 'Our track record speaks for itself - measurable improvements and tangible business outcomes.'
    }
  ];

  return (
    <section ref={sectionRef} id="about" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-indigo-100 to-pink-100 rounded-full translate-y-1/2 -translate-x-1/2 opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold mb-6 shadow-lg">
            <span className="text-2xl">✨</span>
            <span className="text-lg">About Our Company</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            We're <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Transforming</span>
            <br />Business Success
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            At Maximus Consultancy Services, we are dedicated to helping businesses achieve their full potential with innovative strategies and expert guidance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className="space-y-8">
            <div className="reveal">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission & Vision
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We combine industry expertise with a deep understanding of your business to drive sustainable growth. Our approach is holistic, innovative, and results-driven.
              </p>
              <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Fast Implementation</h4>
                  <p className="text-gray-600">Quick deployment of strategies with immediate impact</p>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="p-6 bg-white rounded-2xl shadow-lg hover-lift border border-gray-100"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Side */}
          <div className="reveal">
            <div className="relative">
              {/* Main Image */}
              <div 
                ref={imageRef}
                className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105"
              >
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Team collaboration" 
                  className="w-full h-96 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Floating Stats Cards */}
              <div className="absolute -top-8 -right-8 bg-white rounded-2xl p-4 shadow-xl animate-float">
                <div className="text-2xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-4 shadow-xl animate-float" style={{animationDelay: '1s'}}>
                <div className="text-2xl font-bold text-green-600">98%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 reveal">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
            <span>Ready to Transform Your Business?</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
