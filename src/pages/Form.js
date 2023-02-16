import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { FormHelperText } from "@mui/material";

export default function OutlinedCard() {
  const [titleValue, setTitleValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [titleError, setTitleError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");

  const submitHandler = () => {
    if (titleValue.trim().length == 0) {
      setTitleError("Please enter a title");
    }

    if (descriptionValue.trim().length == 0) {
      setDescriptionError("Please enter a Description");
    }
  };

  return (
    <div>
      <TextField
        fullWidth
        label="Title"
        id="fullWidth"
        value={titleValue}
        onChange={(e) => setTitleValue(e.target.value)}
      />
      {titleError && <FormHelperText>{titleError}</FormHelperText>}
      <TextField
        fullWidth
        label="Description"
        id="fullWidth"
        value={descriptionValue}
        onChange={(e) => setDescriptionValue(e.target.value)}
      />
      {descriptionError && <FormHelperText>{descriptionError}</FormHelperText>}
      <Button size="small" onClick={submitHandler}>
        Submit
      </Button>
    </div>
  );
}
