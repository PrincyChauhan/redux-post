import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPostAPI } from "../../redux/action/postAction";
import { FormHelperText, FormControl, Input, Typography } from "@mui/material";
import Textarea from "@mui/joy/Textarea";

const FormCard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const errorinitialState = {
    titleError: "",
    descriptionError: "",
  };

  const inputInitialState = {
    title: "",
    description: "",
  };

  const [error, setError] = useState(errorinitialState);
  const [value, setValue] = useState(inputInitialState);

  const titleChangeHandler = (e) => {
    setValue({ ...value, title: e.target.value });
    setError(errorinitialState);
  };

  const descriptionChangeHandler = (e) => {
    setValue({ ...value, description: e.target.value });
    setError(errorinitialState);
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
      <Button variant="contained" size="small" onClick={navigateToPost}>
        Back
      </Button>
      <Typography variant="h5" style={{ color: "Black", paddingTop: "20px" }}>
        Add Post Data
      </Typography>

      <FormControl>
        <Typography>Title :</Typography>
        <Input value={value.title} onChange={titleChangeHandler} />
        {error.titleError && (
          <FormHelperText>{error.titleError}</FormHelperText>
        )}

        <Typography style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          Description :
        </Typography>
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
      </FormControl>
    </div>
  );
};

export default FormCard;