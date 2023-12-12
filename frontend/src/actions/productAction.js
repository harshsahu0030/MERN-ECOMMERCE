import axios from "axios";

export const getAllProductsAction =
  (
    gender = "",
    category = "",
    type = "",
    lRating = -1,
    hRating = 5,
    lPrice = 99999,
    hPrice = -1
  ) =>
  async (dispatch) => {
    try {
      dispatch({
        type: "GetAllProductsRequest",
      });

      let link = `/api/v1/products?ratings[gt]=${lRating}&ratings[lt]=${hRating}&price[gt]=${hPrice}&price[lt]=${lPrice}`;

      if (type && gender) {
        link = `/api/v1/products?gender=${gender}&type=${type}&ratings[gt]=${lRating}&ratings[lt]=${hRating}&price[gt]=${hPrice}&price[lt]=${lPrice}`;
      } else if (type) {
        link = `/api/v1/products?type=${type}&ratings[gt]=${lRating}&ratings[lt]=${hRating}&price[gt]=${hPrice}&price[lt]=${lPrice}`;
      } else if (gender) {
        link = `/api/v1/products?gender=${gender}&ratings[gt]=${lRating}&ratings[lt]=${hRating}&price[gt]=${hPrice}&price[lt]=${lPrice}`;
      }

      const { data } = await axios.get(link);

      dispatch({
        type: "GetAllProductsSuccess",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "GetAllProductsFailure",
        message: error.response.data.message,
      });
    }
  };

export const trendingProductsAction = () => async (dispatch) => {
  try {
    dispatch({
      type: "TrendingProductsRequest",
    });

    const link = `/api/v1/products/trending`;
    const { data } = await axios.get(link);

    dispatch({
      type: "TrendingProductsSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "TrendingProductsFailure",
      message: error.response.data.message,
    });
  }
};

export const topRatedProductsAction = () => async (dispatch) => {
  try {
    dispatch({
      type: "TopRatedProductsRequest",
    });

    const link = `/api/v1/products/toprated`;
    const { data } = await axios.get(link);

    dispatch({
      type: "TopRatedProductsSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "TopRatedProductsFailure",
      message: error.response.data.message,
    });
  }
};

export const topSellingProductsAction = () => async (dispatch) => {
  try {
    dispatch({
      type: "TopSellingProductsRequest",
    });

    const link = `/api/v1/products/topselling`;
    const { data } = await axios.get(link);

    dispatch({
      type: "TopSellingProductsSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "TopSellingProductsFailure",
      message: error.response.data.message,
    });
  }
};

export const getProductDetailsAction = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "GetProductDetailsRequest",
    });

    const link = `/api/v1/product/${id}`;
    const { data } = await axios.get(link);

    dispatch({
      type: "GetProductDetailsSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "GetProductDetailsFailure",
      message: error.response.data.message,
    });
  }
};

export const addAndRemoveProductFromWishlistAction =
  (id) => async (dispatch) => {
    try {
      dispatch({
        type: "WishlistRequest",
      });

      const link = `/api/v1/wishlist/${id}`;
      const { data } = await axios.put(link);

      dispatch({
        type: "WishlistSuccess",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "WishlistFailure",
        message: error.response.data.message,
      });
    }
  };

export const getWishlistProductsAction = () => async (dispatch) => {
  try {
    dispatch({
      type: "GetWishlistProductsRequest",
    });

    const link = `/api/v1/wishlist`;
    const { data } = await axios.get(link);

    dispatch({
      type: "GetWishlistProductsSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "GetWishlistProductsFailure",
      message: error.response.data.message,
    });
  }
};

//create product -- ADMIN
export const createProductAction = (formData) => async (dispatch) => {
  try {
    dispatch({
      type: "CreateProductRequest",
    });

    const link = `/api/v1/admin/product/new`;
    const { data } = await axios.post(link, formData, {
      header: {
        "Content-Type": "application/json",
      },
    });

    dispatch({
      type: "CreateProductSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "CreateProductFailure",
      error: error.response.data.message,
    });
  }
};
