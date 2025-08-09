import React, { useEffect, useRef } from 'react';

const ServiceCard = ({ service, index, onLearnMore }) => {
  return (
    <div 
      className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 reveal"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Card Background with Gradient Overlay */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={service.imageUrl} 
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition-all duration-300"></div>
        
        {/* Floating Icon */}
        <div className="absolute top-6 left-6 w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30">
          <div className="text-2xl">{service.icon}</div>
        </div>
        
        {/* Service Badge */}
        <div className="absolute top-6 right-6 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
          <span className="text-white text-sm font-medium">{service.category}</span>
        </div>
      </div>
      
      {/* Card Content */}
      <div className="p-8">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            {service.title}
          </h3>
          <div className="flex-shrink-0 ml-4">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors">
              <svg className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>
        
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          {service.description}
        </p>
        
        {/* Features List */}
        <ul className="space-y-2 mb-8">
          {service.features?.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-3 text-gray-700">
              <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        
        {/* CTA Button */}
        <button
          onClick={() => onLearnMore(service.title)}
          className="w-full group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 bg-gray-100 text-gray-700 group-hover:text-white py-3 px-6 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center gap-2"
        >
          <span>Learn More</span>
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
      
      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
};

const Services = () => {
  const sectionRef = useRef(null);

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

  const handleLearnMore = (service) => {
    console.log(`Learn more about ${service}`);
  };

  const services = [
    {
      title: "Mobile App Development",
      description: "Create stunning mobile applications for iOS and Android platforms with cutting-edge features and seamless user experience.",
      imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "📱",
      category: "Mobile",
      features: [
        "Cross-Platform Development",
        "Native iOS & Android Apps",
        "App Store Optimization",
        "Push Notifications & Analytics"
      ]
    },
    {
      title: "Website Development",
      description: "Build responsive, fast, and SEO-optimized websites that convert visitors into customers and grow your business online.",
      imageUrl: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "🌐",
      category: "Web",
      features: [
        "Responsive Design",
        "SEO Optimization",
        "E-commerce Integration",
        "CMS Development"
      ]
    },
    {
      title: "Desktop Applications",
      description: "Develop powerful desktop applications for Windows, macOS, and Linux with rich functionality and intuitive interfaces.",
      imageUrl: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "💻",
      category: "Desktop",
      features: [
        "Cross-Platform Compatibility",
        "Rich User Interface",
        "Database Integration",
        "Performance Optimization"
      ]
    },
    {
      title: "SaaS Products",
      description: "Build scalable Software-as-a-Service solutions with cloud infrastructure, subscription management, and multi-tenant architecture.",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "☁️",
      category: "SaaS",
      features: [
        "Cloud-Native Architecture",
        "Subscription Management",
        "Multi-Tenant Support",
        "API Development"
      ]
    }
  ];

  return (
    <section ref={sectionRef} id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-full -translate-y-1/2 -translate-x-1/2 opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-100 to-pink-100 rounded-full translate-y-1/2 translate-x-1/2 opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 reveal">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold mb-6 shadow-lg">
            <span className="text-2xl">🚀</span>
            <span className="text-lg">Our Services</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Expert <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Solutions</span>
            <br />for Your Success
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From strategic planning to operational excellence, we provide end-to-end consulting services that drive measurable results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              onLearnMore={handleLearnMore}
            />
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center reveal">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Let's discuss how our comprehensive consulting services can help you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105">
                Get Free Consultation
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-2xl hover:bg-white hover:text-gray-900 transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
