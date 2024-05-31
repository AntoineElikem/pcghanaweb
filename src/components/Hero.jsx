import heroImage from "../assets/hero1.jpg";

const Hero = () => {
  return (
    <div className="w-full h-screen">
      <img
        className="top-0 left-0 w-full h-screen md:object-cover object-cover object-right-top md:object-right"
        src={heroImage}
      />
      <div className="absolute top-0 left-0 w-full h-screen bg-black/70 md:bg-black/50"></div>
      <div className="absolute top-0  w-full h-full flex flex-col justify-center text-white">
        <div className="md:left-[10%] max-w-[500px] m-auto absolute p-4">
          <p>Latest News</p>
          <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl">
            ePharmacies Commenced
          </h1>
          <p className="drop-shadow-2xl py-2 text-x mb-10">
            The Pharmacy Council is pleased to announce to all stakeholders that
            the Council will soon be deploying the National Electronic…
          </p>
          <button className="bg-[#173B6B] text-white hover:bg-blue-600">
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
