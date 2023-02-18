import axios from "axios";
import { useState } from "react";
import { userActions } from "../slice/userSlice";

export const addUserAPI = (userData) => {
  return async (dispatch) => {
    const [error, setError] = useState("");
    try {
    //   const { data } = await axios.post(
    //     `http:///api/user`,
    //     userData
    //   );
    //   dispatch(userActions.adduser(data));
    } catch (error) {
        console.error(error);
        setError(error);
    }
    if (error) {
        return <span>Caught a delayed error.</span>;
      }
  };
};

export const getAllUserDataAPI = () => {
  return async (dispatch) => {
    try {
    //   const { data } = await axios.get(`http:///api/user`);
    //   dispatch(userActions.getAllUser(data));
    } catch (error) {
        console.log(error)
        console.error(error);
    }
  };
};

export const getUserByIdAPI = (id) => {
  return async (dispatch) => {
    try {
    //   const { data } = await axios.get(
    //     `http:///api/user/${id}`
    //   );
    //   dispatch(userActions.getUserById(data));
    } catch (error) {
        console.error(error);
    }
  };
};

export const updateUserByIdAPI = (id) => {
  return async (dispatch) => {
    try {
    //   const { data } = await axios.update(
    //     `http://api/user/${{ id }}`
    //   );
    //   dispatch(userActions.updateUserById(data));
    } catch (error) {
        console.error(error);

    }
  };
};