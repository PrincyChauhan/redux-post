import * as React from "react";
import { useState } from "react";
import { Select, MenuItem, InputLabel,Typography} from "@mui/material";
import CityHandler from "countrycitystatejson";
import PersonSchema from "./validation";
import { Formik, Form, Field } from "formik";

// countriesList doesn't change so it can just be a constant outside of component
const countriesList = CityHandler.getCountries();

const initialState = {
  countryShortName: "IN",
  stateName: "",
  city: "",
};

const initialValues = {
  email: "",
  name: "",
};

const Person = () => {
  const [state, setState] = useState(initialState);

  const changeCountry = (e) => {
    setState({
      ...state,
      countryShortName: e.target.value,
      stateName: "",
      city: "",
    });
  };

  const changeState = (e) => {
    setState({ ...state, stateName: e.target.value, city: "" });
  };

  const changeCity = (e) => {
    setState({ ...state, city: e.target.value });
  };

  const states = CityHandler.getStatesByShort(state.countryShortName);
  const cities = state.stateName
    ? CityHandler.getCities(state.countryShortName, state.stateName)
    : [];

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={PersonSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div style={{ margin: 50 }}>
          <Typography variant="h5" style={{ color: "Black", paddingTop: "20px" }}>Fill the form</Typography>

            <div style={{ paddingTop: "20px" }}>
              <InputLabel>Name :</InputLabel>
              <Field name="name" type="text" />
              {touched.name && errors.name && <div>{errors.name}</div>}
            </div>

            <div style={{ paddingTop: "20px" }}>
              <InputLabel>Email :</InputLabel>
              <Field name="email" type="email" />
              {touched.email && errors.email && <div>{errors.email}</div>}
            </div>

            <div style={{ paddingTop: "20px" }}>
              <InputLabel>Country :</InputLabel>
              <div style={{ paddingTop: "20px" }}>
                <Select
                  value={state.countryShortName || ""}
                  onChange={changeCountry}
                  sx={{ minWidth: 270 }}
                >
                  {countriesList.map((countryLoop) => (
                    <MenuItem
                      key={countryLoop.shortName}
                      id={countryLoop.shortName}
                      value={countryLoop.shortName}
                    >
                      {countryLoop.name}
                    </MenuItem>
                  ))}
                </Select>
              </div>
            </div>

            <div style={{ paddingTop: "20px" }}>
              <InputLabel>State :</InputLabel>
              <div style={{ paddingTop: "20px" }}>
                <Select
                  value={state.stateName}
                  onChange={changeState}
                  sx={{ minWidth: 270 }}
                >
                  {states.map((state, index) => {
                    return (
                      <MenuItem key={index} id={state} value={state}>
                        {state}
                      </MenuItem>
                    );
                  })}
                </Select>
              </div>
            </div>

            <div style={{ paddingTop: "20px" }}>
              <InputLabel>City :</InputLabel>
              <div style={{ paddingTop: "20px" }}>
                <Select
                  value={state.city || ""}
                  onChange={changeCity}
                  sx={{ minWidth: 270 }}
                >
                  {cities.map((city, index) => {
                    return (
                      <MenuItem key={index} id={city} value={city}>
                        {city}
                      </MenuItem>
                    );
                  })}
                </Select>
              </div>
            </div>

            <div style={{ paddingTop: "20px" }}>
              <div style={{ paddingTop: "20px" }}>
                <InputLabel>Pincode :</InputLabel>
                <Field type="text" name="pincode" />
                {touched.pincode && errors.pincode && (
                  <div>{errors.pincode}</div>
                )}
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Person;