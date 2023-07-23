import banner from "../../assets";
import PropTypes from "prop-types";
import Button from "../elements/button/Button";

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
        <div className="w-full md:w-2/6 flex flex-col">
          <h1 className="text-white text-3xl md:text-4xl font-bold text-center">
            {title}
          </h1>{" "}
          <div className="text-md mt-4 text-center text-green-600 bg-[#2e1f1f90] py-4 rounded-full font-light px-2">
            {type && (
              <p>
                Welcome to SPICES, a website dedicated to Sharing Palatable
                International Culinary Experiences & Secrets
              </p>
            )}
          </div>
          <Button
            classname="py-4 bg-green-600 mt-4 hover:bg-green-900"
            onClick={() => {}}
          >
            Discover the Secret
          </Button>
        </div>
      </div>
    </div>
  );
};

HeroSection.propTypes = {
  image: PropTypes.string,
  title: PropTypes.any,
  type: PropTypes.string,
};

export default HeroSection;
