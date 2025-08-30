const HowItWorksSection: React.FC = () => {
  return (
    <section id="como-funciona" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
            ¿Cómo funciona 
            <span className="gradient-text"> EnseñaPe</span>?
          </h2>
          <p className="text-lg md:text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Una plataforma diseñada para conectar estudiantes universitarios de manera segura y eficiente
          </p>
        </div>
        
        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Step 1 */}
          <div className="group relative animate-slide-up">
            <div className="bg-white rounded-2xl p-8 shadow-lg card-hover text-center relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary-100 rounded-full -mr-10 -mt-10 opacity-50"></div>
              
              {/* Step Number */}
              <div className="absolute top-4 left-4 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                1
              </div>
              
              {/* Icon */}
              <div className="mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </div>
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-secondary-900 mb-4">
                Registro Verificado
              </h3>
              <p className="text-secondary-600 leading-relaxed">
                Regístrate con tu correo universitario oficial. Solo estudiantes verificados pueden acceder a la plataforma.
              </p>
              
              {/* Decorative line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-primary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="group relative animate-slide-up" style={{animationDelay: '0.2s'}}>
            <div className="bg-white rounded-2xl p-8 shadow-lg card-hover text-center relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-purple-100 rounded-full -mr-10 -mt-10 opacity-50"></div>
              
              {/* Step Number */}
              <div className="absolute top-4 left-4 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                2
              </div>
              
              {/* Icon */}
              <div className="mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </div>
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-secondary-900 mb-4">
                Sistema de Matching
              </h3>
              <p className="text-secondary-600 leading-relaxed">
                Encuentra estudiantes compatibles para enseñar o aprender. Swipe derecho para conectar.
              </p>
              
              {/* Decorative line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="group relative animate-slide-up" style={{animationDelay: '0.4s'}}>
            <div className="bg-white rounded-2xl p-8 shadow-lg card-hover text-center relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-green-100 rounded-full -mr-10 -mt-10 opacity-50"></div>
              
              {/* Step Number */}
              <div className="absolute top-4 left-4 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                3
              </div>
              
              {/* Icon */}
              <div className="mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                  </svg>
                </div>
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-secondary-900 mb-4">
                Aprende y Enseña
              </h3>
              <p className="text-secondary-600 leading-relaxed">
                Chatea, coordina clases y comparte conocimiento con otros estudiantes de tu universidad.
              </p>
              
              {/* Decorative line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          </div>
        </div>

        {/* Connection Lines for Desktop */}
        <div className="hidden md:block relative mt-8">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-20">
            <svg width="600" height="100" viewBox="0 0 600 100" className="text-primary-300">
              <path
                d="M100 50 Q300 20 500 50"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
                className="animate-pulse"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
