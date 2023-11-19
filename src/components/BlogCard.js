import React from "react";
import { Link } from "react-router-dom";

const BlogCard = (props) => {
  const { id, title, description, date, imagen } = props;
  return (
    <>
      <div className="d-flex gap-3">
        <div className="blog-card">
          <div className="card-image">
            <img src={imagen} className="img-fluid" alt="" />
          </div>
          <div className="blog-content">
            <p className="date">{date}</p>
            <h5 className="title">{title}</h5>
            <p
              className="desc"
              dangerouslySetInnerHTML={{ __html: description }}
            ></p>
            <Link to={"/blog/" + id} className="button">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
