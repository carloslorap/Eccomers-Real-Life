import React, { useEffect } from "react";
import { Autoplay } from "swiper";
import { Link, useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Container from "../components/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatch, useSelector } from "react-redux";
import { Banner } from "../utils/Data";
import { getBlogs } from "../features/blog/blogSlice";
import moment from "moment";
import { getProducts } from "../features/product/productSlice";
import ReactStars from "react-rating-stars-component";
import { addToWishList } from "../features/product/productSlice";

const Home = () => {
  const blogState = useSelector((state) => state?.blog?.getAllBlog);
  const productState = useSelector((state) => state?.product?.product);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    getAllBlogs();
    GetAllProducts();
  }, []);
  const getAllBlogs = () => {
    dispatch(getBlogs());
  };

  const GetAllProducts = () => {
    dispatch(getProducts());
  };
  const addtowish = (id) => {
    dispatch(addToWishList(id));
  };

  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <Swiper
              direction="horizontal"
              slidesPerView={1}
              loop={true}
              speed={1000}
              modules={[Autoplay]}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
            >
              {Banner.map((ban, index) => (
                <SwiperSlide
                  key={index}
                  className="main-banner position-relative"
                >
                  <img src={ban.image} className="img-fluid rounded-3" alt="" />
                  <div className="main-banner-content position-absolute">
                    <h4>{ban.desc}</h4>
                    <h5>{ban.name}</h5>
                    <p>{ban.precio}</p>
                    <Link className="button">BUY NOW</Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative ">
                <img
                  src="images/catbanner-01.jpg"
                  className="img-fluid rounded-3"
                  alt=""
                />
                <div className="small-banner-content  position-absolute">
                  <h4>Best Sake.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>
                    From $999.00 <br /> or $41.62/mo
                  </p>
                </div>
              </div>

              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-02.jpg"
                  className="img-fluid rounded-3"
                  alt=""
                />
                <div className="small-banner-content  position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>But Ipad Air.</h5>
                  <p>
                    From $999.00 <br /> or $41.62/mo
                  </p>
                </div>
              </div>

              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-03.jpg"
                  className="img-fluid rounded-3"
                  alt=""
                />
                <div className="small-banner-content  position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>But Ipad Air.</h5>
                  <p>
                    From $999.00 <br /> or $41.62/mo
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-04.jpg"
                  className="img-fluid rounded-3"
                  alt=""
                />
                <div className="small-banner-content  position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>But Ipad Air.</h5>
                  <p>
                    From $999.00 <br />
                    or $41.62/mo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="servies d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-15">
                <img src="images/service.png" alt="" />
                <div>
                  <h6>Free Shipping</h6>
                  <p className="mb-0">From all orders over $5</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15">
                <img src="images/service-02.png" alt="" />
                <div>
                  <h6>Daily Surprise Offers</h6>
                  <p className="mb-0">Save uupto 25% off</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15">
                <img src="images/service-03.png" alt="" />
                <div>
                  <h6>Support 24/7</h6>
                  <p className="mb-0">Shop with an expert</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15">
                <img src="images/service-04.png" alt="" />
                <div>
                  <h6>Affordable Prices</h6>
                  <p className="mb-0">Get Factory Default Price</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15">
                <img src="images/service-05.png" alt="" />
                <div>
                  <h6>Secure Payments</h6>
                  <p className="mb-0">100% Protected Payment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex align-items-center flex-wrap justify-content-between">
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/images.jpg" alt="" />
                </div>

                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="" />
                </div>

                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="" />
                </div>

                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="" />
                </div>

                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/images.jpg" alt="" />
                </div>

                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="" />
                </div>

                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="" />
                </div>

                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="section-heading">
              <h3>Featured Collection</h3>
              <div className="row mt-5">
            {productState &&
              productState?.map((item, index) => {
                if (item.tags === "featured") {
                  return (
                    <div key={index} className={"col-3"}>
                      <div className="product-card  position-relative">
                        <div className="wishlist-icon position-absolute">
                          <button
                            className="border-0 bg-transparent"
                            onClick={() => addtowish(item?._id)}
                          >
                            <img src="images/wish.svg" alt="" />
                          </button>
                        </div>
                        <div className="product-image">
                          <img
                            src={item?.images[0]?.url}
                            className="img-fluid"
                            alt=""
                          />
                          <img src={item?.images[1]?.url} className="img-fluid" alt="" />
                        </div>
                        <div className="product-details">
                          <h6 className="brand">{item?.brand}</h6>
                          <h5 className="product-title">{item?.title}</h5>
                          <ReactStars
                            count={5}
                            size={24}
                            activeColor={"#ffd700"}
                            value={item?.totalrating}
                            edit={false}
                          /> 

                          <p className="price">$ {item?.price}</p>
                        </div>
                        <div className="action-bar position-absolute">
                          <div className="d-flex flex-column gap-15">
                            <button className="border-0 bg-transparent">
                              <img src="images/prodcompare.svg" alt="" />
                            </button>
                            <button className="border-0 bg-transparent">
                              <img src="images/view.svg" alt="" onClick={()=>navigate("/product/" + item?._id)}/>
                            </button>
                            <button className="border-0 bg-transparent">
                              <img src="images/add-cart.svg" alt="" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
          </div>
            </div>
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="famous-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="images/smart.jpg" className="img-fluid" alt="" />
                <div className="famous-content position-absolute ">
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>From $399 or $17.45/mo. for 24 mo.</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="images/prod-1.jpg" className="img-fluid" alt="" />
                <div className="famous-content position-absolute ">
                  <h5 className="text-dark">Studio Display</h5>
                  <h6 className="text-dark"> nits of brightness</h6>
                  <p className="text-dark">
                    From $399 or $17.45/mo. for 24 mo.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="images/prod-2.jpg" className="img-fluid" alt="" />
                <div className="famous-content position-absolute ">
                  <h5 className="text-dark">smartphones</h5>
                  <h6 className="text-dark">Smartphone 13 Pro</h6>
                  <p className="text-dark">
                    From $399 or $17.45/mo. for 24 mo.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="images/prod-3.jpg" className="img-fluid" alt="" />
                <div className="famous-content position-absolute ">
                  <h5 className="text-dark">home-speakers</h5>
                  <h6 className="text-dark">Room-filling Sound</h6>
                  <p className="text-dark">
                    From $399 or $17.45/mo. for 24 mo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="special-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="section-heading">
              <h3>Special Products</h3>
            </div>
          </div>
          <div className="row">
            {productState &&
              productState?.map((item, index) => {
                if (item.tags === "special") {
                  return (
                    <SpecialProduct
                      key={index}
                      brand={item?.brand}
                      title={item?.title}
                      totalrating={item?.totalrating}
                      price={item?.price}
                      sold={item?.sold}
                      quantity={item?.quantity}
                      images={item?.images}
                    />
                  );
                }
              })}
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
            {productState &&
              productState?.map((item, index) => {
                if (item.tags === "popular") {
                  return (
                    <div key={index} className={"col-3"}>
                      <div className="product-card  position-relative">
                        <div className="wishlist-icon position-absolute">
                          <button
                            className="border-0 bg-transparent"
                            onClick={() => addtowish(item?._id)}
                          >
                            <img src="images/wish.svg" alt="" />
                          </button>
                        </div>
                        <div className="product-image">
                          <img
                            src={item?.images[0]?.url}
                            className="img-fluid"
                            alt=""
                          />
                          <img src={item?.images[1]?.url} className="img-fluid" alt="" />
                        </div>
                        <div className="product-details">
                          <h6 className="brand">{item?.brand}</h6>
                          <h5 className="product-title">{item?.title}</h5>
                          <ReactStars
                            count={5}
                            size={24}
                            activeColor={"#ffd700"}
                            value={item?.totalrating}
                            edit={false}
                          /> 

                          <p className="price">$ {item?.price}</p>
                        </div>
                        <div className="action-bar position-absolute">
                          <div className="d-flex flex-column gap-15">
                            <button className="border-0 bg-transparent">
                              <img src="images/prodcompare.svg" alt="" />
                            </button>
                            <button className="border-0 bg-transparent">
                              <img src="images/view.svg" alt="" onClick={()=>navigate("/product/" + item?._id)}/>
                            </button>
                            <button className="border-0 bg-transparent">
                              <img src="images/add-cart.svg" alt="" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
          </div>
        </div>
      </section>

      <section className="marque-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img src="images/brand-01.png" alt="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-02.png" alt="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-03.png" alt="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-04.png" alt="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-05.png" alt="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-06.png" alt="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-07.png" alt="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-08.png" alt="" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="section-heading">
              <h3>Our Latest Blogs</h3>
            </div>
          </div>
          <div className="row ">
            {blogState?.map((item, index) => {
              return (
                <div className="col-3 mb-3">
                  <BlogCard
                    id={item?._id}
                    title={item?.title}
                    description={item?.description}
                    imagen={item?.images[0]?.url}
                    date={moment(item?.createdAt).format(
                      "MMMM Do YYYY, h:mm a"
                    )}
                  />
                </div>
              );
            })}
            {/* <div className="">
              <BlogCard />
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
