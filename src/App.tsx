import { useEffect, useRef } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Database, 
  Server, 
  BarChart3, 
  BrainCircuit, 
  Settings, 
  ShieldCheck, 
  Zap
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const mis_proyectos = [
  {
    titulo: "Mi Agua",
    descripcion: "Sistema IoT integral para el monitoreo de agua potable con telemetría en tiempo real.",
    tecnologias: ["Python", "Django", "Arduino", "ESP32", "Docker", "AWS EC2"],
    logro: "Implementación de arquitectura de contenedores para procesamiento de datos masivos provenientes de sensores.",
    enlace: "/mi-agua.html"
  },
  {
    titulo: "Arquitectura de Red Corporativa",
    descripcion: "Diseño y despliegue de infraestructura de red bajo estándares industriales.",
    tecnologias: ["Cisco", "CCNA", "Routing & Switching", "VPN"],
    logro: "Segmentación lógica de tráfico mediante VLANs y configuración de alta disponibilidad en Capa 3.",
     
  }
];

const mis_habilidades = [
  { 
    nombre: "Data Architecture", 
    herramientas: ["SQL", "MariaDB", "MongoDB", "PostgreSQL"], 
    icono: <Database className="w-5 h-5" /> 
  },
  { 
    nombre: "DevOps & Cloud", 
    herramientas: ["Docker", "AWS (EC2/S3)", "Red Hat", "Ubuntu"], 
    icono: <Server className="w-5 h-5" /> 
  },
  { 
    nombre: "Data Analytics & IA", 
    herramientas: ["Power BI", "Matplotlib", "R", "IA Apps"], 
    icono: <BarChart3 className="w-5 h-5" /> 
  },
  { 
    nombre: "Backend & IoT", 
    herramientas: ["Python", "Django", "Arduino/ESP32", "MQTT"], 
    icono: <BrainCircuit className="w-5 h-5" /> 
  }
];

