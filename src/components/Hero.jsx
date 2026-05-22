import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-24">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-cyan-400 mb-4">
            Cyber Security Undergraduate
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Sethum <span className="text-cyan-400">Perera</span>
          </h1>

          <p className="mt-6 text-gray-300 leading-8 text-lg">
            Undergraduate specializing in Cyber Security,
            Data Analytics, and Software Engineering.
            National-level athlete representing Sri Lanka
            in international badminton championships.
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">
            <a
              href="/resume.pdf"
              target="_blank"
              className="bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
            >
              View Resume
            </a>

            <a
              href="https://www.linkedin.com/in/sethum-perera-a5a0a43a6/"
              target="_blank"
              className="border border-cyan-400 px-6 py-3 rounded-xl hover:bg-cyan-400 hover:text-black transition"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-400 blur-3xl opacity-20 rounded-full"></div>

            <img
              src="/profile.png"
              alt="profile"
              className="relative w-[280px] md:w-[400px] rounded-3xl border border-cyan-400 glow"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;