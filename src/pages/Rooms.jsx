import image4 from "../../public/images/img4.png";
import image5 from "../../public/images/img5.png";
import image6 from "../../public/images/img6.png";
import image7 from "../../public/images/img7.png";
import image8 from "../../public/images/img8.png";

const Rooms = () => {
  return (
    <section className="mt-32">
      <div className="w-11/12 max-w-7xl mx-auto text-white">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="uppercase text-[24px] tracking-widest text-white flex items-center mb-2">
              Our Choice
              <span className="ml-2 w-[6.8rem] h-[1px] bg-[#D3AC6F] inline-block"></span>
              <span className="ml-1 text-xs text-[#D3AC6F]">◆</span>
            </h3>
            <h2 className="text-[34px] font-serif mb-4">
              The Best Rooms Just For You!!
            </h2>
          </div>
          <div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>

        <div className="mt-10 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative group">
              <img
                src={image4}
                alt="Single Bed Room"
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-4 left-4 text-white text-sm md:text-base font-serif">
                Single Bed Room
              </div>
            </div>

            <div className="relative group">
              <img
                src={image5}
                alt="Double Bed Room"
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-4 left-4 text-white text-sm md:text-base font-serif">
                Double Bed Room
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative group">
              <img
                src={image6}
                alt="Couple Bed Room"
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-4 left-4 text-white text-sm md:text-base font-serif">
                Couple Bed Room
              </div>
            </div>

            <div className="relative group">
              <img
                src={image7}
                alt="Family Bed Room"
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-4 left-4 text-white text-sm md:text-base font-serif">
                Family Bed Room
              </div>
            </div>

            <div className="relative group">
              <img
                src={image8}
                alt="Luxury Bed Room"
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-4 left-4 text-white text-sm md:text-base font-serif">
                Luxury Bed Room
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rooms;
