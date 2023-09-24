import React from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const Checkout = () => {
  return (
    <>
      <div className="checkout-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-7">
              <div className="checkout-left-data">
                <h3 className="website-name">Dev Corner</h3>
                <nav
                  style={{ "--bs-breadcrumb-divider": ">" }}
                  aria-label="breadcrumb"
                >
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item active">
                      <Link to="/cart" className="text-dark total-price">
                        Cart
                      </Link>
                    </li>
                    &nbsp;/
                    <li
                      class="breadcrumb-item active  total-price"
                      aria-current="page"
                    >
                      Information
                    </li>
                    &nbsp;/
                    <li class="breadcrumb-item active  total-price">
                      Shipping
                    </li>
                    &nbsp;/
                    <li
                      class="breadcrumb-item active  total-price"
                      aria-current="page"
                    >
                      Payment
                    </li>
                  </ol>
                </nav>
                <h4 className="title total">Contact Information</h4>
                <p className="user-details total">
                  Navdeep Dahiya (carloslorapuma@gmail.com)
                </p>
                <h4 className="mb-3">Shipping Address</h4>
                <form className="d-flex gap-15 flex-wrap justify-content-between">
                  <div className="w-100">
                    <select className="form-control form-select">
                      <option selected disabled>
                        Select Country
                      </option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="form-control"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="form-control"
                    />
                  </div>
                  <div className="w-100">
                    <input
                      type="text"
                      placeholder="Address"
                      className="form-control"
                    />
                  </div>
                  <div className="w-100">
                    <input
                      type="text"
                      placeholder="Apartament, Suite ,etc"
                      className="form-control"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="City"
                      className="form-control"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <select className="form-control form-select">
                      <option selected disabled>
                        Select State
                      </option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="ZipCode"
                      className="form-control"
                    />
                  </div>
                  <div className="w-100">
                    <div className="d-flex justify-content-between align-items-center">
                      <Link to="/cart" className="text-dark">
                        <BiArrowBack className="me-2" /> Return to Cart
                      </Link>
                      <Link to="/cart" className="button">
                        Continue to Shipping
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-5">
              <div className="border-bottom py-4">
                <div className="d-flex gap-10 mb-2 align-items-center">
                  <div className="w-75 d-flex gap-10">
                    <div className="w-25 position-relative">
                      <span
                        style={{ top: "-10px", right: "-1px" }}
                        className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                      >
                        1
                      </span>
                      <img src="images/tab1.jpg" className="img-fluid" alt="" />
                    </div>

                    <div>
                      <h5 className="title total-price">Product Name </h5>
                      <p className="total-price">s / #jirng</p>
                    </div>
                  </div>

                  <div className="flex-grow-1">
                    <h5 className="total-price">$ 100.00</h5>
                  </div>
                </div>


                <div className="d-flex gap-10 mb-2 align-items-center">
                  <div className="w-75 d-flex gap-10">
                    <div className="w-25 position-relative">
                      <span
                        style={{ top: "-10px", right: "-1px" }}
                        className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                      >
                        1
                      </span>
                      <img src="images/watch.jpg" className="img-fluid" alt="" />
                    </div>

                    <div>
                      <h5 className="title total-price">Product Name </h5>
                      <p className="total-price">s / #jirng</p>
                    </div>
                  </div>

                  <div className="flex-grow-1">
                    <h5 className="total-price">$ 100.00</h5>
                  </div>
                </div>


                <div className="d-flex gap-10 mb-2 align-items-center">
                  <div className="w-75 d-flex gap-10">
                    <div className="w-25 position-relative">
                      <span
                        style={{ top: "-10px", right: "-1px" }}
                        className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                      >
                        1
                      </span>
                      <img src="images/tab.jpg" className="img-fluid" alt="" />
                    </div>

                    <div>
                      <h5 className="title total-price">Product Name </h5>
                      <p className="total-price">s / #jirng</p>
                    </div>
                  </div>

                  <div className="flex-grow-1">
                    <h5 className="total-price">$ 100.00</h5>
                  </div>
                </div>
              </div>
              <div className="border-bottom py-4">
                <div className="d-flex justify-content-between align-items-center">
                  <p className=" total">subTotal</p>
                  <p className="total-price">$ 1000.00</p>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <p className="mb-0 total">shipping</p>
                  <p className="mb-0 total-price">$ 1000.00</p>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center border-bottom py-4">
                <h4 className="total">Total</h4>
                <h5 className="total-price">$ 1000.00</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
