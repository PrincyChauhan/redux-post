import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FormHelperText, Input } from "@mui/material";
import { getUserByIdAPI, updateUserByIdAPI } from "../redux/action/userAction";

const UserEditForm = () => {
  const params = useParams();
  const { userId } = params;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserByIdAPI(userId));
  }, []);

  const navigate = useNavigate();

  const errorInititalState = {
    nameError: "",
    emailError: "",
  };

  const user = useSelector((state) => state.user.users);
  const inputInitialState = {
    name: user.data ? user.data.name : "",
    email: user.data ? user.data.email : "",
  };

  const [error, setError] = useState(errorInititalState);
  const [value, setValue] = useState(inputInitialState);

  useEffect(() => {
    setValue(inputInitialState);
  }, [user]);

  const nameChangeHandler = (e) => {
    setValue({ ...value, name: e.target.value });
    setError(errorInititalState);
  };

  const emailChangeHandler = (e) => {
    setValue({ ...value, email: e.target.value });
    setError(errorInititalState);
  };

  const navigateToUser = () => {
    return navigate(`/users`);
  };

  const submitHandler = async () => {
    if (value.name.trim().length === 0) {
      setError({ nameError: "Please Enter Name" });
      return;
    }
    if (value.email.trim().length === 0) {
      setError({ emailError: "Please Enter valid Email" });
      return;
    }

    const responseData = await dispatch(
      updateUserByIdAPI(userId, {
        name: value.name,
        email: value.email,
      })
    );
    if (responseData.success) {
      navigateToUser();
    } else {
      setError({ emailError: responseData.msg });
    }
  };

  return (
    <div style={{ margin: 50 }}>
      <h2 style={{ color: "Black" }}>Edit User Data</h2>

      {/* <FormControl> */}
      <label>Name :</label>
      <Input type="text" value={value.name} onChange={nameChangeHandler} />
      {error.nameError && <FormHelperText>{error.nameError}</FormHelperText>}

      <label>Email :</label>
      <Input type="email" value={value.email} onChange={emailChangeHandler} />
      {error.emailError && <FormHelperText>{error.emailError}</FormHelperText>}

      <div style={{ paddingTop: "20px" }}>
        <Button variant="contained" size="small" onClick={submitHandler}>
          Submit
        </Button>
      </div>
      {/* </FormControl> */}
    </div>
  );
};

export default UserEditForm;
