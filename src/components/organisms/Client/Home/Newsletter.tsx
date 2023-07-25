import React from "react";

const Newsletter: React.FC = () => {
  return (
    <section id="newsletter" className="py-5">
      <div className="container">
        <div className="d-flex flex-column align-items-center justify-content-center">
          <div className="title text-center pt-3 pb-5">
            <h2 className="position-relative d-inline-block ms-4">
              Newsletter Subscription
            </h2>
          </div>
          <p className="text-center text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            rem officia accusantium maiores quisquam dolorum?
          </p>
          <div className="input-group mb-3 mt-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Email ..."
            />
            <button className="btn btn-primary" type="submit">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
