import { motion } from "framer-motion";

const highlights = [
  { title: "Machine Learning", desc: "Building prediction & classification models with real-world datasets.", status: "Learning" },
  { title: "Deep Learning", desc: "Exploring CNNs, RNNs for image classification and sequence tasks.", status: "Active" },
  { title: "Generative AI", desc: "Working with LangChain, RAG, and LLM-based applications.", status: "Growing" },
  { title: "Data Analysis", desc: "Extracting insights from data using Python and visualization tools.", status: "Practiced" }
];

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-24 md:py-32 bg-[#0a0a0b] overflow-x-hidden">
      {/* Background AI Mesh */}
      <div className="absolute inset-0 opacity-10" 
           style={{ backgroundImage: `radial-gradient(#FF69B4 0.5px, transparent 0.5px)`, backgroundSize: '24px 24px' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-sm font-mono text-pink-400 tracking-[0.3em] uppercase mb-4">//Profile</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white">
            About <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h3>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: The "Source Code" Bio */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-[#0d0d0e] border border-pink-300/20 rounded-2xl p-8 font-mono text-sm md:text-base leading-relaxed backdrop-blur-sm hover:border-pink-300/40 transition-all">
              <div className="flex gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-pink-400/50" />
                <div className="w-3 h-3 rounded-full bg-purple-400/50" />
                <div className="w-3 h-3 rounded-full bg-pink-300/50" />
              </div>
              
              <p className="text-gray-500 mb-2">/**  Profile **/</p>
              <p className="text-white">
                <span className="text-pink-300">engineer</span> = {"{"}
              </p>
              <div className="pl-6 space-y-2">
                <p className="text-white">name: <span className="text-rose-300">"Damini Tomer"</span>,</p>
                <p className="text-white">education: <span className="text-rose-300">"BCA Student"</span>,</p>
                <p className="text-white">focus: <span className="text-rose-300">"AI/ML/Deep Learning"</span>,</p>
                <p className="text-white">skills: [</p>
                <p className="pl-6 text-rose-300">"Machine Learning", "Data Analysis", "Generative AI", "Python"</p>
                <p className="text-white">],</p>
                <p className="text-gray-400 mt-4 italic">
                  // Passionate about building practical AI solutions <br/>
                  // and combining technical knowledge with business insights.
                </p>
              </div>
              <p className="text-white">{"}"};</p>
            </div>
          </motion.div>

          {/* Right: The High-Tech Bento Stats */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5, borderColor: "rgba(186, 160, 248, 0.5)" }}
                className="p-5 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm relative overflow-hidden group"
              >
                {/* Animated Scanline */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-400/5 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-1000" />
                
                <div className="flex justify-between items-start mb-3">
                  <div className="p-2 bg-pink-400/20 rounded-lg text-pink-400">
                    <div className="w-4 h-4 rounded-full border-2 border-current animate-pulse" />
                  </div>
                  <span className="text-[10px] font-mono text-gray-500 uppercase">{item.status}</span>
                </div>
                <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                <p className="text-gray-400 text-xs leading-tight">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}