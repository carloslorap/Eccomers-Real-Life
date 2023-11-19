import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const SpecialProduct = (props) => {
  const {title,brand,totalrating,price,sold,quantity,images} = props
  return (
    <>
    <div className="col-4 mb-3">
      <div className="special-product-card">
        <div className="d-flex">
          <div>
            <img src={images[0]?.url} className="img-fluid" alt="" />
          </div>
          <div className="special-product-content">
            <h5 className="brand">{brand}</h5>
            <h6 className="title">{title}</h6>
            <ReactStars
              count={5}
              size={24}
              activeColor={"#ffd700"}
              value={totalrating}
              edit={false}
            />
            <p className="price">
              <span className="red-p">${price-100}</span> &nbsp; <strike>${price}</strike>
            </p>
            <div className="discount-till d-flex align-items-center gap-10">
              <p className="mb-0">
                <b>15</b> days
              </p>
              <div className="d-flex gap-10 align-items-center">
                <span className="badge rounded-circle p-2 bg-danger">05</span>:
                <span className="badge rounded-circle p-2 bg-danger">10</span>:
                <span className="badge rounded-circle p-2 bg-danger">30</span>
              </div>
           
            </div>
            <div className="prod-count my-3">
                <p>Products: {quantity}</p>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: quantity / quantity + sold * 100 + "%" }}
                    aria-valuenow={quantity / quantity + sold * 100 }
                    aria-valuemin={quantity}
                    aria-valuemax={sold + quantity} 
                  ></div>
                </div>
              </div>
              <Link className="button">Add to Cart</Link>
          </div>
        </div>
      </div>


      
    </div>


   


    </>
  );
};

export default SpecialProduct;
