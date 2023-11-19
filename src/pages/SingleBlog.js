import React, { useEffect } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { getSingleBlog } from "../features/blog/blogSlice";

const SingleBlog = () => {
  const blogState = useSelector((state) => state?.blog?.singleBlog);
  const location = useLocation();
  const getBlogId = location.pathname.split("/")[2];
  console.log(getBlogId)
  const dispatch = useDispatch();

  useEffect(() => {
    getABlog();
  }, []);
  const getABlog = () => {
    dispatch(getSingleBlog(getBlogId));
  };

  return (
    <>
      <Meta title={blogState?.title} />
      <BreadCrumb title={blogState?.title} />

      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to="/blog" className="d-flex align-items-center gap-10">
                  {" "}
                  <HiOutlineArrowLeft className="fs-6" />
                  Go back to Blogs
                </Link>
                <h3 className="title">{blogState?.title}</h3>
                <img
                  src={blogState?.images[0]?.url}
                  className="img-fluid w-100 my-4"
                  alt="images"
                />
                <p  dangerouslySetInnerHTML={{ __html: blogState?.description }}>
                
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
