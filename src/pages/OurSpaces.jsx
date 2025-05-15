import image6 from "../../public/images/img6.png";
import image7 from "../../public/images/img7.png";
import image8 from "../../public/images/img8.png";

const OurSpaces = () => {
  return (
    <section className="mt-32">
      <div className="w-11/12 max-w-7xl mx-auto text-white">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="uppercase text-[24px] tracking-widest text-white flex items-center mb-2">
              Our spaces
              <span className="ml-2 w-[6.8rem] h-[1px] bg-[#D3AC6F] inline-block"></span>
              <span className="ml-1 text-xs text-[#D3AC6F]">◆</span>
            </h3>
            <h2 className=" uppercase text-[34px] font-serif mb-4">
              checkout our hotel gallery
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="flex gap-8">
              <p className="hover:underline hover:decoration-[#D3AC6F] underline-offset-4 cursor-pointer">
                Dining & Resturant
              </p>
              <p className="hover:underline hover:decoration-[#D3AC6F] underline-offset-4 cursor-pointer">
                Parking
              </p>
              <p className="hover:underline hover:decoration-[#D3AC6F] underline-offset-4 cursor-pointer">
                View
              </p>
              <p className="hover:underline hover:decoration-[#D3AC6F] underline-offset-4 cursor-pointer">
                Bedrooms
              </p>
              <p className="hover:underline hover:decoration-[#D3AC6F] underline-offset-4 cursor-pointer">
                SPA
              </p>
              <p className="hover:underline hover:decoration-[#D3AC6F] underline-offset-4 cursor-pointer">
                Event Spaces
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative group">
              <img
                src={image6}
                alt="Couple Bed Room"
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="relative group">
              <img
                src={image7}
                alt="Family Bed Room"
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="relative group">
              <img
                src={image8}
                alt="Luxury Bed Room"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
        <div className="mb-10 items-center mt-6">dot dot dot dot dot</div>
      </div>
    </section>
  );
};

export default OurSpaces;
