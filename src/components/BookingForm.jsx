const BookingForm = () => {
  return (
    <div className="absolute bottom-[-3rem] left-1/2 transform -translate-x-1/2 w-11/12 max-w-7xl bg-[#1A1A1A] p-6 grid grid-cols-5 gap-4 rounded-md text-white">
      <div className="bg-[#2C2C2C] p-4 rounded-md">
        <label className="text-sm mb-2 block">Check In</label>
        <input
          type="date"
          className="w-full bg-[#1A1A1A] text-white p-2 rounded-md outline-none cursor-pointer"
        />
      </div>

      <div className="bg-[#2C2C2C] p-4 rounded-md">
        <label className="text-sm mb-2 block">Check Out</label>
        <input
          type="date"
          className="w-full bg-[#1A1A1A] text-white p-2 rounded-md outline-none cursor-pointer"
        />
      </div>

      <div className="bg-[#2C2C2C] p-4 rounded-md">
        <label className="text-sm mb-2 block">Adults</label>
        <select className="w-full bg-[#1A1A1A] text-white p-2 rounded-md outline-none cursor-pointer">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
      </div>

      <div className="bg-[#2C2C2C] p-4 rounded-md">
        <label className="text-sm mb-2 block">Children</label>
        <select className="w-full bg-[#1A1A1A] text-white p-2 rounded-md outline-none cursor-pointer">
          <option>0</option>
          <option>1</option>
          <option>2</option>
        </select>
      </div>

      <div className="bg-[#D3AC6F] p-4 rounded-md flex items-end">
        <button className="w-full bg-[#D3AC6F] text-white py-2 rounded-md h-full cursor-pointer text-xl ">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default BookingForm;
