import women from "../../public/images/img10.png";
import stars from "../../public/images/stars.png";

const Testemonials = () => {
  return (
    <section className="mt-32">
      <div className="w-11/12 max-w-7xl mx-auto text-white">
        <div className="text-center mb-12">
          <h3 className="uppercase text-[24px] tracking-widest text-white flex items-center justify-center mb-2">
            <span className="text-xs text-[#D3AC6F] mr-1">◆</span>
            <span className="w-[6.8rem] h-[1px] bg-[#D3AC6F] inline-block mr-2"></span>
            Testomonials
            <span className="ml-2 w-[6.8rem] h-[1px] bg-[#D3AC6F] inline-block"></span>
            <span className="ml-1 text-xs text-[#D3AC6F]">◆</span>
          </h3>
          <h2 className="text-[34px] font-serif mb-4">What Our Guests Says</h2>
          <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
            We provide seasonal special discounts for selected rooms. Let us
            know <br /> the room you are interested and let’s make it happen
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src={women}
            alt="Testimonial Woman"
            className="w-[639px] h-[439px] object-cover rounded-md"
          />
          <div className="w-[639px] h-[439px] mt-10">
            <h2 className="text-2xl font-semibold mb-4 mt-10">Akhi Alomgir</h2>
            <p className="text-gray-300 leading-relaxed mb-4 mt-6 w-[95%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae est rem odit facere laboriosam eum illum cupiditate
              voluptatibus harum praesentium, necessitatibus dolore distinctio
              quod tenetur nam eius! Perspiciatis, natus cum. Lorem, ipsum dolor
              sit amet consectetur adipisicing elit. Quae aspernatur eligendi
              harum quibusdam quaerat vel esse, amet eveniet id reprehenderit
              illo iure recusandae exercitationem magnam mollitia totam
              veritatis vitae culpa! Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Nisi minus dolorum itaque illo? Aliquid,
              obcaecati cum! Sit ullam distinctio commodi quam nam quis
              obcaecati quibusdam architecto, dolorem repellendus eaque itaque.
            </p>
            <img src={stars} alt="5 stars" className="mt-4 w-32" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testemonials;
