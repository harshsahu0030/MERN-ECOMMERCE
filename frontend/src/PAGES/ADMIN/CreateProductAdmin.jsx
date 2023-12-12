import React, { useEffect, useState } from "react";
import "../../styles/createProductAdmin.scss";
import Header from "../../COMPONENTS/Header";
import SidebarAdmin from "../../COMPONENTS/ADMIN/SidebarAdmin";
import BackToTop from "../../COMPONENTS/Backtotop";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesAction } from "../../actions/categoryAction";
import { createProductAction } from "../../actions/productAction";

const CreateProductAdmin = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.getCategories);
  const [categoryArr, setCategoryArr] = useState([]);
  const [typeArr, setTypeArr] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    mrp: Number,
    price: Number,
    gender: "",
    category: "",
    type: "",
    color: "",
    stock: Number,
    productDetails: "",
    sizeAndFit: "",
    materialAndCare: "",
    completeLook: "",
  });
  const [images, setImages] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCreateProduct = (e) => {
    e.preventDefault();

    const finalFormData = {
      ...formData,
      images,
    };

    dispatch(createProductAction(finalFormData));
  };

  const createProductImagesChange = (e) => {
    const files = Array.from(e.target.files);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  const handleSelectDataChangeGender = async (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    setCategoryArr(
      data.categories.find((cat) => cat.gender === e.target.value).categories
    );
  };

  const handleSelectDataChangeCategory = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    setTypeArr(
      categoryArr.find((t) => {
        return t.category === e.target.value;
      }).types
    );
  };

  const handleSelectDataChangeType = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    dispatch(getCategoriesAction());
  }, [dispatch]);
  return (
    <>
      <Header />
      {data && (
        <>
          <div className="createproductadmin_container">
            <SidebarAdmin />
            <div className="createproductadmin_right">
              <form onSubmit={handleCreateProduct}>
                <h1>CREATE NEW PRODUCT</h1>

                <div className="createproduct_inputs">
                  <label className="createproduct_label" htmlFor="name">
                    Name :
                  </label>
                  <input
                    name="name"
                    onChange={handleChange}
                    value={formData.name}
                    className="createproduct_input"
                    type="text"
                    id="name"
                    placeholder="Enter Product Name"
                  />
                </div>

                <div className="createproduct_inputs">
                  <label className="createproduct_label" htmlFor="description">
                    Decription :
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="createproduct_textarea"
                    type="text"
                    id="description"
                    placeholder="Enter Product Decription"
                  />
                </div>

                <div className="createproduct_inputs">
                  <div className="createproduct_area">
                    <div className="createproduct_inputs">
                      <label className="createproduct_label" htmlFor="mrp">
                        Market Price (MRP) :
                      </label>
                      <input
                        name="mrp"
                        value={formData.mrp}
                        onChange={handleChange}
                        className="createproduct_input"
                        type="number"
                        id="mrp"
                        placeholder="Enter MRP"
                      />
                    </div>

                    <div className="createproduct_inputs">
                      <label className="createproduct_label" htmlFor="price">
                        Selling Price :
                      </label>
                      <input
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        className="createproduct_input"
                        type="number"
                        id="price"
                        placeholder="Enter Selling Price"
                      />
                    </div>
                  </div>
                </div>

                <div className="createproduct_inputs">
                  <div className="createproduct_area">
                    <div className="createproduct_inputs">
                      <label className="createproduct_label" htmlFor="gender">
                        Gender :
                      </label>
                      <select
                        onChange={handleSelectDataChangeGender}
                        className="createproduct_select"
                        name="gender"
                        id="gender"
                      >
                        <option value={""}>Choose Gender</option>
                        {data.categories.map((g) => (
                          <option key={g._id} value={g.gender}>
                            {g.gender}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="createproduct_inputs">
                      <label className="createproduct_label" htmlFor="category">
                        Category :
                      </label>
                      <select
                        className="createproduct_select"
                        name="category"
                        id="category"
                        onChange={handleSelectDataChangeCategory}
                      >
                        <option value={""}>Choose Category</option>
                        {categoryArr &&
                          categoryArr.map((c) => (
                            <option key={c._id} value={c.category}>
                              {c.category}
                            </option>
                          ))}
                      </select>
                    </div>

                    <div className="createproduct_inputs">
                      <label className="createproduct_label" htmlFor="type">
                        Type :
                      </label>
                      <select
                        className="createproduct_select"
                        name="type"
                        id="type"
                        onChange={handleSelectDataChangeType}
                      >
                        <option value={""}>Choose Type</option>
                        {typeArr &&
                          typeArr.map((t) => (
                            <option key={t._id} value={t.type}>
                              {t.type}
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="createproduct_inputs">
                  <div className="createproduct_area">
                    <div className="createproduct_inputs">
                      <label className="createproduct_label" htmlFor="stock">
                        Stock :
                      </label>
                      <input
                        name="stock"
                        value={formData.stock}
                        onChange={handleChange}
                        className="createproduct_input"
                        type="number"
                        id="stock"
                        placeholder="Enter Stock"
                      />
                    </div>

                    <div className="createproduct_inputs">
                      <label className="createproduct_label" htmlFor="color">
                        Product Colour :
                      </label>
                      <input
                        name="color"
                        value={formData.color}
                        onChange={handleChange}
                        className="createproduct_input"
                        type="text"
                        id="color"
                        placeholder="Enter Product colour"
                      />
                    </div>
                  </div>
                </div>

                <div className="createproduct_inputs">
                  <label
                    className="createproduct_label"
                    htmlFor="productDetails"
                  >
                    Product Details :
                  </label>
                  <textarea
                    name="productDetails"
                    value={formData.productDetails}
                    onChange={handleChange}
                    className="createproduct_textarea"
                    type="text"
                    id="productDetails"
                    placeholder="Enter Product Details"
                  />
                </div>
                <div className="createproduct_inputs">
                  <label className="createproduct_label" htmlFor="sizeAndFit">
                    Size And Fit :
                  </label>
                  <textarea
                    name="sizeAndFit"
                    value={formData.sizeAndFit}
                    onChange={handleChange}
                    className="createproduct_textarea"
                    type="text"
                    id="sizeAndFit"
                    placeholder="Enter Product Size And Fit"
                  />
                </div>

                <div className="createproduct_inputs">
                  <label
                    className="createproduct_label"
                    htmlFor="materialAndCare"
                  >
                    Material And Care :
                  </label>
                  <textarea
                    name="materialAndCare"
                    value={formData.materialAndCare}
                    onChange={handleChange}
                    className="createproduct_textarea"
                    type="text"
                    id="materialAndCare"
                    placeholder="Enter Product Material And Care"
                  />
                </div>

                <div className="createproduct_inputs">
                  <label className="createproduct_label" htmlFor="completeLook">
                    Complete Look :
                  </label>
                  <textarea
                    name="completeLook"
                    value={formData.completeLook}
                    onChange={handleChange}
                    className="createproduct_textarea"
                    type="text"
                    id="completeLook"
                    placeholder="Enter Product Complete Look"
                  />
                </div>

                <div className="createProduct_image">
                  {images.length > 0
                    ? images.map((image, index) => (
                        <img key={index} src={image} alt="Product Preview" />
                      ))
                    : "No Image Selected"}
                </div>

                <div className="createproduct_inputs">
                  <label className="createproduct_label" htmlFor="image">
                    Images :
                  </label>
                  <input
                    className="createproduct_input"
                    type="file"
                    id="image"
                    accept="image/*"
                    multiple
                    onChange={createProductImagesChange}
                  />
                </div>

                <button className="createproduct_btn" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </>
      )}

      <BackToTop />
    </>
  );
};

export default CreateProductAdmin;
