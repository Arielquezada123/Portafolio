import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Database, 
  Server, 
  Network, 
  Cpu, 
  ChevronRight 
} from 'lucide-react';

// Variables en español para mantener tu estándar de código
const mis_proyectos = [
  {
    titulo: "Watermilimeter",
    descripcion: "Sistema IoT para el monitoreo de agua potable con análisis de datos en tiempo real.",
    tecnologias: ["Python", "Django", "Arduino", "ESP32", "Docker", "AWS EC2"],
    logro: "Optimización de la captura de métricas y despliegue automatizado con contenedores.",
    enlace: "#"
  },
  {
    titulo: "Arquitectura de Red Corporativa",
    descripcion: "Diseño de infraestructura de red segura con segmentación por VLANs.",
    tecnologias: ["Cisco", "CCNA", "Routing", "VPN"],
    logro: "Simulación completa de conectividad empresarial con redundancia en Capa 3.",
    enlace: "#"
  }
];

const mis_habilidades = [
  { nombre: "Backend", herramientas: ["Python", "Django", "PostgreSQL"], icono: <Database className="w-5 h-5" /> },
  { nombre: "DevOps & Cloud", herramientas: ["Docker", "AWS (EC2/S3)", "Red Hat"], icono: <Server className="w-5 h-5" /> },
  { nombre: "Redes", herramientas: ["CCNA", "MQTT", "Conectividad"], icono: <Network className="w-5 h-5" /> },
  { nombre: "Hardware", herramientas: ["Arduino", "ESP32", "Sensores"], icono: <Cpu className="w-5 h-5" /> },
];

function App() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 font-sans">
      
      {/* Barra de Navegación Lateral o Superior Simple */}
      <nav className="border-b border-slate-800 bg-[#0f172a]/80 backdrop-blur-md sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-mono font-bold text-blue-400">AQ.dev</span>
          <div className="flex gap-6 text-sm font-medium">
            <a href="mailto:arielalejandroquezadapacheco@gmail.com" className="hover:text-blue-400 transition-colors">Contacto</a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-12">
        
        {/* Hero Section - Perfil Profesional */}
        <section className="mb-24">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-extrabold text-white mb-6">
              Ariel <span className="text-blue-500">Quezada</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed mb-8">
              Ingeniero en Informática especializado en el desarrollo de sistemas robustos y 
              conectividad de redes. Enfocado en la eficiencia del código y la arquitectura escalable.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://github.com/Arielquezada123" className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg transition-all">
                <Github size={20} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/ariel-quezada-2815aa290" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition-all">
                <Linkedin size={20} /> LinkedIn
              </a>
              <a href="mailto:arielalejandroquezadapacheco@gmail.com" className="flex items-center gap-2 border border-slate-700 hover:bg-slate-800 px-4 py-2 rounded-lg transition-all">
                <Mail size={20} /> arielalejandroquezadapacheco@gmail.com
              </a>
            </div>
          </div>
        </section>

        {/* Habilidades - El "Engine" del Ingeniero */}
        <section className="mb-24">
          <h2 className="text-2xl font-bold text-white mb-10 flex items-center gap-3">
            <div className="h-1 w-12 bg-blue-500 rounded-full"></div>
            Stack Técnico
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mis_habilidades.map((item, i) => (
              <div key={i} className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-2xl">
                <div className="text-blue-400 mb-4">{item.icono}</div>
                <h3 className="text-lg font-bold text-white mb-3">{item.nombre}</h3>
                <ul className="space-y-2">
                  {item.herramientas.map((h, j) => (
                    <li key={j} className="text-sm text-slate-400 flex items-center gap-2">
                      <ChevronRight size={14} className="text-blue-500" /> {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Proyectos - Portafolio de Ingeniería */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-10 flex items-center gap-3">
            <div className="h-1 w-12 bg-blue-500 rounded-full"></div>
            Proyectos Seleccionados
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mis_proyectos.map((proy, i) => (
              <div key={i} className="group relative bg-slate-800/30 border border-slate-700/50 rounded-3xl p-8 hover:bg-slate-800/50 transition-all duration-300">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {proy.titulo}
                  </h3>
                  <a href={proy.enlace} className="text-slate-500 hover:text-white transition-colors">
                    <ExternalLink size={24} />
                  </a>
                </div>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {proy.descripcion}
                </p>
                <div className="mb-6">
                  <p className="text-xs font-mono text-blue-500 uppercase tracking-widest mb-3">Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {proy.tecnologias.map((t, j) => (
                      <span key={j} className="text-xs font-medium bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full border border-blue-500/20">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-[#0f172a] p-4 rounded-xl border-l-4 border-blue-600">
                  <p className="text-sm text-slate-300 italic">
                    <span className="font-bold text-blue-400 not-italic">Desafío:</span> {proy.logro}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      <footer className="border-t border-slate-800 mt-24 py-12 text-center">
        <p className="text-slate-500 text-sm">
          Ariel Alejandro Quezada Pacheco • Talca, Chile • 2026
        </p>
      </footer>
    </div>
  );
}

export default App;