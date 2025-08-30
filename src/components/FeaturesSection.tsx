const FeaturesSection: React.FC = () => {
  return (
    <section id="caracteristicas" className="section-padding">
      <div className="container-custom">
        {/* Teaching Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          {/* Content */}
          <div className="order-2 lg:order-1 animate-fade-in">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
                Para Tutores
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
                Para Estudiantes que Quieren 
                <span className="gradient-text block">Enseñar</span>
              </h2>
            </div>
            
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-500 transition-colors duration-300">
                  <svg className="w-5 h-5 text-green-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-1">Gana dinero compartiendo tus conocimientos</h3>
                  <p className="text-secondary-600">Monetiza tu experiencia académica y ayuda a otros estudiantes</p>
                </div>
              </li>
              
              <li className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-500 transition-colors duration-300">
                  <svg className="w-5 h-5 text-green-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-1">Define tus propias tarifas por hora</h3>
                  <p className="text-secondary-600">Establece precios justos según tu experiencia y demanda</p>
                </div>
              </li>
              
              <li className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-500 transition-colors duration-300">
                  <svg className="w-5 h-5 text-green-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-1">Construye tu reputación como tutor</h3>
                  <p className="text-secondary-600">Recibe reseñas y calificaciones que validen tu expertise</p>
                </div>
              </li>
              
              <li className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-500 transition-colors duration-300">
                  <svg className="w-5 h-5 text-green-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-1">Horarios flexibles que se adaptan a ti</h3>
                  <p className="text-secondary-600">Enseña cuando puedas, sin comprometer tus estudios</p>
                </div>
              </li>
            </ul>

            <div className="mt-8">
              <button className="btn-primary">
                Convertirme en Tutor
                <svg className="w-5 h-5 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 animate-slide-up">
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-100 to-green-100 rounded-3xl p-8 shadow-xl">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-secondary-900">Carlos - Tutor de Física</h3>
                      <p className="text-sm text-secondary-500">Universidad Nacional</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-sm text-secondary-600">Ganancias este mes</span>
                      <span className="font-bold text-green-600">S/. 850</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-secondary-600">Estudiantes activos</span>
                      <span className="font-bold text-primary-600">12</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-secondary-600">Rating promedio</span>
                      <div className="flex items-center gap-1">
                        <span className="font-bold text-yellow-500">4.9</span>
                        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl p-3 shadow-lg animate-bounce-soft">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-secondary-700">+15 solicitudes</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="animate-slide-up">
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-primary-100 rounded-3xl p-8 shadow-xl">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-primary-600 rounded-full flex items-center justify-center">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-secondary-900">Ana - Estudiante de Derecho</h3>
                      <p className="text-sm text-secondary-500">PUCP</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex justify-between text-sm text-secondary-600 mb-2">
                        <span>Matemáticas Financieras</span>
                        <span>8/10 sesiones</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-primary-500 h-2 rounded-full" style={{width: '80%'}}></div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-sm text-secondary-600">Próxima clase</span>
                      <span className="font-bold text-primary-600">Hoy 4:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-3 shadow-lg animate-bounce-soft" style={{animationDelay: '1s'}}>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-sm font-medium text-secondary-700">Nuevo mensaje</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-fade-in">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                Para Estudiantes
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
                Para Estudiantes que Quieren 
                <span className="gradient-text block">Aprender</span>
              </h2>
            </div>
            
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
                  <svg className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-1">Encuentra tutores en tu universidad</h3>
                  <p className="text-secondary-600">Conecta con estudiantes de tu misma institución</p>
                </div>
              </li>
              
              <li className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
                  <svg className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-1">Aprende con explicaciones prácticas</h3>
                  <p className="text-secondary-600">Recibe enseñanza personalizada y adaptada a tu ritmo</p>
                </div>
              </li>
              
              <li className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
                  <svg className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-1">Tarifas accesibles para estudiantes</h3>
                  <p className="text-secondary-600">Precios justos pensados para el presupuesto universitario</p>
                </div>
              </li>
              
              <li className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
                  <svg className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-1">Reseñas y calificaciones verificadas</h3>
                  <p className="text-secondary-600">Elige tutores con base en experiencias reales de otros estudiantes</p>
                </div>
              </li>
            </ul>

            <div className="mt-8">
              <button className="btn-primary">
                Encontrar un Tutor
                <svg className="w-5 h-5 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
