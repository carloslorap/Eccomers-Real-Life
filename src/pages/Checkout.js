import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { config } from "../utils/base_url";

const Checkout = () => {
  const dispatch = useDispatch();
  const [totalAmount, settotalAmount] = useState(null);
  const [shipping, setshipping] = useState(null);
  const CartState = useSelector((state) => state.auth.cartProducts);
  const orderSchema = yup.object().shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    address: yup.string().required("Address Details is required"),
    state: yup.string().required("State is required"),
    country: yup.string().required("Country is required"),
    city: yup.string().required("City is required"),
    pincode: yup.string().required("Pincode is required"),
    other: yup.string().required("Other is required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      address: "",
      state: "",
      country: "",
      city: "",
      pincode: "",
      other: "",
    },
    validationSchema: orderSchema,
    onSubmit: (values) => {
      // dispatch(loginUser(values))
      checkOutHandler();
    },
  });

  useEffect(() => {
    let suma = 0;
    for (let index = 0; index < CartState?.length; index++) {
      suma =
        suma +
        Number(CartState[index]?.quantity) * Number(CartState[index]?.price);
      settotalAmount(suma);
    }
  }, [CartState]);

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const checkOutHandler = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("failed check");
      return;
    }
    const result = await axios.post(
      "http://localhost:4000/api/user/order/checkout",
      "",
      config
    );
    if (!result) {
      alert("Something went wrong");
      return;
    }
    const { amount, id: order_id, currency } = result.data;
    const options = {
      key: "rzp_test_mmLw9Pz8pKnBIm", // Enter the Key ID generated from the Dashboard
      amount: amount,
      currency: currency,
      name: "Soumya Corp.",
      description: "Test Transaction",

      order_id: order_id,
      handler: async function (response) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };

        const result = await axios.post(
          "http://localhost:4000/api/user/order/paymentVerification",
          data
        
        );

        alert(result);
      },
      prefill: {
        name: "Soumya Dey",
        email: "SoumyaDey@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Soumya Dey Corporate Office",
      },
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
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
                <form
                  onSubmit={formik.handleSubmit}
                  className="d-flex gap-15 flex-wrap justify-content-between"
                >
                  <div className="w-100">
                    <select
                      name="country"
                      values={formik.values.country}
                      onChange={formik.handleChange("country")}
                      className="form-control form-select"
                    >
                      <option selected disabled>
                        Select Country
                      </option>
                      <option>Peru</option>
                    </select>
                    <div className="error">
                      {formik.touched.country && formik.errors.country ? (
                        <div>{formik.errors.country}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="form-control"
                      name="firstname"
                      values={formik.values.firstname}
                      onChange={formik.handleChange("firstname")}
                    />
                    <div className="error">
                      {formik.touched.firstname && formik.errors.firstname ? (
                        <div>{formik.errors.firstname}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="form-control"
                      name="lastname"
                      values={formik.values.lastname}
                      onChange={formik.handleChange("lastname")}
                    />
                    <div className="error">
                      {formik.touched.lastname && formik.errors.lastname ? (
                        <div>{formik.errors.lastname}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="w-100">
                    <input
                      type="text"
                      placeholder="Address"
                      className="form-control"
                      name="address"
                      values={formik.values.address}
                      onChange={formik.handleChange("address")}
                    />
                    <div className="error">
                      {formik.touched.address && formik.errors.address ? (
                        <div>{formik.errors.address}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="w-100">
                    <input
                      type="text"
                      placeholder="Apartament, Suite ,etc"
                      className="form-control"
                      name="other"
                      values={formik.values.other}
                      onChange={formik.handleChange("other")}
                    />
                    <div className="error">
                      {formik.touched.other && formik.errors.other ? (
                        <div>{formik.errors.other}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="City"
                      className="form-control"
                      name="city"
                      values={formik.values.city}
                      onChange={formik.handleChange("city")}
                    />
                    <div className="error">
                      {formik.touched.city && formik.errors.city ? (
                        <div>{formik.errors.city}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <select
                      name="state"
                      values={formik.values.state}
                      onChange={formik.handleChange("state")}
                      className="form-control form-select"
                    >
                      <option selected disabled>
                        Select State
                      </option>
                      <option>Nose</option>
                      <option d>Menos</option>
                    </select>
                    <div className="error">
                      {formik.touched.state && formik.errors.state ? (
                        <div>{formik.errors.state}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="ZipCode"
                      className="form-control"
                      name="pincode"
                      values={formik.values.pincode}
                      onChange={formik.handleChange("pincode")}
                    />
                    <div className="error">
                      {formik.touched.pincode && formik.errors.pincode ? (
                        <div>{formik.errors.pincode}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="w-100">
                    <div className="d-flex justify-content-between align-items-center">
                      <Link to="/cart" className="text-dark">
                        <BiArrowBack className="me-2" /> Return to Cart
                      </Link>
                      <div className="d-flex gap-3">
                        <Link to="/cart" className="button">
                          Continue to Shipping
                        </Link>
                        <button type="submit" className="button border-0" onClick={checkOutHandler}>
                          Place Order
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-5">
              <div className="border-bottom py-4">
                {CartState &&
                  CartState?.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="d-flex gap-10 mb-2 align-items-center"
                      >
                        <div className="w-75 d-flex gap-10">
                          <div className="w-25 position-relative">
                            <span
                              style={{ top: "-10px", right: "-1px" }}
                              className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                            >
                              {item?.quantity}
                            </span>
                            <img
                              src={item?.productId?.images[0]?.url}
                              className="img-fluid"
                              alt=""
                            />
                          </div>

                          <div>
                            <h5 className="title total-price">
                              {item?.productId?.title}{" "}
                            </h5>
                            <p className="total-price">
                              s /{item?.productId?.price}
                            </p>
                          </div>
                        </div>

                        <div className="flex-grow-1">
                          <h5 className="total-price">
                            ${item?.quantity * item?.price}
                          </h5>
                        </div>
                      </div>
                    );
                  })}
              </div>
              <div className="border-bottom py-4">
                <div className="d-flex justify-content-between align-items-center">
                  <p className=" total">subTotal</p>
                  <p className="total-price">
                    $ {totalAmount ? totalAmount : 0}
                  </p>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <p className="mb-0 total">shipping</p>
                  <p className="mb-0 total-price">$ 5</p>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center border-bottom py-4">
                <h4 className="total">Total</h4>
                <h5 className="total-price">
                  $ {totalAmount ? totalAmount + 5 : 0}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
