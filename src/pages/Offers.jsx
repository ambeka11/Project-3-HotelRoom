import image2 from "../../public/images/img2.png";

const Offers = () => {
  return (
    <section className="mt-32">
      <div className="w-11/12 max-w-7xl mx-auto text-white">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="w-full h-full">
            <img
              src={image2}
              alt="offer bed image"
              className="w-full h-[90%] object-cover"
            />
          </div>

          <div>
            <h3 className="uppercase text-[24px] tracking-widest text-white flex items-center mb-2">
              Featured Offer
              <span className="ml-2 w-[6.8rem] h-[1px] bg-[#D3AC6F] inline-block"></span>
              <span className="ml-1 text-xs text-[#D3AC6F]">◆</span>
            </h3>
            <h2 className="text-[34px] font-serif mb-4">Luxury Bed Room</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="flex gap-24 mt-6 mb-6">
              <div className="border-r pr-8 border-gray-500">
                <p className="text-[#C19D68] text-[32px] mb-1 pr-8 tracking-wide">
                  25 <span className="text-[#C19D68] text-[32px] ">%</span>
                  <span className="text-[22px] "> Discount</span>
                </p>
                <p className="uppercase text-white tracking-wider">
                  Stay 6 Month Or <br /> More.
                </p>
              </div>
              <div>
                <p className="text-[#D3AC6F] text-[32px] mb-1 tracking-wide">
                  25 <span className="text-[#C19D68] text-[32px] ">%</span>
                  <span className="text-[22px] "> Discount</span>
                </p>
                <p className="uppercase text-white tracking-wider">
                  Stay 3 Month Or <br /> More.
                </p>
              </div>
            </div>

            <button className="bg-[#D3AC6F] text-white px-6 py-1 rounded-md font-serif hover:bg-[#c49950] transition">
              Book Now →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
