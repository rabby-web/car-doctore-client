import { FaCalendarAlt, FaQuestion, FaLocationDot } from "react-icons/fa";
const MoreService = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-white bg-black m-5 py-8 px-5 rounded-md flex justify-around">
        <div className="flex justify-center items-center gap-2">
          <div>
            <FaCalendarAlt className="text-2xl" />
          </div>
          <div>
            <h3 className="text-sm">We are open monday-friday</h3>
            <h2 className="text-base font-semibold">7:00 am - 9:00 pm</h2>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <div>
            <FaQuestion className="text-2xl" />
          </div>
          <div>
            <h3 className="text-sm">Have a question?</h3>
            <h2 className="text-base font-semibold">+2546 251 2658</h2>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <div>
            <FaLocationDot className="text-2xl" />
          </div>
          <div>
            <h3 className="text-sm">Need a repair? our address</h3>
            <h2 className="text-base font-semibold">Liza Street, New York</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreService;
