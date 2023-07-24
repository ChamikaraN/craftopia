import Button from "../../../atoms/Button";
import ItemGrid from "../../../organisms/Client/ItemGrid";
import "./styles.css";

function Home() {
  const collectionItems = [];
  for (let i = 0; i < 12; i++) {
    collectionItems.push(i);
  }

  return (
    <>
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

      {/* collection */}
      <section id="collection" className="py-5">
        <div className="container">
          <div className="title text-center">
            <h2 className="position-relative d-inline-block">
              Special Selection
            </h2>
          </div>
          <div className="row g-0">
            <div className="d-flex flex-wrap justify-content-center mt-5 filter-button-group">
              <Button
                variant="primary"
                title="All"
                onClickHandler={() => {}}
                size="sm"
                styles="btn m-2 text-dark active-filter-btn"
              />
              <Button
                variant="primary"
                title="Best Sellers"
                onClickHandler={() => {}}
                size="sm"
                styles="btn m-2 text-dark "
              />
              <Button
                variant="primary"
                title="Featured"
                onClickHandler={() => {}}
                size="sm"
                styles="btn m-2 text-dark "
              />
              <Button
                variant="primary"
                title="New Arrival"
                onClickHandler={() => {}}
                size="sm"
                styles="btn m-2 text-dark "
              />
            </div>
            <div className="collection-list mt-4 row gx-0 gy-3">
              <ItemGrid items={collectionItems} />
            </div>
          </div>
        </div>
      </section>
      {/* end of collection */}
      {/* special products */}
      <section id="special" className="py-5">
        <div className="container">
          <div className="title text-center py-5">
            <h2 className="position-relative d-inline-block">
              Best Selling Catagories
            </h2>
          </div>
          <div className="special-list row g-0">
            <div className="col-md-6 col-lg-4 col-xl-3 p-2">
              <div className="special-img position-relative overflow-hidden">
                <img src="./images/special_product_1.jpg" className="w-100" />
                <span className="position-absolute d-flex align-items-center justify-content-center text-primary fs-4">
                  <i className="fas fa-heart" />
                </span>
              </div>
              <div className="text-center">
                <p className="text-capitalize mt-3 mb-1">gray shirt</p>
                <span className="fw-bold d-block">$ 45.50</span>
                <a href="#" className="btn btn-primary mt-3">
                  Explore More
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 p-2">
              <div className="special-img position-relative overflow-hidden">
                <img src="./images/special_product_2.jpg" className="w-100" />
                <span className="position-absolute d-flex align-items-center justify-content-center text-primary fs-4">
                  <i className="fas fa-heart" />
                </span>
              </div>
              <div className="text-center">
                <p className="text-capitalize mt-3 mb-1">gray shirt</p>
                <span className="fw-bold d-block">$ 45.50</span>
                <a href="#" className="btn btn-primary mt-3">
                  Add to Cart
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 p-2">
              <div className="special-img position-relative overflow-hidden">
                <img src="./images/special_product_3.jpg" className="w-100" />
                <span className="position-absolute d-flex align-items-center justify-content-center text-primary fs-4">
                  <i className="fas fa-heart" />
                </span>
              </div>
              <div className="text-center">
                <p className="text-capitalize mt-3 mb-1">gray shirt</p>
                <span className="fw-bold d-block">$ 45.50</span>
                <a href="#" className="btn btn-primary mt-3">
                  Add to Cart
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 p-2">
              <div className="special-img position-relative overflow-hidden">
                <img src="./images/special_product_4.jpg" className="w-100" />
                <span className="position-absolute d-flex align-items-center justify-content-center text-primary fs-4">
                  <i className="fas fa-heart" />
                </span>
              </div>
              <div className="text-center">
                <p className="text-capitalize mt-3 mb-1">gray shirt</p>
                <span className="fw-bold d-block">$ 45.50</span>
                <a href="#" className="btn btn-primary mt-3">
                  Add to Cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end of special products */}

      {/* about us */}
      <section id="about" className="py-5">
        <div className="container">
          <div className="row gy-lg-5 align-items-center">
            <div className="col-lg-6 order-lg-1 text-center text-lg-start">
              <div className="title pt-3 pb-5">
                <h2 className="position-relative d-inline-block ms-4">
                  About Us
                </h2>
              </div>
              <p className="lead text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
                ipsam.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem fuga blanditiis, modi exercitationem quae quam
                eveniet! Minus labore voluptatibus corporis recusandae
                accusantium velit, nemo, nobis, nulla ullam pariatur totam quos.
              </p>
            </div>
            <div className="col-lg-6 order-lg-0">
              <img src="./images/about_us.jpg" alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      {/* end of about us */}
      {/* newsletter */}
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
      {/* end of newsletter */}
    </>
  );
}

export default Home;
