import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";

import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../features/product/productSlice";

const OurStore = () => {
  const [grid, setGrid] = useState(4);
  const [brands, setbrands] = useState([]);
  const [categories, setcategories] = useState([]);
  const [tags, settags] = useState([]);
  const [minPrice, setminPrice] = useState(null);
  const [maxPrice, setmaxPrice] = useState(null);
  const [colors, setcolors] = useState([]);

  //filtrar state
  const [brand, setbrand] = useState(null);
  const [category, setcategory] = useState(null);
  const [tag, settag] = useState(null);
  const [color, setcolor] = useState(null);

  const productState = useSelector((state) => state?.product?.product);
  const dispatch = useDispatch();

  useEffect(() => {
    let newBrands = [];
    let category = [];
    let newTags = [];
    let newColors = [];
    for (let index = 0; index < productState?.length; index++) {
      const element = productState[index];
      newBrands.push(element?.brand);
      category.push(element?.category);
      newTags.push(element?.tags);
      newColors.push(element?.color[0]);
      for (let index = 0; index < productState?.length; index++) {
        const element = productState[index];
        if (element.color) {
          for (
            let colorIndex = 0;
            colorIndex < element.color.length;
            colorIndex++
          ) {
            newColors.push(element.color[colorIndex]);
          }
        }
      }
    }
    setbrands(newBrands);
    setcategories(category);
    settags(newTags);
    setcolors(newColors);
  }, [productState]);

  const handleColorFilter = (selectedColor) => {
   
    setcolor(selectedColor);
    getAllProducts();
  };

  const resetFilters = () => {
    setbrand(null);
    setcategory(null);
    settag(null);
    setminPrice(null);
    setmaxPrice(null);
    setcolor(null)
    getAllProducts();
  };

  const getAllProducts = () => {
    dispatch(getProducts({ brand, category, tag, minPrice, maxPrice, color }));
  };

  useEffect(() => {
    getAllProducts();
  }, [brand, category, tag, maxPrice, minPrice, color]);

  return (
    <>
      <Meta title={"Our Store"} />
      <BreadCrumb title="Our Store" />
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Shop By Categories</h3>
                <div>
                  <ul className="ps-0">
                    {categories &&
                      [...new Set(categories)].map((item, index) => {
                        return (
                          <li key={index} onClick={() => setcategory(item)}>
                            {item}
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>

              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Brands</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                    {brands &&
                      [...new Set(brands)].map((item, index) => {
                        return (
                          <span
                            key={index}
                            onClick={() => setbrand(item)}
                            className="text-capitalize badge bg-light text-secondary rounded-3 py-2 px-3"
                            style={{ cursor: "pointer" }}
                          >
                            {item}
                          </span>
                        );
                      })}
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter By</h3>
                <div>
                  <h5 className="sub-title">Availablity</h5>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                      />
                      <label className="form-check-label">In Stock (2)</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                      />
                      <label className="form-check-label">
                        Out of Stock (0)
                      </label>
                    </div>
                  </div>
                  <h5 className="sub-title">Price</h5>
                  <div className="d-flex align-items-center gap-10">
                    <div class="form-floating mb-3">
                      <input
                        type="email"
                        class="form-control"
                        placeholder="name@example.com"
                        onChange={(e) => {
                          setminPrice(e.target.value);
                        }}
                      />
                      <label for="floatingInput">$ From </label>
                    </div>
                    <div class="form-floating mb-3">
                      <input
                        type="email"
                        class="form-control"
                        placeholder="name@example.com"
                        onChange={(e) => {
                          setmaxPrice(e.target.value);
                        }}
                      />
                      <label for="floatingInput">To </label>
                    </div>
                  </div>
                  <h5 className="sub-title">Colors</h5>

                  <div className="d-flex flex-wrap gap-10">
                    {colors &&
                      [...new Set(colors)].map((item, index) => {
                        return (
                          <p className="d-flex gap-2 mb-0" >
                            <ul className="colors ps-0" key={index}>
                              <li
                                onClick={() => handleColorFilter(item._id)}
                                style={{ backgroundColor: item.title }}
                              ></li>
                            </ul>
                          </p>
                        );
                      })}
                  </div>
                </div>
              </div>

              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Tags</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                    {tags &&
                      [...new Set(tags)].map((item, index) => {
                        return (
                          <span
                            key={index}
                            onClick={() => settag(item)}
                            className="text-capitalize badge bg-light text-secondary rounded-3 py-2 px-3"
                            style={{ cursor: "pointer" }}
                          >
                            {item}
                          </span>
                        );
                      })}
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Random Product</h3>
                <div>
                  <div className="ramdon-products d-flex">
                    <div className="w-50">
                      <img
                        src="images/watch.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="w-50">
                      <h5>Kids headphones bulk 10 pack multi colored</h5>
                      <ReactStars
                        count={5}
                        size={24}
                        activeColor={"#ffd700"}
                        value={2}
                        edit={false}
                      />
                      <b className="price">$100.00</b>
                    </div>
                  </div>
                  <div className="ramdon-products d-flex">
                    <div className="w-50">
                      <img src="images/tab.jpg" className="img-fluid" alt="" />
                    </div>
                    <div className="w-50">
                      <h5>Kids headphones bulk 10 pack multi colored</h5>
                      <ReactStars
                        count={5}
                        size={24}
                        activeColor={"#ffd700"}
                        value={4}
                        edit={false}
                      />
                      <b className="price">$300.00</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid mb-4">
                <div className="d-flex  justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0 d-block" style={{ width: "60px" }}>
                      Choose:
                    </p>

                    <button
                      className="p-2 border-0 rounded"
                      style={{ background: "#F2F2F2" }}
                      onClick={resetFilters}
                    >
                      All Products
                    </button>
                  </div>
                  <div className="d-flex align-items-center gap-10">
                    <p className="totalproducts mb-0">21 Products</p>
                    <div className="d-flex gap-10 align-items-center grid">
                      <img
                        src="images/gr4.svg"
                        className="d-block img-fluid"
                        alt="grid"
                        onClick={() => {
                          setGrid(3);
                        }}
                      />

                      <img
                        src="images/gr3.svg"
                        className="d-block img-fluid"
                        alt="grid"
                        onClick={() => {
                          setGrid(4);
                        }}
                      />
                      <img
                        src="images/gr2.svg"
                        className="d-block img-fluid"
                        alt="grid"
                        onClick={() => {
                          setGrid(24);
                        }}
                      />
                      <img
                        src="images/gr.svg"
                        className="d-block img-fluid"
                        alt="grid"
                        onClick={() => {
                          setGrid(12);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="products-list pb-5">
                <div className="d-flex gap-10 flex-wrap">
                  <ProductCard data={productState} grid={grid} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStore;
