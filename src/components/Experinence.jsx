import { motion } from "framer-motion";

const experiences = [
  {
    company: "Learning & Development",
    role: "Machine Learning Fundamentals",
    period: "2024 - Present",
    status: "In Progress",
    tech: ["Python", "Scikit-Learn", "TensorFlow", "Data Analysis"],
    points: [
      "Completed comprehensive ML algorithms course covering supervised and unsupervised learning.",
      "Practiced data preprocessing, feature engineering, and model evaluation techniques.",
      "Built classification and regression models with real-world datasets.",
      "Developed strong foundation in statistics and mathematical concepts for ML."
    ],
  },
  {
    company: "Projects & Achievements",
    role: "AI & Deep Learning Explorer",
    period: "2024 - Present",
    status: "Active Development",
    tech: ["Deep Learning", "LangChain", "RAG", "Neural Networks"],
    points: [
      "Built CNN models for image classification achieving good accuracy on benchmark datasets.",
      "Created RAG-based chatbot systems integrating LLMs with retrieval mechanisms.",
      "Completed multiple end-to-end ML projects from problem definition to deployment.",
      "Actively contributing to personal GitHub portfolio with well-documented code."
    ],
  },
  {
    company: "Core Competencies",
    role: "Technical Skills & Growth",
    period: "2024 - 2025",
    status: "Mastering",
    tech: ["Python", "AI/ML", "Web Dev", "Database Design"],
    points: [
      "Expert in Python programming with focus on data science and AI applications.",
      "Strong understanding of machine learning workflows and best practices.",
      "Hands-on experience with popular ML frameworks and libraries.",
      "Committed to continuous learning and staying updated with latest AI/ML trends."
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 sm:py-24 md:py-32 bg-[#0a0a0b] overflow-x-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-pink-400/5 via-purple-400/5 to-transparent blur-[120px] -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-20 border-l-4 border-pink-400 pl-6"
        >
          <h2 className="text-sm font-mono text-pink-400 tracking-widest uppercase mb-2">// Learning_Journey.exe</h2>
          <h3 className="text-4xl font-black text-white uppercase tracking-tight">Academic <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Timeline</span></h3>
        </motion.div>

        {/* Experience List */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative grid md:grid-cols-[1fr_3fr] gap-8 p-8 rounded-2xl bg-gradient-to-r from-pink-400/5 to-purple-400/5 border border-pink-300/20 hover:border-pink-400/50 transition-all duration-500 hover:shadow-lg hover:shadow-pink-400/10"
            >
              {/* Left Column: Period & Status */}
              <div className="flex flex-col justify-between">
                <div>
                  <p className="text-pink-400 font-mono text-sm">{exp.period}</p>
                  <div className="mt-4 flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-pink-400 animate-pulse' : 'bg-gray-500'}`} />
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-tighter">{exp.status}</span>
                  </div>
                </div>
                
                {/* Tech Chips */}
                <div className="hidden md:flex flex-wrap gap-2 mt-6">
                  {exp.tech.map(t => (
                    <span key={t} className="px-2 py-1 text-[10px] bg-gradient-to-r from-pink-400/10 to-purple-400/10 border border-pink-300/30 text-pink-200 rounded uppercase font-mono hover:border-pink-400/60 transition-colors">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Content */}
              <div>
                <h4 className="text-2xl font-bold text-white group-hover:text-pink-400 transition-colors">
                  {exp.role}
                </h4>
                <p className="text-white/60 font-medium mb-6 italic">{exp.company}</p>
                
                <ul className="space-y-4">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex gap-4 text-gray-400 text-sm md:text-base leading-relaxed">
                      <span className="text-pink-400 font-mono mt-1">0{i+1}</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}