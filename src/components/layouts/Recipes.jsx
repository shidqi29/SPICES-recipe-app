import { useEffect, useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import Loading from "../fragments/Loading";
import SearchBar from "../fragments/SearchBar";
import RecipeCard from "../fragments/RecipeCard";
import { fetchRecipes } from "../../utils";
import Button from "../elements/button/Button";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("rendang");
  const [limit, setLimit] = useState(20);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const fetchRecipe = async () => {
    try {
      const data = await fetchRecipes({
        search,
        limit,
      });
      setRecipes(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchRecipe = (e) => {
    e.preventDefault();
    setLoading(true);
    fetchRecipe();
  };

  const showMore = () => {
    setLimit(prev => prev + 10);
    fetchRecipe();
  };

  useEffect(() => {
    setLoading(true);
    fetchRecipe();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-center pt-10 pb-5 px-0 md:px-10">
        <form className="w-full lg:w-2/4" onSubmit={handleSearchRecipe}>
          <SearchBar
            placeholder="What's you want to cook?"
            handleInputChange={handleChange}
            rightIcon={
              <BiSearchAlt2
                className="text-gray-600"
                onClick={handleSearchRecipe}
              />
            }
          />
        </form>
      </div>
      {recipes?.length > 0 ? (
        <>
          <div className="w-full flex flex-wrap gap-10 px-0 lg:px-10 py-10 justify-center ">
            {recipes.map((item, index) => (
              <RecipeCard key={index} recipe={item} />
            ))}
          </div>
          <div className="flex w-full items-center justify-center py-10">
            <Button classname="bg-green-600 py-1 text-sm" onClick={showMore}>
              Show more
            </Button>
          </div>
        </>
      ) : (
        <div className="text-white w-full items-center justify-center py-10">
          <p className="text-center">No Recipes Found</p>
        </div>
      )}
    </div>
  );
};

export default Recipes;
