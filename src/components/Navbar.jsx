import logo from "../../public/images/logo.png";

const Navbar = () => {
  return (
    <nav className="font-serif absolute w-full top-[14px] flex justify-between items-center px-10 py-6 z-20">
      <div className="text-white font-bold text-xl relative left-[63px]">
        <img src={logo} alt="hotel logo" className="h-[62px] w-[93px]" />
      </div>
      <ul className="flex space-x-6 text-white relative">
        <li>HOME</li>
        <li>ABOUT</li>
        <li>ROOMS</li>
        <li>OFFER</li>
        <li>GALLERY</li>
        <li>CONTACT</li>
      </ul>
      <button className="bg-[#D3AC6F] text-white px-4 py-2 rounded-md relative right-[63px] ">
        Booking Online
      </button>
    </nav>
  );
};

export default Navbar;