function App() {
  const sobreMiRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Aseguramos que ScrollTrigger se refresque al cargar
    ScrollTrigger.refresh();

    // Animación de entrada para la sección Sobre Mí
    if (sobreMiRef.current) {
      gsap.fromTo(sobreMiRef.current, 
        { opacity: 0, y: 50 }, // Estado inicial
        { 
          opacity: 1, 
          y: 0, 
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sobreMiRef.current,
            start: "top 85%", // Se activa un poco antes para asegurar visibilidad
            toggleActions: "play none none none"
          }
        }
      );
    }

    // Animación para las tarjetas de "Qué ofrezco"
    gsap.fromTo(".ofrezco-card", 
      { scale: 0.9, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".ofrezco-grid",
          start: "top 90%",
        }
      }
    );
  }, []);


  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-blue-500/30">
      
      <nav className="border-b border-slate-800/50 bg-[#020617]/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-mono font-bold text-blue-500 tracking-tighter">AQ.dev</span>
          <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest">
            <a href="#stack" className="hover:text-blue-400 transition-colors">Stack</a>
            <a href="#proyectos" className="hover:text-blue-400 transition-colors">Proyectos</a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-12">
        
        {/* HERO SECTION */}
        <section className="mb-32 pt-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">Disponible para desafíos complejos</span>
            </div>
            <h1 className="text-7xl md:text-8xl font-extrabold text-white mb-8 tracking-tighter">
              Ariel <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Quezada</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl">
              Ingeniero en Informática con base sólida en redes. Especializado en construir el puente entre el hardware, el código y la infraestructura cloud.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://github.com/Arielquezada123" target="_blank" className="flex items-center gap-2 bg-slate-800/50 hover:bg-slate-700 px-6 py-3 rounded-2xl transition-all font-bold border border-slate-700/50">
                <Github size={18} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/ariel-quezada-2815aa290" target="_blank" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-2xl transition-all font-bold shadow-xl shadow-blue-900/40">
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* STACK TÉCNICO */}
        <section id="stack" className="mb-40">
          <h2 className="text-3xl font-bold text-white mb-16">Ecosistema Tecnológico</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mis_habilidades.map((item, i) => (
              <div key={i} className="p-8 bg-slate-900/50 border border-slate-800 rounded-3xl hover:bg-slate-800/50 transition-all group border-b-4 border-b-transparent hover:border-b-blue-500">
                <div className="text-blue-500 mb-6 group-hover:rotate-12 transition-transform">{item.icono}</div>
                <h3 className="text-lg font-bold text-white mb-4">{item.nombre}</h3>
                <ul className="space-y-3">
                  {item.herramientas.map((h, j) => (
                    <li key={j} className="text-sm text-slate-500 flex items-center gap-2 font-medium">
                      <div className="h-1 w-1 bg-blue-500 rounded-full"></div> {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section ref={sobreMiRef} className="mb-40 relative opacity-0"> {/* Añadimos opacity-0 inicial para evitar parpadeo */}
          <div className="absolute -left-20 top-0 w-64 h-64 bg-blue-600/10 blur-[120px] rounded-full"></div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <h2 className="text-4xl font-extrabold text-white mb-8 tracking-tight">Sobre mí</h2>
              <div className="space-y-6 text-slate-400 leading-relaxed text-lg text-justify">
                <p>
                  Originario de una ciudad pequeña en Chile, mi camino técnico comenzó con un título en <span className="text-blue-400 font-semibold">Conectividad y Redes</span>. Esta base me otorgó una visión profunda de las capas de infraestructura antes de especializarme en el desarrollo de software.
                </p>
                <p>
                  Tras graduarme como <span className="text-blue-400 font-semibold">Ingeniero en Informática en INACAP</span>, me convertí en un colaborador crítico. No me conformo con soluciones estándar; busco desafíos que pongan a prueba la eficiencia y la arquitectura de los sistemas que diseño.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <h2 className="text-3xl font-bold text-white mb-12 text-center lg:text-left tracking-tight italic text-blue-500/50 uppercase text-sm">Ingeniería de Ciclo Completo</h2>
              <div className="ofrezco-grid grid grid-cols-1 md:grid-cols-2 gap-4">
                
                <div className="ofrezco-card p-8 bg-gradient-to-br from-slate-900 to-[#020617] border border-slate-800 rounded-3xl relative overflow-hidden group opacity-0">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Settings className="w-20 h-20" />
                  </div>
                  <h3 className="text-white font-bold mb-4 flex items-center gap-3">
                    <Zap className="text-yellow-500 w-5 h-5" /> Desarrollo & Backend
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Creación de lógica robusta y eficiente utilizando <span className="text-slate-200">Python y Django</span>, asegurando que el corazón de la aplicación sea escalable y seguro.
                  </p>
                </div>

                <div className="ofrezco-card p-8 bg-gradient-to-br from-slate-900 to-[#020617] border border-slate-800 rounded-3xl relative overflow-hidden group opacity-0">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <ShieldCheck className="w-20 h-20" />
                  </div>
                  <h3 className="text-white font-bold mb-4 flex items-center gap-3">
                    <Server className="text-blue-500 w-5 h-5" /> Despliegue & Infra
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Especialista en llevar el software a producción mediante <span className="text-slate-200">contenedores Docker</span> y orquestación en la nube de <span className="text-slate-200">AWS</span>.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>

    
        <section id="proyectos">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-4xl font-extrabold text-white tracking-tight">Proyectos Destacados</h2>
            <p className="text-slate-500 font-mono text-sm hidden md:block">/ {mis_proyectos.length} CASOS DE ESTUDIO</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {mis_proyectos.map((proy, i) => (
              <div key={i} className="group bg-slate-900/30 border border-slate-800/50 rounded-[2.5rem] p-12 hover:bg-slate-800/30 transition-all">
                <div className="flex justify-between items-start mb-10">
                  <h3 className="text-3xl font-bold text-white">{proy.titulo}</h3>
                  {proy.enlace && (
                    <a href={proy.enlace} target="_blank" className="p-3 bg-blue-600 rounded-2xl text-white shadow-lg shadow-blue-900/20 hover:bg-blue-500 transition-all">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
                <p className="text-slate-400 mb-10 leading-relaxed text-lg italic">"{proy.descripcion}"</p>
                <div className="flex flex-wrap gap-2 mb-10">
                  {proy.tecnologias.map((t, j) => (
                    <span key={j} className="text-[10px] font-bold uppercase tracking-widest border border-slate-700 px-3 py-1 rounded-lg text-slate-300 bg-slate-800/50">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="bg-blue-500/5 p-6 rounded-2xl border-t border-blue-500/20 shadow-inner">
                  <p className="text-sm text-slate-300">
                    <span className="text-blue-500 font-bold tracking-widest uppercase text-[10px] block mb-2">Resolución del Desafío</span>
                    {proy.logro}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      <footer className="mt-40 border-t border-slate-900 bg-black/40 py-20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="text-white font-bold text-lg mb-2">Ariel Quezada Pacheco</p>
            <p className="text-slate-500 text-sm">Ingeniero en Informática • Talca, Chile</p>
          </div>
          <div className="flex gap-4">
             <a href="mailto:arielalejandroquezadapacheco@gmail.com" className="p-4 bg-slate-900 rounded-2xl hover:bg-slate-800 transition-colors border border-slate-800">
               <Mail size={20} className="text-blue-500" />
             </a>
          </div>
        </div>
      </footer>
    </div>
  );


}

export default App;