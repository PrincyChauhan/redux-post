import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { FormHelperText } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addPostAPI } from "../redux/action/postAction";

export default function OutlinedCard() {
  const [titleValue, setTitleValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [titleError, setTitleError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");

  const dispatch = useDispatch();

  const postInfo = useSelector((state) => state.post.posts);

  const titleChangeHandler = (e) => {
    setTitleValue(e.target.value)
    setTitleError("");
  }
  const descriptionChangeHandler = (e) => {
      setDescriptionValue(e.target.value)
      setDescriptionError("");
  }

  const submitHandler = () => {
    if (titleValue.trim().length == 0) {
      setTitleError("Please enter a title");
      return;
    }

    if (descriptionValue.trim().length == 0) {
      setDescriptionError("Please enter a Description");
      return;
    }
   
    // if (!titleError && !descriptionError && titleError != "" && descriptionError != "") {
    console.log("hello")
      dispatch(
        addPostAPI({
          title: titleValue,
          description: descriptionValue,
        })
      );
    // }

    setTitleValue("");
    setDescriptionValue("");
  };

  return (
    <div>
      <TextField
        fullWidth
        label="Title"
        id="fullWidth"
        value={titleValue}
        onChange={titleChangeHandler}
      />
      {titleError && <FormHelperText>{titleError}</FormHelperText>}
      <TextField
        fullWidth
        label="Description"
        id="fullWidth"
        value={descriptionValue}
        onChange={descriptionChangeHandler}
      />
      {descriptionError && <FormHelperText>{descriptionError}</FormHelperText>}
      <Button size="small" onClick={submitHandler}>
        Submit
      </Button>
      <table border={1}>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Description</th>
        </tr>

        <tr key={postInfo.id}>
          <td>{postInfo.id}</td>
          <td>{postInfo.title}</td>
          <td>{postInfo.description}</td>
        </tr>
      </table>
    </div>
  );
}
