import React, { useEffect, useState } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getCart,
  removeProductCart,
  updateProductCart,
} from "../features/user/userSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const [productUpdated, setproductUpdated] = useState(null);
  const [totalAmount, settotalAmount] = useState(null);
  const userCartState = useSelector((state) => state?.auth?.cartProducts);

  useEffect(() => {
    dispatch(getCart());
  }, []);

  useEffect(() => {
    if (productUpdated !== null) {
      dispatch(
        updateProductCart({
          cartItemId: productUpdated?.cartItemId,
          newQuantity: productUpdated?.quantity,
        })
      );
      
      setTimeout(() => {
        dispatch(getCart());
      }, 200);
    }
  }, [productUpdated,dispatch]);

  const deleteACartProduct = (id) => {
    dispatch(removeProductCart(id));
    setTimeout(() => {
      dispatch(getCart());
    }, 200);
  };
  useEffect(() => {
    let suma = 0;
    for (let index = 0; index < userCartState?.length; index++) {
      suma =
        suma +
        Number(userCartState[index]?.quantity) *
          Number(userCartState[index]?.price);
      settotalAmount(suma);
    }
  }, [userCartState]);
  return (
    <>
      <Meta title={"Cart"} />
      <BreadCrumb title="Cart" />
      <section className="cart-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="cart-header py-3 d-flex justify-content-between align-items-center">
                <h4 className="cart-col-1">Product</h4>
                <h4 className="cart-col-2">Price</h4>
                <h4 className="cart-col-3">Quantity</h4>
                <h4 className="cart-col-4">Total</h4>
              </div>
              {userCartState &&
                userCartState?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center"
                    >
                      <div className="cart-col-1 gap-15 d-flex align-items-center">
                        <div className="w-25">
                          <img
                            src={item?.productId?.images[0]?.url}
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                        <div className="w-75">
                          <p>{item?.productId?.title}</p>
                          <p className="d-flex gap-2 mb-0">
                            Color:{" "}
                            <ul className="colors ps-0">
                              <li
                                style={{ backgroundColor: item?.color?.title }}
                              ></li>
                            </ul>
                          </p>
                          <p>Brand: {item?.productId?.brand}</p>
                        </div>
                      </div>
                      <div className="cart-col-2">
                        <h5 className="price">${item?.price}</h5>
                      </div>
                      <div className="cart-col-3 d-flex align-items-center gap-15">
                        <div>
                          <input
                            type="number"
                            min={1}
                            max={10}
                            name={"quantity" + item?._id}
                            className="form-control"
                            id={"quantity" + item?._id}
                            value={
                              productUpdated?.quantity
                                ? productUpdated?._id
                                : item?.quantity
                            }
                            onChange={(e) => {
                              setproductUpdated({
                                cartItemId: item?._id,
                                quantity: e.target.value,
                              });
                            }}
                          />
                        </div>
                        <div>
                          <AiFillDelete
                            className="text-danger"
                            onClick={() => deleteACartProduct(item?._id)}
                          />
                        </div>
                      </div>
                      <div className="cart-col-4">
                        <div className="cart-col-2">
                          <h5 className="price">
                            ${item?.price * item?.quantity}
                          </h5>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="col-12 py-2 mt-4">
              <div className="d-flex justify-content-between align-items-baseline">
                <Link to="/" className="button">
                  Continue To Shopping
                </Link>
                {(totalAmount !== null || totalAmount !== 0) && (
                  <div className="d-flex flex-column align-items-end">
                    <h4>SubTotal: $ {totalAmount}</h4>
                    <p>Taxes and shipping calculate at checkout</p>
                    <Link to="/checkout" className="button">
                      checkout
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
