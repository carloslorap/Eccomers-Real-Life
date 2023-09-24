import React from "react";
import { Link } from "react-router-dom";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import CustomInput from "../components/CustomInput";

const Signup = () => {
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
                <form className="d-flex flex-column gap-15">
                  <CustomInput
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="form-control"
                  />

                  <CustomInput
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                  />

                  <CustomInput
                    type="tel"
                    name="mobile"
                    placeholder="Mobile Number"
                    className="form-control"
                  />

                  <CustomInput
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control"
                  />

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
