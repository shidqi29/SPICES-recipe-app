import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white bg_gradient py-10 ">
      <div className="container border-t border-slate-800 mx-auto flex flex-col items-center justify-center pt-8">
        <p>Build with Love 💖</p>
        <div className="flex gap-3 mt-2 ">
          <a href="https://github.com/shidqi29">
            <FaGithub size={24} className="hover:scale-110" />
          </a>
          <a href="https://www.instagram.com/shidqiamrlhaq/">
            <FaInstagram size={24} className="hover:scale-110" />
          </a>
          <a href="https://www.linkedin.com/in/shidqiamirulhaq/">
            <FaLinkedin size={24} className="hover:scale-110" />
          </a>
        </div>
        <div className="flex items-center justify-center">
          <span className="text-gray-400 leading-10">
            Shidqi Amirul Haq &copy; 2023
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
