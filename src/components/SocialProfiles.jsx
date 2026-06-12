import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Terminal, ExternalLink, Download, FileText } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    handle: "@DaminiTomer",
    icon: <Github className="w-6 h-6" />,
    link: "https://github.com/Damini-Tomer",
    color: "hover:text-white",
    description: "Source code for LLM agents & ML pipelines."
  },
  {
    name: "LinkedIn",
    handle: "Damini Tomer",
    icon: <Linkedin className="w-6 h-6" />,
    link: "https://www.linkedin.com/in/damini-tomer-473aab31b",
    color: "hover:text-[#0077b5]",
    description: "Professional updates and industry networking."
  },
  {
    name: "Email",
    handle: "daminitomer@23gmail.com",
    icon: <Mail className="w-6 h-6" />,
    link: "mailto:daminitomer@23gmail.com",
    color: "hover:text-pink-400",
    description: "Direct line for collaboration & inquiries."
  }
];

export default function SocialSection() {
  return (
    <section id="contact" className="py-20 sm:py-24 md:py-28 bg-[#0a0a0b] relative overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Connect</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Based in <span className="text-white">Ghaziabad, India</span>. 
              I am always open to discussing scalable AI architectures, 
              Generative AI research, or production-grade ML systems.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-pink-400/10 to-purple-400/10 border border-pink-300/30 w-fit">
                <div className="p-3 bg-pink-400/20 rounded-xl text-pink-400">
                  <Terminal size={24} />
                </div>
                <div>
                  <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">Current Status</p>
                  <p className="text-white font-medium text-sm">Available for Learning & Projects</p>
                </div>
              </div>

              {/* ENHANCED RESUME DOWNLOAD BUTTON */}
              <motion.a
                href="/Damini_Tomar_Resume.pdf"
                download="Damini_Tomer_AI_ML_Student.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-pink-400/10 to-purple-400/10 border border-pink-400/40 rounded-2xl overflow-hidden transition-all duration-300 hover:border-pink-400/80 hover:bg-pink-400/20 hover:shadow-lg hover:shadow-pink-400/20"
              >
                {/* Shimmer Effect */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-pink-400/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                <div className="relative z-10 flex items-center gap-3 text-pink-400">
                  <FileText size={20} className="group-hover:rotate-12 transition-transform" />
                  <div className="flex flex-col items-start">
                    <span className="text-[10px] font-mono uppercase tracking-tighter opacity-60">Technical_Resume</span>
                    <span className="text-xs font-bold uppercase tracking-widest">Download CV</span>
                  </div>
                  <Download size={16} className="ml-2 group-hover:translate-y-1 transition-transform" />
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Side: Social Cards */}
          <div className="grid gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                className="group flex items-center justify-between p-6 rounded-2xl bg-[#111113] border border-pink-300/20 hover:border-pink-400/50 transition-all"
              >
                <div className="flex items-center gap-6">
                  <div className={`text-gray-400 transition-colors duration-300 ${social.color}`}>
                    {social.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-bold group-hover:text-pink-400 transition-colors">
                      {social.name}
                    </h3>
                    <p className="text-sm text-gray-500 font-mono">{social.handle}</p>
                  </div>
                </div>
                <ExternalLink size={18} className="text-gray-600 group-hover:text-white transition-colors" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-pink-400/5 to-purple-400/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}