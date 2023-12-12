import React, { useEffect, useRef, useState } from "react";
import "../styles/products.scss";
import Header from "../COMPONENTS/Header";
import Product from "../COMPONENTS/product/Product";
import BackToTop from "../COMPONENTS/Backtotop";
import SearchBox from "../COMPONENTS/shopnow/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsAction } from "../actions/productAction";
import { getCategoriesAction } from "../actions/categoryAction";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarIcon from "@mui/icons-material/Star";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Products = () => {
  const dispatch = useDispatch();
  const ref = useRef();
  const [gender, setGender] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [categoryArr, setCategoryArr] = useState([]);
  const [lPrice, setLPrice] = useState();
  const [hPrice, setHPrice] = useState();
  const [lRating, setLRating] = useState();
  const [hRating, setHRating] = useState();
  const [filterToggle, setFilterToggle] = useState(false);

  const { loading, data } = useSelector((state) => state.products);
  const { loading: catLoad, data: catData } = useSelector(
    (state) => state.getCategories
  );

  const handleSelectDataChangeGender = async (e) => {
    setGender(e.target.value);
    setCategoryArr(
      catData.categories.find((cat) => cat.gender === e.target.value).categories
    );
    setType("");
  };

  const handleSelectDataChangeCategory = (e) => {
    setType(e.target.value);
  };

  const handleRatingChange = (e) => {
    setLRating(e.target.value.split(",")[0]);
    setHRating(e.target.value.split(",")[1]);
  };

  const handlePriceChange = (e) => {
    setHPrice(e.target.value.split(",")[0]);
    setLPrice(e.target.value.split(",")[1]);
  };

  const handleShowCategory = () => {
    ref.current.style.display = "block";
    setFilterToggle(!filterToggle);
  };

  const handlehideCategory = () => {
    ref.current.style.display = "none";
    setFilterToggle(!filterToggle);
  };

  useEffect(() => {
    dispatch(getCategoriesAction());
  }, []);

  useEffect(() => {
    dispatch(
      getAllProductsAction(
        gender,
        category,
        type,
        lRating,
        hRating,
        lPrice,
        hPrice
      )
    );
  }, [dispatch, gender, category, type, lRating, hRating, lPrice, hPrice]);

  return (
    <>
      <Header />
      <div className="products_container">
        {catLoad ? (
          <h1>Loading</h1>
        ) : (
          <div className="products_left">
            <h3>
              FILTERS
              {filterToggle ? (
                <KeyboardArrowUpIcon onClick={handlehideCategory} />
              ) : (
                <KeyboardArrowDownIcon onClick={handleShowCategory} />
              )}
            </h3>

            <div className="products_filter_container" ref={ref}>
              <div className="products_categories">
                <h4>GENDERS</h4>

                {catData &&
                  catData.categories.map((g, index) => (
                    <div key={g._id}>
                      <input
                        value={g.gender}
                        onChange={handleSelectDataChangeGender}
                        type="radio"
                        name="gender"
                        id={`gender${index}`}
                      />
                      <label htmlFor={`gender${index}`}>
                        {g.gender.toUpperCase()}
                      </label>
                    </div>
                  ))}
              </div>

              {/* <div className="products_categories">
            <h4>CATEGORIES</h4>
            {catData &&
              catData.categories.map((g) =>
                g.categories.map((c) => (
                  <div key={c._id}>
                    <input
                      value={c.category}
                      onChange={(e) => setCategory(e.target.value)}
                      type="radio"
                      name="category"
                      id="category"
                    />
                    <label htmlFor="category">{c.category}</label>
                  </div>
                ))
              )}
          </div> */}

              <div className="products_categories">
                <h4>TYPES</h4>
                {gender
                  ? categoryArr
                      .map((e) =>
                        e.types.map((i, index) => (
                          <div key={i._id}>
                            <input
                              type="radio"
                              name="type"
                              id={`type${index}`}
                              value={i.type}
                              onChange={handleSelectDataChangeCategory}
                            />
                            <label htmlFor={`type${index}`}>
                              {i.type.toUpperCase()}
                            </label>
                          </div>
                        ))
                      )
                      .slice(0, 5)
                  : catData &&
                    catData.categories
                      .map((g) =>
                        g.categories.map((t, index) =>
                          t.types.map((c) => (
                            <div key={c._id}>
                              <input
                                value={c.type}
                                onChange={handleSelectDataChangeCategory}
                                type="radio"
                                name="type"
                                id={`type${index}`}
                              />
                              <label htmlFor={`type${index}`}>{c.type}</label>
                            </div>
                          ))
                        )
                      )
                      .slice(0, 5)}
              </div>

              <div className="products_categories">
                <h4>CUSTOMER REVIEWS</h4>
                <div>
                  <input
                    type="radio"
                    name="rating"
                    id="rating1"
                    value={["3.9", "5.1"]}
                    onChange={handleRatingChange}
                  />
                  <label htmlFor="rating1">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarOutlineIcon /> & Up
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="rating"
                    id="rating2"
                    value={["2.9", "4.1"]}
                    onChange={handleRatingChange}
                  />
                  <label htmlFor="rating2">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarOutlineIcon />
                    <StarOutlineIcon /> & Up
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="rating"
                    id="rating3"
                    value={["1.9", "3.1"]}
                    onChange={handleRatingChange}
                  />
                  <label htmlFor="rating3">
                    <StarIcon />
                    <StarIcon />
                    <StarOutlineIcon />
                    <StarOutlineIcon />
                    <StarOutlineIcon /> & Up
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="rating"
                    id="rating4"
                    value={["0.9", "2.1"]}
                    onChange={handleRatingChange}
                  />
                  <label htmlFor="rating4">
                    <StarIcon />
                    <StarOutlineIcon />
                    <StarOutlineIcon />
                    <StarOutlineIcon />
                    <StarOutlineIcon /> & Up
                  </label>
                </div>
              </div>

              <div className="products_categories">
                <h4>PRICES</h4>
                <div>
                  <input
                    type="radio"
                    name="price"
                    id="price1"
                    value={["0", "999"]}
                    onChange={handlePriceChange}
                  />
                  <label htmlFor="price1">Rs.0 - Rs.999</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="price"
                    id="price2"
                    value={["999", "1999"]}
                    onChange={handlePriceChange}
                  />
                  <label htmlFor="price2">Rs.999 - Rs.1999</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="price"
                    id="price3"
                    value={["1999", "2999"]}
                    onChange={handlePriceChange}
                  />
                  <label htmlFor="price3">Rs.1999 - Rs.2999</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="price"
                    id="price4"
                    value={["2999", "3999"]}
                    onChange={handlePriceChange}
                  />
                  <label htmlFor="price4">Rs.2999 - Rs.3999</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="price"
                    id="price"
                    value={["3999", "4999"]}
                    onChange={handlePriceChange}
                  />
                  <label htmlFor="price">Rs.3999 - Rs.4999</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="price"
                    id="price5"
                    value={["4999", "5999"]}
                    onChange={handlePriceChange}
                  />
                  <label htmlFor="price5">Rs.4999 - Rs.5999</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="price"
                    id="price6"
                    value={["5999", "99999"]}
                    onChange={handlePriceChange}
                  />
                  <label htmlFor="price6">Rs.5999 - above</label>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="products_right">
          <SearchBox />
          <div className="products_right_top">
            <span>Results : {data && data.filteredProductsCount} </span>
          </div>
          {!loading && (
            <div className="products_right_products">
              {data &&
                data.products.map((item, index) => (
                  <Product key={index} item={item} />
                ))}
            </div>
          )}
        </div>
      </div>
      <BackToTop />
    </>
  );
};

export default Products;
