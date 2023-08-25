import React, { useContext } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import PageTop from "../../components/PageTop";
import { TextField } from "@mui/material";
import { darkTheme } from "../../context/ThemeProvider";

const phoneRegex = /^(00213|\+213|0)(5|6|7)[0-9]{8}$/;

const inputSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  lastName: yup
    .string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  email: yup.string().email("Invalid Email").required("Required"),
  phone: yup
    .string()
    .matches(phoneRegex, "Invalid Phone Number")
    .required("Required"),
  address1: yup.string().required("Required"),
  address2: yup.string().required("Required"),
});

const InitialInput = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address1: "",
  address2: "",
};

const index = () => {
  const { dark } = useContext(darkTheme);
  return (
    <div className=" w-full desktop:p-8 p-2">
      <PageTop title={"CREATE USER"} text={"Create a New User Profile"} />
      <Formik
        initialValues={InitialInput}
        validationSchema={inputSchema}
        onSubmit={() => console.log("succeeded")}
      >
        {({
          handleChange,
          errors,
          touched,
          handleBlur,
          handleSubmit,
          values,
        }) => (
          <form
            onSubmit={handleSubmit}
            className="text-gray-700 dark:text-white desktop:grid desktop:grid-cols-4 flex flex-col gap-2"
          >
            <div className=" w-full desktop:col-span-2">
              <TextField
                fullWidth
                id="FirstName"
                label="FirstName"
                variant="filled"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                value={values.firstName}
                type="text"
                name="firstName"
                onChange={handleChange}
                onBlur={handleBlur}
                sx={{
                  background: dark ? "#2f3f5c" : "#e0dedf",
                  "border-radius": "5px 5px 0 0 ",
                  "& .MuiFormLabel-root,& .MuiInputBase-root": {
                    color: dark ? "white" : "#374151",
                  },
                }}
              />
            </div>
            <div className=" w-full desktop:col-span-2">
              <TextField
                fullWidth
                id="LastName"
                label="LastName"
                variant="filled"
                value={values.lastName}
                type="text"
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                sx={{
                  background: dark ? "#2f3f5c" : "#e0dedf",
                  "border-radius": "5px 5px 0 0 ",
                  "& .MuiFormLabel-root,& .MuiInputBase-root": {
                    color: dark ? "white" : "#374151",
                  },
                }}
              />
            </div>
            <div className=" w-full desktop:col-span-4">
              <TextField
                fullWidth
                id="Email"
                label="Email"
                variant="filled"
                value={values.email}
                type="text"
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                onChange={handleChange}
                onBlur={handleBlur}
                sx={{
                  background: dark ? "#2f3f5c" : "#e0dedf",
                  "border-radius": "5px 5px 0 0 ",
                  "& .MuiFormLabel-root,& .MuiInputBase-root": {
                    color: dark ? "white" : "#374151",
                  },
                }}
              />
            </div>
            <div className=" w-full desktop:col-span-4">
              <TextField
                fullWidth
                id="PhoneNUmber"
                label="PhoneNUmber"
                variant="filled"
                value={values.phone}
                type="text"
                name="phone"
                error={!!touched.phone && !!errors.phone}
                helperText={touched.phone && errors.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                sx={{
                  background: dark ? "#2f3f5c" : "#e0dedf",
                  "border-radius": "5px 5px 0 0 ",
                  "& .MuiFormLabel-root,& .MuiInputBase-root": {
                    color: dark ? "white" : "#374151",
                  },
                }}
              />
            </div>
            <div className=" w-full desktop:col-span-4">
              <TextField
                fullWidth
                id="Address1"
                label="Address1"
                variant="filled"
                value={values.address1}
                type="text"
                name="address1"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                onChange={handleChange}
                onBlur={handleBlur}
                sx={{
                  background: dark ? "#2f3f5c" : "#e0dedf",
                  "border-radius": "5px 5px 0 0 ",
                  "& .MuiFormLabel-root,& .MuiInputBase-root": {
                    color: dark ? "white" : "#374151",
                  },
                }}
              />
            </div>
            <div className=" w-full desktop:col-span-4">
              <TextField
                fullWidth
                id="Address2"
                label="Address2"
                variant="filled"
                value={values.address2}
                type="text"
                name="address2"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                onChange={handleChange}
                onBlur={handleBlur}
                sx={{
                  background: dark ? "#2f3f5c" : "#e0dedf",
                  "border-radius": "5px 5px 0 0 ",
                  "& .MuiFormLabel-root,& .MuiInputBase-root": {
                    color: dark ? "white" : "#374151",
                  },
                }}
              />
            </div>
            <div className=" w-full flex justify-end desktop:col-span-4">
              <button
                type="submit"
                className=" bg-Neutral-green py-2 px-4 cursor-pointer rounded-md dark:text-Primary-dark-bg text-Primary-light-bg font-semibold text-lg"
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default index;