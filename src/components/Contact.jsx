import { Mail, Linkedin } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-cyan-400 mb-10">
          Contact
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a
            href="mailto:kohombageperera@gmail.com"
            className="bg-[#0f172a] px-6 py-5 rounded-2xl border border-cyan-500/20 flex items-center gap-3 justify-center hover:border-cyan-400 transition"
          >
            <Mail />
            kohombageperera@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/sethum-perera-a5a0a43a6/"
            target="_blank"
            className="bg-[#0f172a] px-6 py-5 rounded-2xl border border-cyan-500/20 flex items-center gap-3 justify-center hover:border-cyan-400 transition"
          >
            <Linkedin />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;