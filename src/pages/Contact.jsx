import { FiPhone, FiMapPin, FiMail } from "react-icons/fi";

const ContactUs = () => {
  return (
    <section className="mt-22  py-20">
      <div className="w-11/12 bg-[#E6E6E6] max-w-7xl mx-auto grid md:grid-cols-2">
        {/* Left Section */}
        <div className="bg-[#E6E6E6] px-8 py-12">
          <h3 className="uppercase text-[16px] text-black font-medium mb-2 flex items-center gap-3">
            Contact Us
            <span className="w-12 h-[1px] bg-[#CBA864]"></span>
            <span className="w-2 h-2 bg-[#CBA864] rotate-45"></span>
          </h3>
          <h2 className="text-[26px] font-serif text-[#CBA864] uppercase mb-6">
            Connect With Us
          </h2>
          <p className="text-[15px] text-black leading-relaxed mb-8 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit,
          </p>

          <div className="space-y-8">
            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="bg-[#CBA864] p-2 rounded-full text-white text-lg">
                <FiPhone size={20} />
              </div>
              <div>
                <p className="text-sm text-black font-medium">Call Us</p>
                <p className="text-sm text-black">977-9876543210</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4 border-t border-[#CBA864] pt-6">
              <div className="bg-[#CBA864] p-2 rounded-full text-white text-lg">
                <FiMapPin size={20} />
              </div>
              <div>
                <p className="text-sm text-black font-medium">Address</p>
                <p className="text-sm text-black">New Baneshwor, Kathmandu</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 border-t border-[#CBA864] pt-6">
              <div className="bg-[#CBA864] p-2 rounded-full text-white text-lg">
                <FiMail size={20} />
              </div>
              <div>
                <p className="text-sm text-black font-medium">Sent mail on</p>
                <p className="text-sm text-black">example123@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="bg-[#111] mt-10 mb-10 mr-10 px-8 py-12 text-white">
          <h2 className="text-[26px] font-serif uppercase text-center mb-10">
            Get In Touch
          </h2>

          <form className="space-y-6 w-full">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-transparent border border-gray-600 p-3 text-white placeholder:text-gray-400 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent border border-gray-600 p-3 text-white placeholder:text-gray-400 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-transparent border border-gray-600 p-3 text-white placeholder:text-gray-400 focus:outline-none"
            />
            <textarea
              placeholder="Write a message here"
              className="w-full bg-transparent border border-gray-600 p-3 text-white placeholder:text-gray-400 h-32 resize-none focus:outline-none"
            ></textarea>

            <button
              type="submit"
              className="bg-[#CBA864] text-white px-6 py-3 w-full hover:bg-[#b89056] transition"
            >
              Sent Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
