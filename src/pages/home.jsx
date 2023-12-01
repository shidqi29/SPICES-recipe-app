import HeroSection from "../components/layouts/HeroSection";
import Recipes from "../components/layouts/Recipes";

const HomePage = () => {
  return (
    <main className="w-full flex flex-col ">
      <HeroSection
        title={"Unlock the Hidden Flavors of International Cuisines"}
        type="home"
      />
      <section
        id="recipes"
        className="md:max-w-[1440px] mx-auto px-4 md:px-20 mt-4">
        <Recipes />
      </section>
    </main>
  );
};

export default HomePage;
