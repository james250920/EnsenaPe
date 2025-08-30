const CallToAction: React.FC = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-secondary-50 via-white to-primary-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-soft"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-soft" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-soft" style={{animationDelay: '2s'}}></div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA Content */}
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-secondary-900 mb-6 leading-tight">
              ¿Listo para comenzar tu 
              <span className="gradient-text block">experiencia de aprendizaje</span>?
            </h2>
            <p className="text-lg md:text-xl text-secondary-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              Únete a la comunidad EnseñaPe y descubre una nueva forma de aprender, enseñar y conectar. 
              <span className="font-semibold text-secondary-700">¡Tu futuro académico te espera!</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 animate-slide-up">
            <button className="group bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 text-white font-bold py-4 px-10 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-lg">
              <span className="flex items-center">
                Registrarse Gratis
                <svg className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </span>
            </button>
            
            <button className="group bg-white text-primary-600 font-bold py-4 px-10 rounded-xl border-2 border-primary-600 hover:bg-primary-50 transition-all duration-300 transform hover:-translate-y-1 text-lg shadow-lg hover:shadow-xl">
              <span className="flex items-center">
                Ver Demo
                <svg className="w-6 h-6 ml-3 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.5a1.5 1.5 0 011.5 1.5V12h-3V9z"></path>
                </svg>
              </span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="font-bold text-secondary-900 mb-2">100% Gratuito</h3>
              <p className="text-secondary-600 text-sm">Sin costo de registro, comienza hoy mismo</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <h3 className="font-bold text-secondary-900 mb-2">Seguro y Verificado</h3>
              <p className="text-secondary-600 text-sm">Solo estudiantes universitarios verificados</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="font-bold text-secondary-900 mb-2">Resultados Rápidos</h3>
              <p className="text-secondary-600 text-sm">Conecta con tutores en menos de 24 horas</p>
            </div>
          </div>

          {/* Bottom Note */}
          <div className="mt-12 pt-8 border-t border-gray-200 animate-fade-in">
            <p className="text-secondary-500 text-sm">
              ¿Tienes preguntas? 
              <a href="#" className="text-primary-600 hover:text-primary-700 font-medium ml-1 transition-colors duration-300">
                Contáctanos aquí
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
