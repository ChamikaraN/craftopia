import "./shop.css";

function Shop() {
  return (
    <section className="shop">
      <div className="container">
        <div className="title text-center">
          <h2 className="position-relative d-inline-block">New Collection</h2>
        </div>
        <div className="row g-0">
          <div className="d-flex flex-wrap justify-content-center mt-5 filter-button-group">
            <button
              type="button"
              className="btn m-2 text-dark active-filter-btn"
              data-filter="*"
            >
              All
            </button>
            <button
              type="button"
              className="btn m-2 text-dark"
              data-filter=".best"
            >
              Best Sellers
            </button>
            <button
              type="button"
              className="btn m-2 text-dark"
              data-filter=".feat"
            >
              Featured
            </button>
            <button
              type="button"
              className="btn m-2 text-dark"
              data-filter=".new"
            >
              New Arrival
            </button>
          </div>
          <div className="collection-list mt-4 row gx-0 gy-3">
            <div className="col-md-6 col-lg-4 col-xl-3 p-2 best">
              <div className="collection-img position-relative">
                <img src="./images/c_formal_gray_shirt.png" className="w-100" />
                <span className="position-absolute bg-primary text-white d-flex align-items-center justify-content-center">
                  sale
                </span>
              </div>
              <div className="text-center">
                <div className="rating mt-3">
                  <span className="text-primary">
                    <i className="fas fa-star" />
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star" />
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star" />
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star" />
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star" />
                  </span>
                </div>
                <p className="text-capitalize my-1">gray shirt</p>
                <span className="fw-bold">$ 45.50</span>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 p-2 feat">
              <div className="collection-img position-relative">
                <img src="./images/c_pant_girl.png" className="w-100" />
                <span className="position-absolute bg-primary text-white d-flex align-items-center justify-content-center">
                  sale
                </span>
              </div>
              <div className="text-center">
                <div className="rating mt-3">
                  <span className="text-primary">
                    <i className="fas fa-star" />
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star" />
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star" />
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star" />
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star" />
                  </span>
                </div>
                <p className="text-capitalize my-1">gray shirt</p>
                <span className="fw-bold">$ 45.50</span>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 p-2 new">
              <div className="collection-img position-relative">
                <img src="./images/c_polo-shirt.png" className="w-100" />
                <span className="position-absolute bg-primary text-white d-flex align-items-center justify-content-center">
                  sale
                </span>
              </div>
              <div className="text-center">
                <div className="rating mt-3">
                  <span className="text-primary">
                    <i className="fas fa-star" />
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star" />
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star" />
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star" />
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star" />
                  </span>
                </div>
                <p className="text-capitalize my-1">gray shirt</p>
                <span className="fw-bold">$ 45.50</span>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 p-2 best">
              <div className="collection-img position-relative">
                <img src="./images/c_shirt-girl.png" className="w-100" />
                <span className="position-absolute bg-primary text-white d-flex align-items-center justify-content-center">
                  sale
                </span>
              </div>
              <div className="text-center">
                <div className="rating mt-3">
                  <span className="text-primary">
                    <i className="fas fa-star" />
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star" />
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star" />
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star" />
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star" />
                  </span>
                </div>
                <p className="text-capitalize my-1">gray shirt</p>
                <span className="fw-bold">$ 45.50</span>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 p-2 feat">
              <div className="collection-img position-relative">
                <img src="./images/c_t-shirt_men.png" className="w-100" />
                <span className="position-absolute bg-primary text-white d-flex align-items-center justify-content-center">
                  sale
                </span>
              </div>
              <div className="text-center">
                <div className="rating mt-3">
                  <span className="text-primary">
                    <i className="fas fa-star" />
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star" />
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star" />
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star" />
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star" />
                  </span>
                </div>
                <p className="text-capitalize my-1">gray shirt</p>
                <span className="fw-bold">$ 45.50</span>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 p-2 new">
              <div className="collection-img position-relative">
                <img src="./images/c_tunic-shirt_girl.png" className="w-100" />
                <span className="position-absolute bg-primary text-white d-flex align-items-center justify-content-center">
                  sale
                </span>
              </div>
              <div className="text-center">
                <div className="rating mt-3">
                  <span className="text-primary">
                    <i className="fas fa-star" />
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star" />
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star" />
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star" />
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star" />
                  </span>
                </div>
                <p className="text-capitalize my-1">gray shirt</p>
                <span className="fw-bold">$ 45.50</span>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 p-2 best">
              <div className="collection-img position-relative">
                <img src="./images/c_undershirt.png" className="w-100" />
                <span className="position-absolute bg-primary text-white d-flex align-items-center justify-content-center">
                  sale
                </span>
              </div>
              <div className="text-center">
                <div className="rating mt-3">
                  <span className="text-primary">
                    <i className="fas fa-star" />
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star" />
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star" />
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star" />
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star" />
                  </span>
                </div>
                <p className="text-capitalize my-1">gray shirt</p>
                <span className="fw-bold">$ 45.50</span>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 p-2 feat">
              <div className="collection-img position-relative">
                <img src="./images/c_western-shirt.png" className="w-100" />
                <span className="position-absolute bg-primary text-white d-flex align-items-center justify-content-center">
                  sale
                </span>
              </div>
              <div className="text-center">
                <div className="rating mt-3">
                  <span className="text-primary">
                    <i className="fas fa-star" />
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star" />
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star" />
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star" />
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star" />
                  </span>
                </div>
                <p className="text-capitalize my-1">gray shirt</p>
                <span className="fw-bold">$ 45.50</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Shop;
