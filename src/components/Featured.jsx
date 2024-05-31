import pcghanaweb1 from "../assets/pcghanaweb1.png";
import pcghanaweb2 from "../assets/pcghanaweb2.png";
import pcghanaweb3 from "../assets/pcghanaweb3.png";
import pcghanaweb4 from "../assets/pcghanaweb4.png";
import pcghanaweb5 from "../assets/pcghanaweb5.png";

const Featured = () => {
  return (
    <div className="md:max-w-[65%] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
      {/* Left Side */}
      <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
        <img
          className="row-span-3 object-cover w-full h-full p-2 rounded-xl"
          src={pcghanaweb1}
          alt="Blog Image 1"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2 rounded-xl"
          src={pcghanaweb2}
          alt="Blog Image 2"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2 rounded-xl"
          src={pcghanaweb3}
          alt="Blog Image 3"
        />
        <img
          className="row-span-3 object-cover w-full h-full p-2 rounded-xl"
          src={pcghanaweb4}
          alt="Blog Image 4"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2 rounded-xl"
          src={pcghanaweb5}
          alt="Blog Image 5"
        />
      </div>
      {/* Right Side */}
      <div className="flex flex-col h-full justify-center">
        <h3 className="text-5xl md:text-6xl font-bold text-[#112C50]">
          Visit Our Blog
        </h3>
        <p className="text-2xl py-6">
          Stay updated with the latest news, insights, and research from the
          world of pharmaceuticals.
        </p>
        <p className="pb-6">
          Learn about new treatments, industry trends, and tips for a healthier
          life from our expert contributors.
        </p>
        <div>
          <button className="border-black mr-4 hover:shadow-xl px-4 py-2">
            Explore Our Articles
          </button>
          <button className="bg-[#173B6B] text-white hover:bg-blue-600 px-4 py-2">
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
