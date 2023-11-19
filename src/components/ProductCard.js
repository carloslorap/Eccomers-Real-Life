import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToWishList } from "../features/product/productSlice";

const ProductCard = (props) => {
  const { grid, data } = props;
  const location = useLocation();
  const dispatch = useDispatch();
  const [isInWishList, setIsInWishList] = useState(false);
  const addtowish = (id) => {
    dispatch(addToWishList(id));
  };
  return (
    <>
      {data?.map((item, index) => {
        return (
          <div
            key={index}
            className={`${
              location.pathname === "/store" ? `gr-${grid}` : "col-3"
            }`}
          >
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
                <img src={item?.images[0]?.url} className="img-fluid test-2-img" alt="" />
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
                <p
                  className={`description ${
                    grid === 12 ? "d-block" : "d-none"
                  } `}
                  dangerouslySetInnerHTML={{ __html: item?.description }}
                ></p>
                <p className="price">$ {item?.price}</p>
              </div>
              <div className="action-bar position-absolute">
                <div className="d-flex flex-column gap-15">
                  <Link>
                    <img src="images/prodcompare.svg" alt="" />
                  </Link>
                  <Link to={"/product/" + item?._id}>
                    <img src="images/view.svg" alt="" />
                  </Link>
                  <Link>
                    <img src="images/add-cart.svg" alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductCard;
