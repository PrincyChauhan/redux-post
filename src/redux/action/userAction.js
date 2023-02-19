import axios from "axios";
import { userActions } from "../slice/userSlice";

export const addUserAPI = (userData) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        `http://localhost:3000/api/user`,
        userData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      dispatch(userActions.addUser(data.data));

      return data;
    } catch (error) {
      console.log(error.response.data);
      return error.response.data;
    }
  };
};
export const getAllUserDataAPI = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`http://localhost:3000/api/user`);
      dispatch(userActions.getAllUser(data.data));
      return data;
    } catch (error) {
      console.error(error);
      return error.response.data;
    }
  };
};

export const getUserByIdAPI = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`http://localhost:3000/api/user/${id}`);
      dispatch(userActions.getUserById(data));
      return data;
    } catch (error) {
      console.error(error);
      return error.response.data;
    }
  };
};

export const updateUserByIdAPI = (id, userData) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.patch(
        `http://localhost:3000/api/user/${id}`,
        userData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      dispatch(userActions.updateUserById(data));
      return data;
    } catch (error) {
      console.error(error);
      return error.response.data;
    }
  };
};

export const deleteUserByIdAPI = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:3000/api/user/${id}`,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      dispatch(userActions.deleteUserById(id));
      return data;
    } catch (error) {
      console.error(error);
      return error.response.data;
    }
  };
};
