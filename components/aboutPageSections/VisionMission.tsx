const VisionMission = () => {
  return (
    <section
      id="ourGoals"
      className="bg-[#FDE5B4] p-8 w-full  py-12 px-4"
      data-aos="fade-up"
    >
      <h2 className="text-4xl font-bold text-blue-900 mb-6 " data-aos="fade-up">
        Vision, Mission & Core Principles
      </h2>
      <div className="space-y-10">
        <div className="md:grid md:grid-cols-2">
          <div className="text-black">
            <div className="border-t-6 border-t-blue-900 pt-2 w-17">
              <h3
                className="font-semibold text-2xl mb-2 text-blue-900 "
                data-aos="fade-up"
              >
                Vision
              </h3>
            </div>

            <p className="text-xl" data-aos="fade-up">
              To become Nigeria’s most trusted security provider, driven by
              innovation, integrity, and unmatched professionalism.
            </p>
          </div>
        </div>
        <div className="md:grid md:grid-cols-2">
          <div></div>
          <div className="text-black">
            <div className="border-t-6 border-t-blue-900 pt-2 w-22">
              <h3
                className="font-semibold text-2xl mb-2 text-blue-900 "
                data-aos="fade-up"
              >
                Mission
              </h3>
            </div>
            <p className="text-xl" data-aos="fade-up">
              To safeguard lives, assets, and national interests by delivering
              proactive, technology-driven, and client-centric security
              solutions.
            </p>
          </div>
        </div>
        <div className="md:grid md:grid-cols-2">
          <div className="text-black">
            <div className="border-t-6 border-t-blue-900 pt-2 w-27">
              <h3
                className="font-semibold text-2xl mb-2 text-blue-900 "
                data-aos="fade-up"
              >
                Core Principles
              </h3>
            </div>
            <p className="text-xl" data-aos="fade-up">
              We are guided by the following principles:
            </p>
          </div>
        </div>

        <div className="md:flex md:flex-wrap md:justify-between grid grid-cols-2 mt-6">
          <div
            className="w-40 md:w-60 md:text-xl mb-4 px-8 py-4 bg-blue-400 rounded-4xl"
            data-aos="fade-up"
          >
            <div className="text-3xl mb-2 ">🛡️</div>
            <p className="text-white">
              <strong>Professionalism</strong> – We uphold excellence and
              conduct at all levels.
            </p>
          </div>
          <div
            className="w-40 md:w-60 md:text-xl mb-4 px-8 py-4 bg-blue-900 rounded-4xl"
            data-aos="fade-up"
          >
            <div className="text-3xl mb-2">⚖️</div>
            <p className="text-white">
              <strong>Integrity</strong> – We are honest, transparent, and
              ethically driven.
            </p>
          </div>
          <div
            className="w-40 md:w-60 md:text-xl mb-4 px-8 py-4 bg-blue-600 rounded-4xl"
            data-aos="fade-up"
          >
            <div className="text-3xl mb-2">🤝</div>
            <p className="text-white">
              <strong>Commitment</strong> – Loyalty to the safety of our clients
              is paramount.
            </p>
          </div>
          <div
            className="w-40 md:w-60 md:text-xl mb-4 px-8 py-4 bg-purple-900 rounded-4xl"
            data-aos="fade-up"
          >
            <div className="text-3xl mb-2">🚀</div>
            <p className="text-white">
              <strong>Innovation</strong> – We adopt modern strategies and tools
              for smarter protection.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
