import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-cyan-400 mb-10"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-[#0f172a] p-8 rounded-3xl border border-cyan-500/20"
        >
          <p className="text-gray-300 leading-9 text-lg">
            I am an undergraduate pursuing BSc (Hons) in Information
            Technology specializing in Cyber Security at SLIIT and
            BSc (Hons) Industrial Statistics & Mathematical Finance
            at the University of Colombo.
            <br /><br />
            I have strong interests in Cyber Security, Data Analytics,
            and Problem Solving with hands-on experience in
            Spring Boot development, Machine Learning,
            REST API development, and statistical modeling.
            <br /><br />
            Beyond academics, I represented Sri Lanka in multiple
            international badminton tournaments including
            the World Junior Championship in Spain and
            Asian Junior Championship in Myanmar.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;