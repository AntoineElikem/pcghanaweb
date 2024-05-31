import { HiMail, HiClock, HiOutlineCalendar } from "react-icons/hi";

const QuickContact = () => {
  return (
    <div className="max-w-full bg-[#112C50] px-10 py-12 flex flex-wrap justify-between text-white/70">
      <p className="text-sm md:text-lg font-bold  flex items-center">
        <HiMail className="mr-2" /> info@pcnghana.com
      </p>
      <p className="text-sm md:text-lg font-bold  flex items-center">
        <HiClock className="mr-2" /> Monday – Friday 8 AM – 5 PM
      </p>
      <p className="text-sm md:text-lg font-bold  flex items-center">
        <HiOutlineCalendar className="mr-2" /> Office closed on Public Holidays
      </p>
    </div>
  );
};

export default QuickContact;
