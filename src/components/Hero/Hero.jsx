import { FiArrowRight } from "react-icons/fi";

const Hero = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
             "url('https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=2070&auto=format&fit=crop')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="max-w-3xl text-center">
          <span className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
            🛍️ Premium Shopping Experience
          </span>

          <h1 className="mt-6 mb-6 text-4xl font-extrabold leading-tight text-white md:text-6xl">
            Discover Amazing <br />
            Products For Everyone
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-200 md:text-xl">
            Explore thousands of premium products with a fast, secure, and
            modern shopping experience powered by FakeStore API.
          </p>

          <button
           className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-600 hover:to-blue-600 px-8 p-4 cursor-pointer text-lg font-semibold text-white shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700">
            Browse Products
            <FiArrowRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;