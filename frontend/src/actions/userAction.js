import axios from "axios";

//register user
export const registerUserAction =
  (avatar, name, email, password) => async (dispatch) => {
    try {
      dispatch({
        type: "RegisterUserRequest",
      });

      const link = `/api/v1/register`;
      const { data } = await axios.post(
        link,
        { avatar, name, email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      dispatch({
        type: "RegisterUserSuccess",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "RegisterUserFailure",
        message: error.response.data.message,
      });
    }
  };

//login user
export const loginUserAction = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "LoginUserRequest",
    });

    const link = `/api/v1/login`;
    const { data } = await axios.post(
      link,
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({
      type: "LoginUserSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "LoginUserFailure",
      message: error.response.data.message,
    });
  }
};

//load user
export const loadUserAction = () => async (dispatch) => {
  try {
    dispatch({
      type: "LoadUserRequest",
    });

    const link = `/api/v1/me`;
    const { data } = await axios.get(link);

    dispatch({
      type: "LoadUserSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "LoadUserFailure",
      message: error.response.data.message,
    });
  }
};

//logout user
export const logoutUserAction = () => async (dispatch) => {
  try {
    dispatch({
      type: "LogoutUserRequest",
    });

    const link = `/api/v1/logout`;
    const { data } = await axios.get(link);

    dispatch({
      type: "LogoutUserSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "LogoutUserFailure",
      message: error.response.data.message,
    });
  }
};
