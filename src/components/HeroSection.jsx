import banner from "../assets";
import PropTypes from "prop-types";

const images = banner;
const HeroSection = ({ title, image, type }) => {
  return (
    <div className="w-full h-[100vh]">
      <div className="relative w-full h-full">
        <img
          src={image ?? images}
          alt="banner"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute w-full min-h-screen flex flex-col justify-center items-center top-0 z-10 bg-gradient-to-t from-black to-transparent px-4">
        <div className="w-2/6 flex flex-col">
          <h1 className="text-white text-3xl md:text-4xl font-bold text-center">
            {title}
          </h1>{" "}
          <div className="text-md mt-4 text-center text-green-500 bg-[#2e1f1f90] py-4 rounded-full font-light">
            {type && (
              <p>
                Welcome to SPICES,
                <br /> Unlock the Hidden Flavors of International Cuisines
              </p>
            )}
          </div>
          <button className="text-md mt-4 text-center text-white bg-green-600  py-4 rounded-full font-bold font hover:bg-green-950">
            Discover the Secret
          </button>
        </div>
      </div>
    </div>
  );
};

HeroSection.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
};

export default HeroSection;
