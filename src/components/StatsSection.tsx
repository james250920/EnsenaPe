const StatsSection: React.FC = () => {
  return (
    <section id="estadisticas" className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white bg-opacity-10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-white bg-opacity-10 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-white bg-opacity-5 rounded-full blur-lg"></div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Nuestra Comunidad en 
            <span className="text-primary-200">Números</span>
          </h2>
          <p className="text-lg md:text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
            Miles de estudiantes ya confían en EnseñaPe para transformar su experiencia educativa
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Stat 1 */}
          <div className="text-center group animate-slide-up">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 card-hover border border-white border-opacity-20">
              <div className="mb-4">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 counter" data-target="15000">
                15,000+
              </h3>
              <p className="text-primary-100 font-medium">
                Estudiantes Registrados
              </p>
              <div className="mt-4 text-sm text-primary-200">
                Y creciendo cada día
              </div>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="text-center group animate-slide-up" style={{animationDelay: '0.1s'}}>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 card-hover border border-white border-opacity-20">
              <div className="mb-4">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 counter" data-target="200">
                200+
              </h3>
              <p className="text-primary-100 font-medium">
                Universidades
              </p>
              <div className="mt-4 text-sm text-primary-200">
                En todo el país
              </div>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="text-center group animate-slide-up" style={{animationDelay: '0.2s'}}>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 card-hover border border-white border-opacity-20">
              <div className="mb-4">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 counter" data-target="50000">
                50,000+
              </h3>
              <p className="text-primary-100 font-medium">
                Clases Realizadas
              </p>
              <div className="mt-4 text-sm text-primary-200">
                Con éxito comprobado
              </div>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="text-center group animate-slide-up" style={{animationDelay: '0.3s'}}>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 card-hover border border-white border-opacity-20">
              <div className="mb-4">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
                4.8/5
              </h3>
              <p className="text-primary-100 font-medium">
                Calificación Promedio
              </p>
              <div className="mt-4 text-sm text-primary-200">
                Satisfacción garantizada
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-primary-100 mb-6 text-lg">
            ¿Listo para ser parte de nuestra comunidad?
          </p>
          <button className="bg-white text-primary-600 font-semibold py-4 px-8 rounded-lg hover:bg-primary-50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
            Únete Ahora
            <svg className="w-5 h-5 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
