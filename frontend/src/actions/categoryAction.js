import axios from "axios";

export const getCategoriesAction = () => async (dispatch) => {
  try {
    dispatch({
      type: "GetCategoriesRequest",
    });

    const link = `/api/v1/categories`;
    const { data } = await axios.get(link);

    dispatch({
      type: "GetCategoriesSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "GetCategoriesFailure",
      message: error.response.data.message,
    });
  }
};
