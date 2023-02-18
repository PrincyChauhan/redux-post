import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPostAPI } from "../redux/action/postAction";
import { FormHelperText, FormControl, Input } from "@mui/material";
import Textarea from "@mui/joy/Textarea";

export default function FormCard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const errorInititalState = {
    titleError: "",
    descriptionError: "",
  };

  const inputInitialState = {
    title: "",
    description: "",
  };

  const [error, setError] = useState(errorInititalState);
  const [value, setValue] = useState(inputInitialState);

  const titleChangeHandler = (e) => {
    setValue({
      ...value,
      title: e.target.value,
    });
    setError(errorInititalState);
  };

  const descriptionChangeHandler = (e) => {
    setValue({
      ...value,
      description: e.target.value,
    });
    setError(errorInititalState);
  };

  const navigateToPost = () => {
    return navigate(`/posts`);
  };

  const submitHandler = () => {
    if (value.title.trim().length === 0) {
      setError({ titleError: "Please enter a title" });
      return;
    }

    if (value.description.trim().length === 0) {
      setError({ descriptionError: "Please enter a Description" });
      return;
    }

    dispatch(
      addPostAPI({
        title: value.title,
        description: value.description,
      })
    );

    navigateToPost();
  };

  return (
    <div style={{ margin: 50 }}>
      <h2 style={{ color: "Black" }}>Add Post Data</h2>

      <FormControl>
        <label>Title :</label>
        <Input value={value.title} onChange={titleChangeHandler} />
        {error.titleError && (
          <FormHelperText>{error.titleError}</FormHelperText>
        )}

        <label style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          Description :
        </label>
        <Textarea
          minRows={2}
          value={value.description}
          onChange={descriptionChangeHandler}
          style={{ paddingTop: "20px" }}
        />
        {error.descriptionError && (
          <FormHelperText>{error.descriptionError}</FormHelperText>
        )}

        <div style={{ paddingTop: "20px" }}>
          <Button variant="contained" size="small" onClick={submitHandler}>
            Submit
          </Button>
        </div>

        <div style={{ paddingTop: "20px" }}>
          <Button variant="contained" size="small" onClick={navigateToPost}>
            Back
          </Button>
        </div>
      </FormControl>
    </div>
  );
}