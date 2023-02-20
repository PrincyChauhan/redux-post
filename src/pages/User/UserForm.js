import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FormHelperText, Input, InputLabel,Typography} from "@mui/material";
import { addUserAPI } from "../../redux/action/userAction";

const UserForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const errorInititalState = {
    nameError: "",
    emailError: "",
  };

  const inputInitialState = {
    name: "",
    email: "",
  };

  const [error, setError] = useState(errorInititalState);
  const [value, setValue] = useState(inputInitialState);

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
      addUserAPI({
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
      <div>
        <Button variant="contained" size="small" onClick={() => navigate("/users")}> Back </Button>
      </div>

      <Typography variant="h5" style={{ color: "Black", paddingTop: "20px" }}>Add User Data</Typography>

      <div style={{ paddingTop: "20px" }}>
        <InputLabel>Name :</InputLabel>
        <Input type="text" value={value.name} onChange={nameChangeHandler} />
        {error.nameError && <FormHelperText>{error.nameError}</FormHelperText>}
      </div>

      <div style={{ paddingTop: "20px" }}>
        <InputLabel>Email :</InputLabel>
        <Input type="email" value={value.email} onChange={emailChangeHandler} />
        {error.emailError && (
          <FormHelperText>{error.emailError}</FormHelperText>
        )}
      </div>

      <div style={{ paddingTop: "20px" }}>
        <Button variant="contained" size="small" onClick={submitHandler}> Submit </Button>
      </div>
    </div>
  );
};

export default UserForm;