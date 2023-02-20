import * as Yup from "yup";

const PersonSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name is Too Short!")
    .max(20, "Name Too Long!")
    .required("Name is Required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is Required"),
  pincode: Yup.string()
    .length(6)
    .matches(/^[0-9]{5}/)
    .required("Pincode is Required"),
});

export default PersonSchema;