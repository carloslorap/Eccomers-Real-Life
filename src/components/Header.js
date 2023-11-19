import React, { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../features/user/userSlice";
import { Typeahead } from "react-bootstrap-typeahead"; // ES2015
import "react-bootstrap-typeahead/css/Typeahead.css";
import { getAProduct } from "../features/product/productSlice";

const Header = () => {
  const [totalAmount, settotalAmount] = useState(null);
  const [paginate, setPaginate] = useState(true);
  const [productOpt, setproductOpt] = useState([]);
  const productState = useSelector((state) => state?.product?.product);
  const authState = useSelector((state) => state?.auth);
  const CartState = useSelector((state) => state.auth?.cartProducts);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < CartState?.length; index++) {
      sum =
        sum +
        Number(CartState[index]?.quantity) * Number(CartState[index]?.price);
      settotalAmount(sum);
    }
    // setTimeout(() => {
    //   dispatch(getCart());
    // }, 200);
  }, [CartState]);

  useEffect(() => {
    let data = [];
    for (let index = 0; index < productState?.length; index++) {
      const element = productState[index];
      data.push({ id: index, prod: element?._id, name: element?.title });
    }
    setproductOpt(data);
  }, [productState]);

  return (
    <>
      <header className="header-top-strip py-3  pb-0">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6 mb-0 ">
              <p className="text-white ">
                Free Shipping Over $100 & free Returns
              </p>
            </div>
            <div className="col-6 text-white mb-0">
              <p className="text-end">
                Hotline:{" "}
                <a className="text-white" href="tel:+91 82373245">
                  +91 82373245
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>

      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link className="text-white">Dev Corner</Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group">
                <Typeahead
                  id="pagination-example"
                  onPaginate={() => console.log("Results paginated")}
                  onChange={(select) => {
                    if (select && select.length > 0) {
                      navigate(`/product/${select[0].prod}`);
                      dispatch(getAProduct(select[0].prod));
                    }
                  }}
                  options={productOpt}
                  paginate={paginate}
                  labelKey={"name"}
                  placeholder="Search for products here..."
                  minLength={2}
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link
                    to="compare-product"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src="/images/compare.svg" alt="" />
                    <p className="mb-0">
                      Compare <br /> Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="wishlist"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src="/images/wishlist.svg" alt="" />
                    <p className="mb-0">
                      Favorite <br /> wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to={authState?.user === null ? "login" : "profile"}
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src="/images/user.svg" alt="" />

                    {authState && authState?.user === null ? (
                      <p className="mb-0">
                        Log in <br /> My Account
                      </p>
                    ) : (
                      <div className="d-flex flex-column align-items-center">
                        <p className="mb-0">Welcome</p>
                        <p className="mb-0">{authState?.user?.firstname}</p>
                      </div>
                    )}
                  </Link>
                </div>
                <div>
                  <Link
                    to="cart"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src="/images/cart.svg" alt="" />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">
                        {CartState?.length ? CartState?.length : 0}
                      </span>
                      {(totalAmount !== null || totalAmount !== 0) && (
                        <p className="mb-0">
                          $ {totalAmount ? totalAmount : 0}
                        </p>
                      )}
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src="images/menu.svg" alt="" />
                      <span className="me-5 d-inline-block">
                        {" "}
                        Shop Categories
                      </span>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link className="dropdown-item text-white" to="/">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="/">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="/">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/store">Our Store</NavLink>
                    <NavLink to="/blog">Blogs</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
