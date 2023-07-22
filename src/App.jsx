import { Routes, Route, Outlet } from "react-router-dom";

import { Fragment } from "react";
import Footer from "./components/layouts/Footer";
import Navbar from "./components/layouts/Navbar";
import HomePage from "./pages/home";
import RecipeDetail from "./pages/recipeDetail";

const Layout = () => {
  return (
    <Fragment>
      <Navbar />
      <Outlet />
      <Footer />
    </Fragment>
  );
};

const App = () => {
  return (
    <div className="bg-black">
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<HomePage />} />
        <Route path="recipes/:id" element={<RecipeDetail />} />
      </Routes>
    </div>
  );
};

export default App;
