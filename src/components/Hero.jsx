import bg from "../../public/images/bg.png";
const Hero = () => {
  return (
    <section
      className="font-serif h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <p className="text-lg font-serif pb-6">Welcome To The Hotel</p>
        <h1 className="text-5xl md:text-7xl font-serif leading-tight tracking-wide">
          <span>Explore A Luxury</span>
          <br />
          <span className="block mt-5">Experience</span>
        </h1>

        <button className="mt-10 bg-[#D3AC6F] px-6 py-2 rounded-md">
          Explore More
        </button>
      </div>
    </section>
  );
};

export default Hero;
