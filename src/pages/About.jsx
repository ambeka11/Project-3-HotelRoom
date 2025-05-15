// AboutUs.jsx
import Image1 from "../../public/images/img1.png";
import Image2 from "../../public/images/img2.png";

const AboutUs = () => {
  return (
    <section className="mt-20 sm:mt-32 px-4 sm:px-0">
      <div className="w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="text-white">
          <h3 className="uppercase text-lg sm:text-[24px] tracking-widest flex items-center mb-2">
            About Us
            <span className="ml-2 w-24 h-[1px] bg-[#D3AC6F] inline-block"></span>
            <span className="ml-1 text-xs text-[#D3AC6F]">◆</span>
          </h3>
          <h2 className="text-2xl sm:text-[34px] font-serif mb-4">
            At Luxury Hotel Of Kathmandu
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4 text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor <br className="hidden sm:block" /> incididunt ut
            labore et dolore magna aliqua. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Temporibus magnam, natus libero fugit
            ipsam, sunt iure cupiditate atque reprehenderit eveniet voluptas id?
            Laboriosam harum placeat adipisci rerum. Cupiditate, ratione minima.
          </p>
          <button className="bg-[#D3AC6F] text-white px-6 py-2 mt-4 rounded-xl hover:bg-[#b89056] transition">
            Read More
          </button>
        </div>
        <div className="relative w-full h-[350px] sm:h-[600px]">
          <img
            src={Image2}
            alt="Hotel interior background"
            className="absolute top-0 right-0 w-[300px] sm:w-[495px] h-[260px] sm:h-[511px] object-cover brightness-75"
          />

          <img
            src={Image1}
            alt="Hotel interior front"
            className="absolute bottom-4 left-0 w-[280px] sm:w-[460px] h-[220px] sm:h-[398px] object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
