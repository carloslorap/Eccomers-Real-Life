import React, { useEffect } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { useDispatch, useSelector } from "react-redux";
import { getUserWishlist } from "../features/user/userSlice";
import { addToWishList } from "../features/product/productSlice";
const Wishlist = () => {

  const dispatch= useDispatch()
  const wishlistState = useSelector((state)=>state.auth?.wishlistProducts?.wishlist)
  
  console.log(wishlistState)
  const removeFromWishlist =(id)=>{
    dispatch(addToWishList(id))
    setTimeout(()=>{
      dispatch(getUserWishlist())
    },300)
  }

  useEffect(()=>{
    getWishlistFromDb()
  },[])
  const getWishlistFromDb =()=>{
    dispatch(getUserWishlist())
  }
  return (
    <>
      <Meta title={"Wishlist "} />
      <BreadCrumb title="Wishlist" />
      <div className="wishlist-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            {/* {
              wishlistState.length === 0 && <div>No data</div>
            } */}
            {
              wishlistState?.map((item,index)=>{
                return(
                  <div className="col-3" key={index}>
              <div className="wishlist-card position-relative">
                <img onClick={()=>{removeFromWishlist(item?._id)}}
                  src="images/cross.svg"
                  className="position-absolute cross  img-fluid "
                  alt=""
                />
                <div className="wishlist-card-image">
                  <img
                    src={item?.images[0].url}
                    alt=""
                    className="img-fluid w-100 test-img"
                  />
                </div>

                <div className="py-3 px-3">
                  <h5 className="title">
                    {item?.title}
                  </h5>
                  <h6 className="price">$ {item?.price}</h6>
                </div>
              </div>
            </div>
                )
              })
            }

       

      

          
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
