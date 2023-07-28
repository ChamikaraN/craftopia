import React from "react";
import AboutUs from "@organisms/Client/Home/AboutUs";
import Banner from "@organisms/Client/Home/Banner";
import BestCatagories from "@organisms/Client/Home/BestCatagories";
import Newsletter from "@organisms/Client/Home/Newsletter";
import SpecialSelection from "@organisms/Client/Home/SpecialSelection";
import useFetchProducts from "@/hooks/product/useFetchProducts";
import useFetchCategories from "@/hooks/category/useFetchCategories";
import { useAppSelector } from "@/redux/hooks";

const Home: React.FC = () => {
  const { isLoading: productsLoading, isError: productsError } =
    useFetchProducts();
  const { isLoading: categoriesLoading, isError: categoriesError } =
    useFetchCategories();
  const { products } = useAppSelector((state) => state.product);
  const { categories } = useAppSelector((state) => state.category);

  const renderSpecialSelection = () => {
    if (productsLoading || categoriesLoading) {
      return <>Loading</>;
    }

    if (productsError || categoriesError) {
      return <>Error</>;
    }

    return <SpecialSelection products={products} categories={categories} />;
  };

  const renderBestCategories = () => {
    if (categoriesLoading) {
      return <>Loading</>;
    }

    if (categoriesError) {
      return <>Error</>;
    }

    return <BestCatagories categories={categories} />;
  };

  return (
    <>
      <Banner />
      {renderSpecialSelection()}
      {renderBestCategories()}
      <AboutUs />
      <Newsletter />
    </>
  );
};

export default Home;
