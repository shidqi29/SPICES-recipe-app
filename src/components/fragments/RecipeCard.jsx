import PropTypes from "prop-types";

const RecipeCard = ({ recipe }) => {
  const { image, label, url, cuisineType } = recipe.recipe;
  // const id = uri.split("#")[1];
  return (
    <div className="bg_gradient shadow w-full rounded-lg px-2  md:max-w-xs flex flex-col justify-between">
      <a href={url}>
        <img
          src={image}
          alt={label}
          className="rounded-lg h-[200px] md:h-[150px] w-full object-cover"
        />
      </a>
      <div className="p-3 mb-2 h-full">
        <p className="text-white font-semibold tracking-tight">{label}</p>
      </div>
      <div className="px-2 pb-3">
        <span className="px-2 py-1 text-[12px] capitalize bg-[#0c452243] shadow-xl rounded-full mr-3 text-green-500">
          {cuisineType}
        </span>
      </div>
    </div>
  );
};

RecipeCard.propTypes = {
  recipe: PropTypes.object.isRequired,
};

export default RecipeCard;
