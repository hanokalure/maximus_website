import React, { useEffect, useState } from 'react';

const TeamMembers = () => {
  const [visibleCards, setVisibleCards] = useState([]);

  const teamMembers = [
    {
      id: 1,
      name: 'Kenneth Jason',
      position: 'Co-Founder & Frontend Developer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
      bio: 'Passionate frontend developer and co-founder, creating exceptional user interfaces and driving innovation.',
      skills: ['React', 'JavaScript', 'UI/UX'],
      social: {
        linkedin: '#',
        whatsapp: 'https://wa.me/8884441906',
        github: '#'
      }
    },
    {
      id: 2,
      name: 'Abhishek Patil',
      position: 'Co-Founder, Designer & Frontend Developer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      bio: 'Creative designer and frontend developer, blending aesthetics with functionality to create stunning digital experiences.',
      skills: ['Design', 'Frontend', 'Prototyping'],
      social: {
        linkedin: '#',
        whatsapp: 'https://wa.me/8884441906',
        github: '#'
      }
    },
    {
      id: 3,
      name: 'Arshad Patel',
      position: 'Co-Founder & AI Developer',
      image: '/images/arshad.jpg',
      bio: 'AI specialist and co-founder, leveraging machine learning and artificial intelligence to build intelligent solutions.',
      skills: ['Machine Learning', 'Python', 'AI/ML'],
      social: {
        linkedin: '#',
        whatsapp: 'https://wa.me/8884441906',
        github: '#'
      }
    },
    {
      id: 4,
      name: 'Hanok Alure',
      position: 'Co-Founder & Backend Developer',
      image: '/images/hanok-photo.jpg',
      bio: 'Backend development expert and co-founder, architecting robust server-side solutions and database systems.',
      skills: ['Backend', 'Databases', 'APIs'],
      social: {
        linkedin: '#',
        whatsapp: 'https://wa.me/8884441906',
        github: '#'
      }
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = parseInt(entry.target.dataset.cardId);
            setVisibleCards(prev => [...prev, cardId]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = document.querySelectorAll('.team-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="team" className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20 sm:opacity-30">
        <div className="absolute top-10 left-4 sm:left-10 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-2xl sm:blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-4 sm:right-20 w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-2xl sm:blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full blur-xl sm:blur-2xl animate-pulse-slow"></div>
      </div>


      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold mb-4 sm:mb-6 shadow-lg">
            <span className="text-lg sm:text-2xl">🚀</span>
            <span className="text-sm sm:text-base lg:text-lg">Our Team</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Meet Our <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Amazing</span>
            <br />Team
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            Meet the brilliant minds behind our innovative solutions. Each member brings unique expertise 
            and passion to create extraordinary digital experiences.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              data-card-id={member.id}
              className={`team-card relative group cursor-pointer transform transition-all duration-700 h-full ${
                visibleCards.includes(member.id) 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Card Container */}
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-purple-500/25 transition-all duration-500 animate-on-hover h-full flex flex-col">
                {/* Holographic Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-hologram p-0.5">
                  <div className="w-full h-full bg-white rounded-3xl"></div>
                </div>

                {/* Glitch Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-glitch-overlay pointer-events-none"></div>

                {/* Card Content */}
                <div className="relative z-10 p-4 sm:p-6 lg:p-8">
                  {/* Profile Image */}
                  <div className="relative mb-4 sm:mb-6 mx-auto w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 overflow-hidden rounded-full group-hover:scale-110 transition-transform duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 animate-spin-slow opacity-75"></div>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="relative z-10 w-full h-full object-cover rounded-full border-2 sm:border-4 border-white group-hover:border-purple-400 transition-colors duration-500"
                    />
                    
                    {/* Quantum Field Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 rounded-full opacity-0 group-hover:opacity-100 animate-quantum-shift transition-opacity duration-500"></div>
                  </div>

                  {/* Member Info */}
                  <div className="text-center mb-4 sm:mb-6">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-1 sm:mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 group-hover:bg-clip-text transition-all duration-300">
                      {member.name}
                    </h3>
                    <p className="text-sm sm:text-base lg:text-lg text-purple-600 font-semibold mb-2 sm:mb-4 group-hover:animate-neon-pulse">
                      {member.position}
                    </p>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 px-2">
                      {member.bio}
                    </p>
                  </div>

                  {/* Skills */}
                  <div className="mb-4 sm:mb-6">
                    <div className="flex flex-wrap gap-1 sm:gap-2 justify-center">
                      {member.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 sm:px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-700 rounded-full text-xs font-medium group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 group-hover:text-white transition-all duration-300 animate-morphing-badge"
                          style={{ animationDelay: `${skillIndex * 100}ms` }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-2 sm:space-x-4">
                    {Object.entries(member.social).map(([platform, url], socialIndex) => (
                      <a
                        key={platform}
                        href={url}
                        className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white hover:scale-110 hover:rotate-12 transition-all duration-300 group-hover:animate-liquid-flow"
                        style={{ animationDelay: `${socialIndex * 150}ms` }}
                      >
                        {platform === 'linkedin' && (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        )}
                        {platform === 'whatsapp' && (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                          </svg>
                        )}
                        {platform === 'github' && (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        )}
                      </a>
                    ))}
                  </div>

                  {/* Ripple Effect */}
                  <div className="absolute inset-0 overflow-hidden rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="animate-ripple-effect bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0 h-0 group-hover:w-96 group-hover:h-96 transition-all duration-1000"></div>
                  </div>
                </div>

                {/* Magnetic Field Lines */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-magnetic pointer-events-none">
                  <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-2 left-2 w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent animate-pulse"></div>
                    <div className="absolute top-4 right-2 w-6 h-0.5 bg-gradient-to-l from-purple-400 to-transparent animate-pulse"></div>
                    <div className="absolute bottom-2 left-4 w-10 h-0.5 bg-gradient-to-r from-pink-400 to-transparent animate-pulse"></div>
                    <div className="absolute bottom-4 right-4 w-7 h-0.5 bg-gradient-to-l from-cyan-400 to-transparent animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeamMembers;
