import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import CustomInput from "../components/CustomInput";
import { useLocation } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { ChangedPass } from "../features/user/userSlice";


const Resetpassword = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const getToken = location.pathname.split("/")[2];

  const ResetpasswordSchema = yup.object().shape({
    password: yup.string().required("Firstname is required"),
    confpassword: yup
      .string()
      .required("Confirm password is required")
      .oneOf([yup.ref("password"), null], "Password must match"),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: "",
    },
    validationSchema: ResetpasswordSchema,
    onSubmit: (values) => {
      dispatch(ChangedPass({token:getToken,password:values.password}))
    },
  });
  return (
    <>
      <Meta title={"Reset Password"} />
      <BreadCrumb title="Reset Password" />

      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Reset Password</h3>
                <form
                  onSubmit={formik.handleSubmit}
                  className="d-flex flex-column gap-15"
                >
                  <div>
                    <CustomInput
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="form-control"
                      value={formik.values.password}
                      onChange={formik.handleChange("password")}
                    />
                    <div className="error">
                      {formik.touched.password && formik.errors.password ? (
                        <div>{formik.errors.password}</div>
                      ) : null}
                    </div>
                  </div>
                  <div>
                    <CustomInput
                      type="password"
                      name="confpassword"
                      placeholder="Confirm Password"
                      className="form-control"
                      value={formik.values.confpassword}
                      onChange={formik.handleChange("confpassword")}
                    />
                    <div className="error">
                      {formik.touched.confpassword &&
                      formik.errors.confpassword ? (
                        <div>{formik.errors.confpassword}</div>
                      ) : null}
                    </div>
                  </div>

                 
                    <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                      <button type="submit" className="button border-0">Ok</button>
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

export default Resetpassword;
