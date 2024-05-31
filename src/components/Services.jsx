import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import stats1 from "../assets/stats1.png";
import stats2 from "../assets/stats2.png";
import stats3 from "../assets/stats3.png";
import stats4 from "../assets/stats4.png";

const Services = () => {
  return (
    <div className="bg-[#112C50] text-white py-16 px-4">
      <div className="md:max-w-[35%] m-auto text-center mb-20">
        <p className="uppercase mb-5 text-sm">Our Services & Data</p>
        <h1 className="text-3xl md:text-4xl font-bold">
          General Statistics and Data for Research or Business
        </h1>
      </div>
      <div className="grid gap-8 md:grid-cols-3 max-w-[80%] m-auto mb-20">
        <div className="bg-[#173B6B] p-6 rounded-lg text-center relative">
          <img
            className="mx-auto mb-4 w-24 h-24 rounded-full object-cover -mt-12"
            src={service1}
            alt="Pharmacy Registers"
          />
          <h2 className="text-xl font-semibold mt-12">Pharmacy Registers</h2>
          <p className="text-sm opacity-70 mt-5">
            The Pharmacy Council maintains the registers of all pharmaceutical
            practitioners and facilities where pharmaceutical services are
            offered.
          </p>
        </div>
        <div className="bg-[#173B6B] p-6 rounded-lg text-center relative">
          <img
            className="mx-auto mb-4 w-24 h-24 rounded-full object-cover -mt-12"
            src={service2}
            alt="Stakeholder Statistics"
          />
          <h2 className="text-xl font-semibold mt-12">
            Stakeholder Statistics
          </h2>
          <p className="text-sm opacity-70 mt-5">
            The Pharmacy Council maintains the registers of all pharmaceutical
            practitioners and facilities where pharmaceutical services are
            offered.
          </p>
        </div>
        <div className="bg-[#173B6B] p-6 rounded-lg text-center relative">
          <img
            className="mx-auto mb-4 w-24 h-24 rounded-full object-cover -mt-12"
            src={service3}
            alt="Gazette Publications"
          />
          <h2 className="text-xl font-semibold mt-12">Gazette Publications</h2>
          <p className="text-sm opacity-70 mt-5">
            The gazette of pharmacies (Manufacturing, Wholesale, and Retail) is
            published yearly and is available to research and business
            institutions upon request.
          </p>
        </div>
      </div>
      <div className="bg-[#173B6B] p-6  rounded-lg mt-8 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-20 text-center mb-10">
          <div className="relative">
            <img
              className="mx-auto mb-4 w-16 h-16 object-cover absolute -top-12 left-1/2 transform -translate-x-1/2"
              src={stats1}
              alt="Pharmacists"
            />
            <h3 className="text-2xl font-bold mt-8">Pharmacists</h3>
            <p className="text-xl opacity-70">6490</p>
          </div>
          <div className="relative">
            <img
              className="mx-auto mb-4 w-16 h-16 object-cover absolute -top-12 left-1/2 transform -translate-x-1/2"
              src={stats2}
              alt="Pharmacy Technicians"
            />
            <h3 className="text-2xl font-bold mt-8">Pharmacy Technicians</h3>
            <p className="text-xl opacity-70">1497</p>
          </div>
          <div className="relative">
            <img
              className="mx-auto mb-4 w-16 h-16 object-cover absolute -top-12 left-1/2 transform -translate-x-1/2"
              src={stats3}
              alt="Pharmacies"
            />
            <h3 className="text-2xl font-bold mt-8">Pharmacies</h3>
            <p className="text-xl opacity-70">4980</p>
          </div>
          <div className="relative">
            <img
              className="mx-auto mb-4 w-16 h-16 object-cover absolute -top-12 left-1/2 transform -translate-x-1/2"
              src={stats4}
              alt="OTCMS"
            />
            <h3 className="text-2xl font-bold mt-8">OTCMS</h3>
            <p className="text-xl opacity-70">21581</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <button className="bg-[#173B6B] text-white py-2 px-6 rounded-full hover:bg-blue-600">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default Services;
