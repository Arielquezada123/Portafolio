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
  Zap,
  ChevronRight
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
    enlace: "/mi-agua.html",
    imagen: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800"
  },
  {
    titulo: "Arquitectura de Red",
    descripcion: "Diseño y despliegue de infraestructura de red bajo estándares industriales de alta disponibilidad.",
    tecnologias: ["Cisco", "CCNA", "Routing", "Switching", "VPN"],
    logro: "Segmentación lógica de tráfico mediante VLANs y configuración de alta disponibilidad (HA) en Capa 3.",
    enlace: "#",
    imagen: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800"
  }
];

const mis_habilidades = [
  { nombre: "Data Architecture", herramientas: ["SQL", "MariaDB", "MongoDB", "PostgreSQL"], icono: <Database className="w-6 h-6" /> },
  { nombre: "DevOps & Cloud", herramientas: ["Docker", "AWS (EC2/S3)", "Red Hat", "Ubuntu"], icono: <Server className="w-6 h-6" /> },
  { nombre: "Data Analytics & IA", herramientas: ["Power BI", "Matplotlib", "R", "IA Apps"], icono: <BarChart3 className="w-6 h-6" /> },
  { nombre: "Backend & IoT", herramientas: ["Python", "Django", "Arduino/ESP32", "MQTT"], icono: <BrainCircuit className="w-6 h-6" /> }
];

