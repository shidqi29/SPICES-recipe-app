import { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import Loading from "../fragments/Loading";
import SearchBar from "../fragments/SearchBar";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(20);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-center pt-10 pb-5 px-0 md:px-10">
        <form className="w-full ">
          <SearchBar
            placeholder="What's you want to cook?"
            handleInputChange={handleChange}
            rightIcon={<BiSearchAlt2 className="text-gray-600" />}
          />
        </form>
      </div>
    </div>
  );
};

export default Recipes;
