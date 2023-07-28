import React from "react";
import { Category } from "@/types";

interface BestCatagoriesProps {
  categories: Category[];
}

const BestCatagories: React.FC<BestCatagoriesProps> = ({ categories }) => {
  return (
    <section id="special" className="py-5">
      <div className="container">
        <div className="title text-center py-5">
          <h2 className="position-relative d-inline-block">
            Best Selling Categories
          </h2>
        </div>
        <div className="special-list row g-0">
          {categories.map((category) => {
            const imageUrl =
              typeof category.image === "string" ? category.image : "";
            return (
              <div
                className="col-md-6 col-lg-4 col-xl-3 p-2"
                key={category._id}
              >
                <div className="special-img position-relative overflow-hidden">
                  <img src={imageUrl} className="w-100" alt={category.name} />
                  <span className="position-absolute d-flex align-items-center justify-content-center text-primary fs-4">
                    <i className="fas fa-heart" />
                  </span>
                </div>
                <div className="text-center">
                  <p className="text-capitalize mt-3 mb-1">{category.name}</p>
                  <a href="#" className="btn btn-primary mt-3">
                    Explore More
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BestCatagories;
