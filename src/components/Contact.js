import React, { useState, useEffect, useRef } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState('');
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    alert('🎉 Message sent! We will get back to you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: '📞',
      title: 'Phone',
      details: '8884441906',
      subtitle: 'Mon-Fri from 9am to 6pm'
    },
    {
      icon: '📧',
      title: 'Email',
      details: '8884441906@gmail.com',
      subtitle: 'Online support'
    },
    {
      icon: '📍',
      title: 'Office',
      details: 'Incubation Centre',
      subtitle: 'Guru Nanak Dev Engineering College, Bidar'
    },
    {
      icon: '⏰',
      title: 'Response Time',
      details: 'Within 24 Hours',
      subtitle: 'We are quick to respond'
    }
  ];

  const services = [
    'Mobile App Development',
    'Website Development',
    'Desktop Applications',
    'SaaS Products',
    'Custom Development',
    'Other'
  ];

  return (
    <section ref={sectionRef} id="contact" className="py-24 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-200 to-blue-200 rounded-full translate-x-1/2 -translate-y-1/2 opacity-30 animate-float"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-pink-200 to-indigo-200 rounded-full -translate-x-1/2 translate-y-1/2 opacity-30 animate-float" style={{animationDelay: '3s'}}></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 font-medium mb-4">
            📨 Get In Touch
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Let's <span className="gradient-text-primary">Start</span> Your
            <br />Transformation Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to take your business to the next level? Contact us today for a free consultation and discover how we can help you succeed.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="reveal">
            <div className="bg-white rounded-3xl p-8 shadow-2xl relative overflow-hidden">
              {/* Form Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                <svg viewBox="0 0 100 100" className="w-full h-full text-blue-500">
                  <circle cx="50" cy="50" r="40" fill="currentColor"/>
                </svg>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Send us a message</h3>
                <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you as soon as possible.</p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField('')}
                        required
                        className={`w-full px-4 py-3 rounded-2xl border-2 transition-all duration-300 bg-gray-50 focus:bg-white focus:outline-none ${
                          focusedField === 'name' ? 'border-blue-500 shadow-lg' : 'border-gray-200 hover:border-gray-300'
                        }`}
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="relative">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField('')}
                        required
                        className={`w-full px-4 py-3 rounded-2xl border-2 transition-all duration-300 bg-gray-50 focus:bg-white focus:outline-none ${
                          focusedField === 'email' ? 'border-blue-500 shadow-lg' : 'border-gray-200 hover:border-gray-300'
                        }`}
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  {/* Phone & Service Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField('')}
                        className={`w-full px-4 py-3 rounded-2xl border-2 transition-all duration-300 bg-gray-50 focus:bg-white focus:outline-none ${
                          focusedField === 'phone' ? 'border-blue-500 shadow-lg' : 'border-gray-200 hover:border-gray-300'
                        }`}
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div className="relative">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Service Interested In
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('service')}
                        onBlur={() => setFocusedField('')}
                        className={`w-full px-4 py-3 rounded-2xl border-2 transition-all duration-300 bg-gray-50 focus:bg-white focus:outline-none appearance-none cursor-pointer ${
                          focusedField === 'service' ? 'border-blue-500 shadow-lg' : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <option value="">Select a service...</option>
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField('')}
                      required
                      rows="5"
                      className={`w-full px-4 py-3 rounded-2xl border-2 transition-all duration-300 bg-gray-50 focus:bg-white focus:outline-none resize-none ${
                        focusedField === 'message' ? 'border-blue-500 shadow-lg' : 'border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder="Tell us about your project and how we can help..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 hover:shadow-xl hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.49 8.49l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.49-8.49l2.83-2.83" />
                        </svg>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="reveal">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Get in touch with us
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We're here to help you transform your business. Reach out to us through any of the following channels and we'll respond quickly.
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <h4 className="font-bold text-gray-900 text-lg mb-1">{info.title}</h4>
                    <p className="text-blue-600 font-semibold mb-1">{info.details}</p>
                    <p className="text-gray-500 text-sm">{info.subtitle}</p>
                  </div>
                ))}
              </div>

              {/* Map Section */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-bold text-gray-900 text-lg mb-4">Our Location</h4>
                <a 
                  href="https://maps.app.goo.gl/5cpTjGjHkv2KmEHEA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center hover:from-blue-200 hover:to-purple-200 transition-all duration-300 group cursor-pointer"
                >
                  <div className="text-center">
                    <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">🌍</div>
                    <p className="text-gray-600 font-semibold group-hover:text-gray-800">View on Google Maps</p>
                    <p className="text-sm text-gray-500 mt-1">Incubation Centre</p>
                    <p className="text-sm text-gray-500">GNDEC Bidar</p>
                    <div className="mt-2 inline-flex items-center text-blue-600 group-hover:text-blue-700">
                      <span className="text-sm font-medium">Get Directions</span>
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
