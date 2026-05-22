function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-cyan-400 mb-10">
          Sports Achievements
        </h2>

        <div className="space-y-6">
          {[
            "Silver Medalist - Under 21 South Asian Games",
            "World Junior Championship Player & Team Captain - Spain",
            "Asian Junior Championship Player - Myanmar",
            "National Sports Team Champions",
            "U15/U17/U19 Boys Singles Ranking No.1",
            "SLIIT University Colours - 2024",
          ].map((item) => (
            <div
              key={item}
              className="bg-[#0f172a] p-6 rounded-2xl border border-cyan-500/20"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;