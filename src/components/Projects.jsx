import { motion } from "framer-motion";
import { ExternalLink, Github, Cpu, Globe } from "lucide-react"; // Assuming you use lucide-react

const projects = [
  {
    title: "Machine Learning Models (Prediction & Classification)",
    category: "Machine Learning",
    description: "Built simple machine learning models for prediction and classification tasks using basic algorithms. Worked on data preprocessing and understanding model performance.",
    tech: ["Scikit-Learn", "Pandas", "NumPy", "Python"],
    features: ["Data preprocessing techniques", "Model performance evaluation", "Classification algorithms", "Prediction models"],
    link: "#",
    github: "https://github.com/damini-tomer",
    image: "/project-ml.jpg"
  },
  {
    title: "Deep Learning Projects",
    category: "Deep Learning",
    description: "Worked on basic deep learning projects including image classification using CNN, as well as simple ANN and RNN models. Gained understanding of training process and performance evaluation.",
    tech: ["TensorFlow", "Keras", "PyTorch", "CNN", "RNN"],
    features: ["Image classification using CNN", "Artificial Neural Networks", "Recurrent Neural Networks", "Model training and evaluation"],
    github: "https://github.com/damini-tomer",
  },
  {
    title: "LangChain & RAG Projects",
    category: "Generative AI",
    description: "Built basic projects using LangChain and RAG such as simple chatbot, PDF-based question answering, and Wikipedia search. Understood how retrieval and LLMs work together in these pipelines.",
    tech: ["LangChain", "RAG", "Python", "LLMs"],
    features: ["Simple chatbot implementation", "PDF-based question answering", "Wikipedia search integration", "LLM retrieval pipelines"],
    github: "https://github.com/damini-tomer",
  }
];

export default function ProjectSection() {
  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 bg-[#0a0a0b] px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-6 md:gap-4 mb-12">
          <div className="w-full">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4 italic">/Featured <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Projects</span></h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-400 w-full md:max-w-lg leading-relaxed">
              A selection of AI/ML projects showcasing machine learning, deep learning, and generative AI implementations.
            </p>
          </div>
          <div className="flex gap-4">
             <span className="text-pink-400 font-mono text-xs sm:text-sm animate-pulse">● Projects: Active</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-[#111113] border border-pink-300/20 rounded-2xl overflow-hidden hover:border-pink-400/50 transition-all hover:shadow-lg hover:shadow-pink-400/20"
            >
              <div className="p-6 sm:p-8">
                <div className="flex justify-between items-start mb-4 gap-2">
                  <div className="flex-1 min-w-0">
                    <p className="text-pink-400 font-mono text-xs uppercase tracking-widest mb-1">{project.category}</p>
                    <h3 className="text-lg sm:text-2xl font-bold text-white break-words">{project.title}</h3>
                  </div>
                  <div className="flex gap-3 flex-shrink-0">
                    <a href={project.github} className="text-gray-400 hover:text-white transition-colors">
                      <Github size={18} />
                    </a>
                    <a href={project.link} className="text-gray-400 hover:text-white transition-colors">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="space-y-2 sm:space-y-3 mb-8">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-gray-300">
                      <div className="h-1 w-1 rounded-full bg-pink-400 flex-shrink-0 mt-1" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2 sm:px-3 py-1 bg-gradient-to-r from-pink-400/10 to-purple-400/10 rounded-full text-[9px] sm:text-[10px] font-medium text-pink-300 border border-pink-300/30 whitespace-nowrap hover:border-pink-400/60 transition-colors">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Decorative Background Element */}
              <div className="absolute -bottom-10 -right-10 text-[100px] opacity-[0.02] font-black group-hover:opacity-[0.08] transition-opacity bg-gradient-to-br from-pink-400 to-purple-400 bg-clip-text text-transparent">
                {index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}