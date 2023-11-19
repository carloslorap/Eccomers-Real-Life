import React, { useEffect, useState } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import Color from "../components/Color";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAProduct, reviewProduct } from "../features/product/productSlice";
import { toast } from "react-toastify";
import { addToCart, getCart } from "../features/user/userSlice";

const SingleProduct = () => {
  const [color, setcolor] = useState(null);
  const [start, setstart] = useState(null);
  const [comment, setcomment] = useState("");
  const [quantity, setquantity] = useState(1);
  const [alreadyAdded, setalreadyAdded] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const getProductId = location.pathname.split("/")[2];
  const productState = useSelector((state) => state.product?.singleProduct);
  const cartState = useSelector((state) => state.auth?.cartProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAProduct(getProductId));
    dispatch(getCart());

  }, []);
  useEffect(() => {
    for (let index = 0; index < cartState?.length; index++) {
      if (getProductId === cartState[index]?.productId?._id) {
        setalreadyAdded(true);
   
      }
    }
  }, []);

  const addRatingToProduct = () => {
    if (start === null) {
      toast.error("Please add start rating");
      return false;
    } else if (comment === null || comment === "") {
      toast.error("Please add comment");
      return false;
    } else {
      dispatch(
        reviewProduct({ start: start, comment: comment, prodId: getProductId })
        
      );

      setTimeout(() => {
        dispatch(getAProduct(getProductId));

       
      }, 300);
    }
    return false;
  };

  const uploadCart = () => {
    if (color === null) {
      toast.error("Please Choose a color");
      return false;
    } else {
      dispatch(
        addToCart({
          productId: productState?._id,
          quantity,
          color,
          price: productState?.price,
        })
      );
    
    }
  };

  const props = {
    width: 500,
    height: 500,
    zoomWidth: 400,
    img: `${productState?.images[0]?.url}`,
  };

  const [orderedProduct, setorderedProduct] = useState(true);
  return (
    <>
      <Meta title={"Product name"} />
      <BreadCrumb title="Product name" />

      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                  <ReactImageZoom {...props} />
                </div>
              </div>
              <div className="other-product-images d-flex flex-wrap gap-15">
                <div>
                  <img
                    src={productState?.images[1]?.url}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div>
                  <img
                    src={productState?.images[2]?.url}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div>
                  <img
                    src={productState?.images[3]?.url}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div>
                  <img
                    src={productState?.images[4]?.url}
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title"> {productState?.title}</h3>
                </div>
                <div className="border-bottom py-3">
                  <p className="price">$ {productState?.price}</p>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      activeColor={"#ffd700"}
                      value={productState?.totalrating}
                      edit={false}
                    />
                    <p className="mb-0 t-review">(2 Reviews)</p>
                  </div>
                  <a href="#review" className="review-btn">
                    Write a Review
                  </a>
                </div>
                <div className="border-bottom py-3">
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Type:</h3>{" "}
                    <p className="product-data my-2">
                      {" "}
                      {productState?.category}
                    </p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Brand:</h3>{" "}
                    <p className="product-data my-2"> {productState?.brand}</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Category:</h3>{" "}
                    <p className="product-data my-2">
                      {" "}
                      {productState?.category}
                    </p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Tags:</h3>{" "}
                    <p className="product-data my-2"> {productState?.tags}</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Availablity:</h3>{" "}
                    <p className="product-data my-2">In Stock</p>
                  </div>

                  {alreadyAdded === false && (
                    <>
                      <div className="d-flex gap-10 flex-column mt-2 mb-3" >
                        <h3 className="product-heading">Color:</h3>
                        <Color
                          setcolor={setcolor}
                          colorData={productState?.color}
                        />
                      </div>
                    </>
                  )}
                  <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
                    {alreadyAdded === false && (
                      <>
                        <h3 className="product-heading">Quantity:</h3>{" "}
                        <div>
                          <input
                            type="number"
                            min={1}
                            max={10}
                            className="form-control"
                            style={{ width: "70px" }}
                            onChange={(e) => setquantity(e.target.value)}
                            value={quantity}
                          />
                        </div>
                      </>
                    )}
                    <div
                      className={
                        alreadyAdded
                          ? "ms-0 gap-30 d-flex"
                          : "d-flex align-items-center gap-30 ms-5"
                      }
                    >
                      <button
                        className="button border-0"
                        onClick={() => {
                          alreadyAdded ? navigate("/cart") : uploadCart();
                        }}
                      >
                        {alreadyAdded ? "Go To Cart" : " Add to Cart"}
                      </button>
                      <button to="/signup" className="button signup">
                        But it Now
                      </button>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-15">
                    <div>
                      <a href="/">
                        {" "}
                        <TbGitCompare className="fs-5 me-2" />
                        Add to Compare
                      </a>
                    </div>
                    <div>
                      <a href="/">
                        <AiOutlineHeart className="fs-5 me-2" />
                        Add to Wishlist
                      </a>
                    </div>
                  </div>

                  <div className="d-flex gap-10 flex-column my-3">
                    <h3 className="product-heading">Shipping & Returns:</h3>{" "}
                    <p className="product-data">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      <br />
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>

                  <div className="d-flex gap-10 flex-column my-3">
                    <h3 className="product-heading">Copy product Link:</h3>{" "}
                    <p className="product-data my-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      <br />
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="description-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4 id="review">Description</h4>
              <div className="bg-white p-3">
                <p
                  dangerouslySetInnerHTML={{
                    __html: productState?.description,
                  }}
                ></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="reviews-wrapper home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4>Reviews</h4>
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div>
                    <h4 className="mb-2">Customer Reviews</h4>
                    <div className="d-flex align-items-center gap-10">
                      <ReactStars
                        count={5}
                        size={24}
                        activeColor={"#ffd700"}
                        value={productState?.totalrating}
                        edit={false}
                      />
                      <p className="mb-0 ">Based on 2 Reviews</p>
                    </div>
                  </div>

                  {orderedProduct && (
                    <div>
                      <a
                        className="text-dark text-decoration-underline"
                        href="/"
                      >
                        Write a Review
                      </a>
                    </div>
                  )}
                </div>
                <div className="review-form py-4">
                  <h4 className="mb-2">Write Review</h4>

                  <div>
                    <ReactStars
                      count={5}
                      size={24}
                      activeColor={"#ffd700"}
                      value={0}
                      edit={true}
                      onChange={(e) => {
                        setstart(e);
                      }}
                    />
                  </div>

                  <div className="mt-3">
                    <textarea
                      className="w-100 form-control"
                      cols="30"
                      rows="4"
                      placeholder="Comments"
                      onChange={(e) => {
                        setcomment(e.target.value);
                      }}
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-end mt-3">
                    <button
                      className="button border-0"
                      type="button"
                      onClick={addRatingToProduct}
                    >
                      Submit Review
                    </button>
                  </div>
                </div>
                <div className="reviews mt-3">
                  {productState &&
                    productState?.ratings?.map((item, index) => {
                      return (
                        <div className="review" key={index}>
                          <div className="d-flex gap-10 align-items-center mt-3">
                            <h6 className="mb-0">
                              {item?.userName} {item?.userLastName}
                            </h6>
                            <ReactStars
                              count={5}
                              size={24}
                              activeColor={"#ffd700"}
                              value={item?.start}
                              edit={false}
                            />
                          </div>
                          <p className="mt-3">{item?.comment}</p>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="section-heading">
              <h3>Our Popular Products</h3>
            </div>
          </div>
          <div className="row">
            <ProductCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
