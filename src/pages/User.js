import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FormHelperText, FormControl, Input } from "@mui/material";
import { addUserAPI } from "../redux/action/userAction";

export default function UserForm() {
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

    const navigateToPost = () => {
    return navigate(`/posts`);
  };

  const submitHandler = () => {
    if (value.name.trim().length === 0) {
      setError({ nameError: "Please Enter Name" });
      return;
    }
    if (value.email.trim().length === 0) {
      setError({ emailError: "Please Enter valid Email" });
      return;
    }

    dispatch(
      addUserAPI({
        name: value.name,
        email: value.email,
      })
    );
    navigateToPost();
  };

  return (
    <div style={{ margin: 50 }}>
      <h2 style={{ color: "Black" }}>Add User Data</h2>

      <FormControl>
        <label>Name :</label>
        <Input type="text" value={value.name} onChange={nameChangeHandler} />
        {error.nameError && (
          <FormHelperText>{error.nameError}</FormHelperText>
        )}

        <label>Email :</label>
        <Input type="email" value={value.email} onChange={emailChangeHandler} />
        {error.emailError && <FormHelperText>{error.emailError}</FormHelperText>}

        <div style={{ paddingTop: "20px" }}>
          <Button variant="contained" size="small" onClick={submitHandler}>
            Submit
          </Button>
        </div>
      </FormControl>
    </div>
  );
}