function App() {
  const heroRef = useRef<HTMLElement>(null);
  const sobreMiRef = useRef<HTMLElement>(null);
  const stackRef = useRef<HTMLElement>(null);
  const proyectosRef = useRef<HTMLElement>(null);

  useEffect(() => {
    ScrollTrigger.refresh();

    // Hero Animation
    const ctx = gsap.context(() => {
      gsap.from(".hero-text", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power4.out",
        delay: 0.2
      });
      
      gsap.from(".globe", {
        scale: 0.8,
        opacity: 0,
        duration: 2,
        ease: "power2.out",
        delay: 0.5
      });
    }, heroRef);

    // Fade up sections
    [sobreMiRef, stackRef, proyectosRef].forEach(ref => {
      if (ref.current) {
        gsap.fromTo(ref.current, 
          { opacity: 0, y: 60 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });

    // Stagger Cards
    gsap.fromTo(".stack-card", 
      { y: 30, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "back.out(1.5)",
        scrollTrigger: { trigger: ".stack-grid", start: "top 85%" }
      }
    );

    gsap.fromTo(".ofrezco-card", 
      { x: 30, opacity: 0 },
      {
        x: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out",
        scrollTrigger: { trigger: ".ofrezco-grid", start: "top 85%" }
      }
    );

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-[#030712] text-slate-200 font-sans font-light selection:bg-blue-500/30 overflow-hidden relative">
      
      {/* GLOWING AMBIENT BACKGROUNDS */}
      <div className="fixed top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none mix-blend-screen globe"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-cyan-600/10 blur-[150px] pointer-events-none mix-blend-screen globe"></div>
      
      {/* NAVBAR */}
      <nav className="fixed w-full border-b border-white/5 bg-[#030712]/60 backdrop-blur-2xl z-50 transition-all shadow-lg shadow-black/20">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <span className="text-2xl font-bold tracking-tighter text-white">
            AQ<span className="text-blue-500">.</span>dev
          </span>
          <div className="hidden md:flex gap-10 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
            <a href="#experiencia" className="hover:text-blue-400 transition-colors">Experiencia</a>
            <a href="#stack" className="hover:text-blue-400 transition-colors">Stack</a>
            <a href="#proyectos" className="hover:text-blue-400 transition-colors">Proyectos</a>
          </div>
          <a href="mailto:arielalejandroquezadapacheco@gmail.com" 
             className="px-6 py-2.5 rounded-full bg-blue-600/10 text-blue-400 border border-blue-500/20 hover:bg-blue-600 hover:text-white transition-all font-medium text-sm flex items-center gap-2 group">
            Contactar <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-12 relative z-10">
        
        {/* HERO SECTION */}
        <section ref={heroRef} className="min-h-[85vh] flex flex-col justify-center items-start mb-20">
          <div className="hero-text inline-flex items-center gap-3 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 mb-8 backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
            </span>
            <span className="text-[11px] font-bold text-blue-400 uppercase tracking-[0.15em]">Ingeniero Informatico & Tecnico de Redes</span>
          </div>
          
          <h1 className="hero-text text-7xl md:text-8xl lg:text-[7.5rem] font-black text-white leading-[1.05] tracking-tighter mb-8">
            Diseñando <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 animate-gradient">
              sistemas resilientes
            </span>
          </h1>
          
          <p className="hero-text text-xl md:text-2xl text-slate-400 leading-relaxed mb-12 max-w-3xl font-light">
            Especializado en cerrar la brecha entre el <span className="text-white font-medium">hardware en el borde (IoT)</span>, 
            la <span className="text-white font-medium">arquitectura de software</span> y el despliegue en la <span className="text-white font-medium">nube</span>.
          </p>
          
          <div className="hero-text flex flex-wrap gap-5">
            <a href="#proyectos" className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full hover:scale-105 transition-all font-semibold shadow-[0_0_30px_rgba(255,255,255,0.15)] group">
              Explorar Proyectos <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="https://github.com/Arielquezada123" target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white px-8 py-4 rounded-full transition-all font-medium backdrop-blur-md">
              <Github size={18} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/ariel-quezada-2815aa290" target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-blue-600/10 border border-blue-500/20 hover:bg-blue-600/20 text-blue-400 px-8 py-4 rounded-full transition-all font-medium backdrop-blur-md">
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </section>

        {/* SOBRE MI - INGENIERÍA DE CICLO COMPLETO */}
        <section ref={sobreMiRef} id="experiencia" className="mb-40 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full"></div>
              <div className="relative glass-card p-10 md:p-14 rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01]">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">El Ciclo Completo</h2>
                <div className="space-y-6 text-slate-400 text-lg leading-relaxed font-light">
                  <p>
                    Mi carrera inició fundamentada en <strong className="text-blue-400 font-medium">Conectividad y Redes</strong>. Esta base "bottom-up" asegura que cada línea de código que escribo no ignore la red, latencia o seguridad en la que se ejecuta.
                  </p>
                  <p>
                    Como <strong className="text-blue-400 font-medium">Ingeniero en Informática (INACAP)</strong>, escalo soluciones desde el sensor (ESP32/IoT) hasta su visualización y persistencia (Django/DB) en entornos productivos orquestados con <span className="text-emerald-400">Docker</span> y <span className="text-yellow-400">AWS</span>.
                  </p>
                </div>
              </div>
            </div>

            <div className="ofrezco-grid flex flex-col gap-6">
              <div className="ofrezco-card group relative p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors overflow-hidden backdrop-blur-sm">
                <div className="absolute -right-10 -top-10 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Settings strokeWidth={1} className="w-64 h-64 text-blue-500" />
                </div>
                <Zap className="text-blue-400 w-8 h-8 mb-6" />
                <h3 className="text-2xl text-white font-bold mb-3 tracking-tight">Backend & Lógica Core</h3>
                <p className="text-slate-400 font-light">
                  Implementación de servicios RESTful robustos mediante <span className="text-slate-200 font-medium">Python y Django</span>, diseñando bases de datos escalables.
                </p>
              </div>

              <div className="ofrezco-card group relative p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors overflow-hidden backdrop-blur-sm">
                <div className="absolute -right-10 -top-10 opacity-5 group-hover:opacity-10 transition-opacity">
                  <ShieldCheck strokeWidth={1} className="w-64 h-64 text-emerald-500" />
                </div>
                <Server className="text-emerald-400 w-8 h-8 mb-6" />
                <h3 className="text-2xl text-white font-bold mb-3 tracking-tight">Cloud & DevOps</h3>
                <p className="text-slate-400 font-light">
                  Containerización con <span className="text-slate-200 font-medium">Docker</span> y despliegue continuo en instancias <span className="text-slate-200 font-medium">AWS EC2/S3</span> asegurando alta disponibilidad.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* STACK TÉCNICO */}
        <section ref={stackRef} id="stack" className="mb-40 pt-20">
          <div className="text-center mb-20 md:mb-24">
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-blue-400 mb-4">Arsenal Tecnológico</h2>
            <h3 className="text-5xl font-bold text-white tracking-tight">Especialización & Ecosistema</h3>
          </div>
          
          <div className="stack-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-0">
            {mis_habilidades.map((item, i) => (
              <div key={i} className="stack-card p-8 rounded-[2rem] border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/10 transition-all duration-300 group">
                <div className="h-16 w-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-8 border border-blue-500/20 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all">
                  <div className="text-blue-400">{item.icono}</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-6 group-hover:text-blue-300 transition-colors">{item.nombre}</h3>
                <ul className="space-y-4">
                  {item.herramientas.map((h, j) => (
                    <li key={j} className="text-[15px] text-slate-400 font-light flex items-center gap-3">
                      <div className="h-1.5 w-1.5 bg-blue-500 rounded-full group-hover:shadow-[0_0_10px_rgba(59,130,246,0.8)] transition-all"></div> {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* PROYECTOS */}
        <section ref={proyectosRef} id="proyectos" className="mb-20 pt-20">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-cyan-400 mb-4">Caso de Estudio</h2>
              <h3 className="text-5xl font-bold text-white tracking-tight">Proyectos Destacados</h3>
            </div>
            <p className="text-slate-500 font-mono text-sm uppercase tracking-widest hidden md:block">
            </p>
          </div>

          <div className="flex flex-col gap-12">
            {mis_proyectos.map((proy, i) => (
              <div key={i} className="group relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-white/[0.02] backdrop-blur-xl hover:border-white/20 transition-all duration-500 flex flex-col lg:flex-row">
                {/* Image Section */}
                <div className="w-full lg:w-5/12 overflow-hidden relative min-h-[300px] lg:min-h-full">
                  <div className="absolute inset-0 bg-blue-500/10 z-10 mix-blend-overlay group-hover:bg-transparent transition-colors duration-500"></div>
                  <img src={proy.imagen} alt={proy.titulo} className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
                </div>
                
                {/* Content Section */}
                <div className="w-full lg:w-7/12 p-10 md:p-14 lg:p-16 flex flex-col justify-between relative z-20">
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{proy.titulo}</h3>
                      {proy.enlace && proy.enlace !== "#" && (
                        <a href={proy.enlace} className="p-3 bg-white/5 border border-white/10 rounded-full text-white hover:bg-white hover:text-black hover:scale-110 transition-all">
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                    <p className="text-slate-400 mb-10 text-lg leading-relaxed font-light">
                      {proy.descripcion}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-10">
                      {proy.tecnologias.map((t, j) => (
                        <span key={j} className="text-xs font-medium uppercase tracking-widest border border-white/10 px-4 py-1.5 rounded-full text-slate-300 bg-white/5 backdrop-blur-sm">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Resolution box */}
                  <div className="bg-gradient-to-r from-blue-900/40 to-cyan-900/10 p-6 rounded-2xl border-l-2 border-blue-500 mt-4 md:mt-0">
                    <span className="text-blue-400 font-bold tracking-widest uppercase text-xs block mb-3">Valor Entregado</span>
                    <p className="text-sm md:text-base text-slate-300 font-light">
                      {proy.logro}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="relative border-t border-white/5 bg-white/[0.01] pt-24 pb-12 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-blue-900/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl font-bold text-white mb-6">¿Construimos algo juntos?</h2>
          <p className="text-slate-400 font-light mb-10 max-w-lg">
            Si tienes un desafío de infraestructura, desarrollo de software o IoT, estaré encantado de escucharte.
          </p>
          <a href="mailto:arielalejandroquezadapacheco@gmail.com" className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-10 py-4 rounded-full transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] mb-20 flex items-center gap-3">
            <Mail size={20} /> Ponernos en contacto
          </a>
          
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-white/5">
            <p className="text-slate-500 text-sm font-light">
              &copy; {new Date().getFullYear()} <span className="text-white font-medium">Ariel Quezada</span>. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <a href="https://github.com/Arielquezada123" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/ariel-quezada-2815aa290" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-blue-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;