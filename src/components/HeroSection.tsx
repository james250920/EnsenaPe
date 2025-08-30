const HeroSection: React.FC = () => {
  return (
    <section id="inicio" className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 section-padding overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-soft"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-soft" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-20 left-20 w-16 h-16 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-soft" style={{animationDelay: '2s'}}></div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Hero Content */}
          <div className="lg:w-1/2 lg:pr-12 text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 mb-6 leading-tight">
              Conecta con 
              <span className="gradient-text block">estudiantes universitarios</span>
            </h1>
            <p className="text-lg md:text-xl text-secondary-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Enseña lo que sabes mejor y aprende de tus compañeros universitarios. Una plataforma segura donde el conocimiento se comparte entre estudiantes.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button className="btn-primary text-lg px-8 py-4">
                Comenzar Ahora
                <svg className="w-5 h-5 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Cómo Funciona
                <svg className="w-5 h-5 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.5a1.5 1.5 0 011.5 1.5V12h-3V9z"></path>
                </svg>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-sm text-secondary-500">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-primary-500 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-secondary-500 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-primary-400 rounded-full border-2 border-white"></div>
                </div>
                <span className="font-medium">+1,000 estudiantes</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <span className="font-medium">4.9/5 rating</span>
              </div>
            </div>
          </div>

          {/* Hero Image/Illustration */}
          <div className="lg:w-1/2 mt-12 lg:mt-0 animate-slide-up">
            <div className="relative">
              {/* Placeholder for hero image - you can replace with actual image */}
              <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-secondary-900">Matemáticas Avanzadas</h3>
                        <p className="text-sm text-secondary-500">María estudiante de Ingeniería</p>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex justify-between text-sm text-secondary-600 mb-2">
                        <span>Progreso del curso</span>
                        <span>75%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-primary-500 h-2 rounded-full" style={{width: '75%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating cards */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-lg border border-gray-100 animate-bounce-soft">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-secondary-700">En línea</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg border border-gray-100 animate-bounce-soft" style={{animationDelay: '1s'}}>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-sm font-medium text-secondary-700">+50 Me gusta</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
