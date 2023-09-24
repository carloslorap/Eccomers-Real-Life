import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Color from "../components/Color";

const CompareProduct = () => {
  return (
    <>
      <Meta title={"Compare Products"} />
      <BreadCrumb title="Compare Products" />
      <div className="compare-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3 mt-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/cross.svg"
                  className="position-absolute cross"
                  alt=""
                />
                <div className="producto-card-image img-fluid">
                  <img src="images/watch.jpg" alt="" />
                </div>
                <div className="compare-product-details">
                  <h5 className="title">
                    Kids headphones bulk 10 pack multi colored for Students
                  </h5>
                  <h6 className="price mb-3 mt-3">$100.00</h6>

                  <div>
                    <div className="product-detail">
                      <h5>Brand:</h5>
                      <p>Havels</p>
                    </div>
                    <div className="product-detail">
                      <h5>Type:</h5>
                      <p>Watch</p>
                    </div>
                    <div className="product-detail">
                      <h5>Availablity:</h5>
                      <p>In Stock:</p>
                    </div>
                    <div className="product-detail">
                      <h5>Color:</h5>
                      <Color />
                    </div>
                    <div className="product-detail">
                      <h5>Size:</h5>
                      <div className="d-flex gap-10">
                        <p>S</p>
                        <p>M</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-3 mt-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/cross.svg"
                  className="position-absolute cross"
                  alt=""
                />
                <div className="producto-card-image img-fluid">
                  <img src="images/watch.jpg" alt="" />
                </div>
                <div className="compare-product-details">
                  <h5 className="title">
                    Kids headphones bulk 10 pack multi colored for Students
                  </h5>
                  <h6 className="price mb-3 mt-3">$100.00</h6>

                  <div>
                    <div className="product-detail">
                      <h5>Brand:</h5>
                      <p>Havels</p>
                    </div>
                    <div className="product-detail">
                      <h5>Type:</h5>
                      <p>Watch</p>
                    </div>
                    <div className="product-detail">
                      <h5>Availablity:</h5>
                      <p>In Stock:</p>
                    </div>
                    <div className="product-detail">
                      <h5>Color:</h5>
                      <Color />
                    </div>
                    <div className="product-detail">
                      <h5>Size:</h5>
                      <div className="d-flex gap-10">
                        <p>S</p>
                        <p>M</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-3 mt-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/cross.svg"
                  className="position-absolute cross"
                  alt=""
                />
                <div className="producto-card-image img-fluid">
                  <img src="images/watch.jpg" alt="" />
                </div>
                <div className="compare-product-details">
                  <h5 className="title">
                    Kids headphones bulk 10 pack multi colored for Students
                  </h5>
                  <h6 className="price mb-3 mt-3">$100.00</h6>

                  <div>
                    <div className="product-detail">
                      <h5>Brand:</h5>
                      <p>Havels</p>
                    </div>
                    <div className="product-detail">
                      <h5>Type:</h5>
                      <p>Watch</p>
                    </div>
                    <div className="product-detail">
                      <h5>Availablity:</h5>
                      <p>In Stock:</p>
                    </div>
                    <div className="product-detail">
                      <h5>Color:</h5>
                      <Color />
                    </div>
                    <div className="product-detail">
                      <h5>Size:</h5>
                      <div className="d-flex gap-10">
                        <p>S</p>
                        <p>M</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompareProduct;
