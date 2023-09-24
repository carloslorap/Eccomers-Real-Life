import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

const ProductCard = (props) => {
  const { grid } = props;
  const location = useLocation();
  return (
    <div
      className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}
    >
      <div className="product-card  position-relative">
        <div className="wishlist-icon position-absolute">
          <Link >
            <img src="images/wish.svg" alt="" />
          </Link>
        </div>
        <div className="product-image">
          <img src="images/tab1.jpg" className="img-fluid" alt="" />
          <img src="images/tab.jpg" className="img-fluid" alt="" />
        </div>
        <div className="product-details">
          <h6 className="brand">Havels</h6>
          <h5 className="product-title">
            Kids headphones bulk 10 pack multi colored for Students
          </h5>
          <ReactStars
            count={5}
            size={24}
            activeColor={"#ffd700"}
            value={2}
            edit={false}
          />
          <p className={`description ${(grid === 12 ) ? "d-block":"d-none" } `}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation  laboris nisi ut  ex ea  .</p>
          <p className="price">$100.00</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <Link>
              <img src="images/prodcompare.svg" alt="" />
            </Link>
            <Link to="/product">
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
};

export default ProductCard;
