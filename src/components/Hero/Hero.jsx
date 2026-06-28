import { FiArrowRight } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/Hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-extrabold text-white md:text-6xl">
            Discover Amazing Products
          </h1>

          <p className="mb-8 text-lg text-gray-200 md:text-xl">
            Browse high-quality products powered by FakeStore API. Find
            everything you need with our modern and intuitive explorer.
          </p>

          <button className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700">
            Browse Products
            <FiArrowRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;