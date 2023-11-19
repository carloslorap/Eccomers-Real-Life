import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import CustomInput from "../components/CustomInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../features/user/userSlice";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [messagePassword, setmessagePassword] = useState(
    "Password Requirement"
  );
  const authState = useSelector((state) => state?.auth);
  const signUpschema = yup.object().shape({
    firstname: yup.string().required("Name is required"),
    lastname: yup.string().required("Lastname required"),
    email: yup.string().required("Email is required"),
    mobile: yup.number().required("Mobile is required"),
    password: yup
      .string()
      .min(10, "Your password must be at least 10 characters")
      .required("Password is required"),
  });
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      mobile: "",
      password: "",
    },
    validationSchema: signUpschema,
    onSubmit: (values) => {
      dispatch(registerUser(values));
    },
  });

  const [progressColor, setProgressColor] = useState("#F5F5F7");

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    if (newPassword.length === 0) {
      setProgressColor();
      setmessagePassword("Password Requirement");
    } else if (newPassword.length >= 1 && newPassword.length <= 4) {
      setProgressColor("red");
      setmessagePassword("Too easy!");
    } else if (newPassword.length >= 5 && newPassword.length <= 6) {
      setProgressColor("yellow");
      setmessagePassword("It's medium low!");
    } else if (newPassword.length >= 7 && newPassword.length <= 10) {
      setProgressColor("green");
      setmessagePassword("It's excellent!");
    } else {
      setProgressColor("red");
      setmessagePassword("You crossed the limits");
    }

    formik.handleChange("password")(e);
  };

  useEffect(() => {
    if (authState.isSuccess === true) {
      navigate("/");
    }
  }, [authState, navigate]);

  return (
    <>
      <Meta title={"Create Account"} />
      <BreadCrumb title="Create Account" />

      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Create Account</h3>
                <form
                  onSubmit={formik.handleSubmit}
                  className="d-flex flex-column gap-15"
                >
                  <div>
                    <CustomInput
                      type="text"
                      name="firstname"
                      placeholder="First Name"
                      className="form-control"
                      value={formik.values.firstname}
                      onChange={formik.handleChange("firstname")}
                    />
                    <div className="error">
                      {formik.touched.firstname && formik.errors.firstname ? (
                        <div>{formik.errors.firstname}</div>
                      ) : null}
                    </div>
                  </div>
                  <div>
                    <CustomInput
                      type="text"
                      name="lastname"
                      placeholder="Last Name"
                      className="form-control"
                      value={formik.values.lastname}
                      onChange={formik.handleChange("lastname")}
                    />{" "}
                    <div className="error">
                      {formik.touched.lastname && formik.errors.lastname ? (
                        <div>{formik.errors.lastname}</div>
                      ) : null}
                    </div>
                  </div>
                  <div>
                    <CustomInput
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="form-control"
                      value={formik.values.email}
                      onChange={formik.handleChange("email")}
                    />
                    <div className="error">
                      {formik.touched.email && formik.errors.email ? (
                        <div>{formik.errors.email}</div>
                      ) : null}
                    </div>
                  </div>
                  <div>
                    <CustomInput
                      type="tel"
                      name="mobile"
                      placeholder="Mobile Number"
                      className="form-control"
                      value={formik.values.mobile}
                      onChange={formik.handleChange("mobile")}
                    />
                    <div className="error">
                      {formik.touched.mobile && formik.errors.mobile ? (
                        <div>{formik.errors.mobile}</div>
                      ) : null}
                    </div>
                  </div>
                  <div>
                    <CustomInput
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="form-control"
                      value={formik.values.password}
                      onChange={handlePasswordChange}
                    />
                    <div className="error">
                      {formik.touched.password && formik.errors.password ? (
                        <div>{formik.errors.password}</div>
                      ) : null}
                    </div>
                    <div className="mt-2">
                      <progress
                        value={formik.values.password.length}
                        max="10"
                        style={{ backgroundColor: progressColor }}
                      />
                      <label className="label_progress">
                        {messagePassword}
                      </label>
                    </div>
                  </div>
                  <div>
                    <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                      <button className="button border-0">Create</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
