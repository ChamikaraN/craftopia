import React from "react";
import Button from "../../../atoms/Button";

const Banner: React.FC = () => {
  return (
    <section id="header" className="py-5">
      <div className="container">
        <div className="row d-flex align-items-center justify-content-center text-center justify-content-lg-start text-lg-start">
          <div className="header-content">
            <span className="text-white">Discount Up To 40%</span>
            <h2 className="mt-2 mb-4 text-white">Grand Sale Offer!</h2>
            <Button
              variant="primary"
              title="Buy Now"
              onClickHandler={() => {}}
              size="lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
