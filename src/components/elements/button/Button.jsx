import PropTypes from "prop-types";

const Button = ({ children, type = "button", classname, onClick = () => {} }) => {
  return (
    <button
      className={`text-center text-white ${classname} rounded-full font-bold px-2`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  classname: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
