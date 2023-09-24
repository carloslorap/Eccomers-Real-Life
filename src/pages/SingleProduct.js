import React, { useState } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import Color from "../components/Color";
import {TbGitCompare} from 'react-icons/tb'
import {AiOutlineHeart} from 'react-icons/ai'


const SingleProduct = () => {
  const props = {
    width: 500,
    height: 500,
    zoomWidth: 400,
    img: "images/tab1.jpg",
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
                  <img src="images/tab1.jpg" alt="" className="img-fluid" />
                </div>
                <div>
                  <img src="images/tab.jpg" alt="" className="img-fluid" />
                </div>
                <div>
                  <img src="images/tab2.jpg" alt="" className="img-fluid" />
                </div>
                <div>
                  <img src="images/tab3.jpg" alt="" className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title">
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lore
                  </h3>
                </div>
                <div className="border-bottom py-3">
                  <p className="price">$100.00</p>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      activeColor={"#ffd700"}
                      value={2}
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
                    <p className="product-data my-2">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Brand:</h3>{" "}
                    <p className="product-data my-2">Havells</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Category:</h3>{" "}
                    <p className="product-data my-2">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Tags:</h3>{" "}
                    <p className="product-data my-2">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Availablity:</h3>{" "}
                    <p className="product-data my-2">In Stock</p>
                  </div>
                  <div className="d-flex gap-10 flex-column mt-2 mb-3">
                    <h3 className="product-heading">Size:</h3>{" "}
                    <div className="d-flex flex-wrap gap-15">
                      <span className="badge border border-1 bg-white text-dark border-sencodary">S</span>
                      <span className="badge border border-1 bg-white text-dark border-sencodary">M</span>
                      <span className="badge border border-1 bg-white text-dark border-sencodary">L</span>
                      <span className="badge border border-1 bg-white text-dark border-sencodary">XL</span>
                    </div>
                  </div>
                  <div className="d-flex gap-10 flex-column mt-2 mb-3">
                    <h3 className="product-heading">Color:</h3>{" "}
                    <Color/>
                  </div>
                  <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
                    <h3 className="product-heading">Quantity:</h3>{" "}
                    <div>
                      <input type="number" min={1} max={10} className="form-control" style={{width:"70px"}}/>
                    </div>

                    <div className="d-flex align-items-center gap-30 ms-5">
                    <button className="button border-0">Add to Cart</button>
                    <button to="/signup" className="button signup">But it Now</button>
             
                    </div>


                  </div>
                  <div className="d-flex align-items-center gap-15">
                    <div><a href="/"> <TbGitCompare className="fs-5 me-2"/>Add to Compare</a></div>
                    <div><a href="/"><AiOutlineHeart className="fs-5 me-2"/>Add to Wishlist</a></div>
                  </div>

                  <div className="d-flex gap-10 flex-column my-3">
                    <h3 className="product-heading">Shipping & Returns:</h3>{" "}
                    <p className="product-data">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>

                  <div className="d-flex gap-10 flex-column my-3">
                    <h3 className="product-heading">Copy product Link:</h3>{" "}
                    <p className="product-data my-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lore
                  querat accusamus et justo Lorem ipsum dolor sit amet,Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Lore querat
                  accusamus et justo elit.querat et justo
                </p>
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
                        value={2}
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
                  <h4 className="mb-2">Customer Reviews</h4>
                  <form className="d-flex flex-column gap-15">
                    <div>
                      <ReactStars
                        count={5}
                        size={24}
                        activeColor={"#ffd700"}
                        value={0}
                        edit={true}
                      />
                    </div>

                    <div>
                      <textarea
                        className="w-100 form-control"
                        cols="30"
                        rows="4"
                        placeholder="Comments"
                      ></textarea>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="button">Submit Review</button>
                    </div>
                  </form>
                </div>
                <div className="reviews mt-3">
                  <div className="review">
                    <div className="d-flex gap-10 align-items-center">
                      <h6 className="mb-0">Navdeep</h6>
                      <ReactStars
                        count={5}
                        size={24}
                        activeColor={"#ffd700"}
                        value={2}
                        edit={false}
                      />
                    </div>
                    <p className="mt-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Lore querat accusamus et justo Lorem ipsum dolor sit
                      amet,Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit. Lore querat accusamus et justo elit.querat et justo
                    </p>
                  </div>
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
