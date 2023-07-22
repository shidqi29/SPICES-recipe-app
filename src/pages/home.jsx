import HeroSection from "../components/layouts/HeroSection";

const HomePage = () => {
  return (
    <main className="w-full flex flex-col ">
      <HeroSection
        title={<p>Unlock the Hidden Flavors of International Cuisines!</p>}
        type="home"
      />
    </main>
  );
};

export default HomePage;
