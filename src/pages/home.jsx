import HeroSection from "../components/layouts/HeroSection";

const HomePage = () => {
  return (
    <main className="w-full flex flex-col ">
      <HeroSection
        title={<p>Unveiling Culinary Secrets with SPICES!</p>}
        type="home"
      />
    </main>
  );
};

export default HomePage;
