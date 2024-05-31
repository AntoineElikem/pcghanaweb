import { FaFacebookF, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#1B7A99] text-white py-16 px-4">
      <div className="max-w-[70%] mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <h6 className="font-bold uppercase pt-2 opacity-70">
            Pharmacy Council, Ghana
          </h6>
          <p className="py-2 text-3xl font-bold">
            To guarantee the highest levels of Pharmaceutical Care
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube size={24} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Our partners</h6>
          <ul className="py-1">
            <li className="py-0.5">Ministry of Health</li>
            <li className="py-0.5">Pharmaceutical Society of Ghana</li>
            <li className="py-0.5">Medical and Dental Council</li>
            <li className="py-0.5">Allied Health Professions Council</li>
            <li className="py-0.5">Nursing and Midwifery Council</li>
            <li className="py-0.5">Psychology Council</li>
            <li className="py-0.5">Food and Drugs Authority</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Head Office</h6>
          <p className="py-0.5">Phone: +233302680150</p>
          <p className="py-0.5">Whatsapp: +233243099092</p>
          <p className="py-0.5">P.O Box 10344, Accra-North, Accra.</p>
          <p className="py-0.5">
            Located near Adjaben Court, Accra Central, Greater Accra Region
          </p>

          <div className="pt-4">
            <h6 className="font-bold uppercase">Subscribe to Our Newsletter</h6>
            <form className="flex flex-col mt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded-md text-black"
              />
              <button className="bg-[#023047] text-white p-2 mt-2 rounded-md">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
