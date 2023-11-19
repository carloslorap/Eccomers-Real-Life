import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../features/user/userSlice";
import { BiEdit } from "react-icons/bi";


const Profile = () => {
  const authState = useSelector((state) => state?.auth?.user);
 
  const dispatch = useDispatch();
  const [edit, setedit] = useState(true);

  const profileSchema = yup.object().shape({
    firstname: yup.string().required("Firstname is required"),
    lastname: yup.string().required("Lastname is required"),
    mobile: yup.number().required("Mobile is required"),
    email: yup
      .string()
      .email("Email should be valid")
      .required("Email Address is required"),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: authState?.email ,
      firstname: authState?.firstname ,
      lastname: authState?.lastname ,
      mobile: authState?.mobile,
    },
    validationSchema: profileSchema,
    onSubmit: (values) => {
      dispatch(updateUser(values));
      setedit(true);
    },
  });

  return (
    <>
      <BreadCrumb title="My Profile" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="d-flex justify-content-between align-items-center">
          {edit === false ? (
            <h4 className="my-2">Update Profile</h4>
          ) : (
            <h4 className="my-2">Profile</h4>
          )}
          <BiEdit
            className="fs-5 text-primary btn-edit-profile"
            onClick={() => setedit(false)}
          ></BiEdit>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="mt-3">
            <label className="form-label">FirstName</label>
            <CustomInput
              type="text"
              className="form-control"
              name="firstname"
              value={formik.values.firstname}
              onChange={formik.handleChange("firstname")}
              disabled={edit}
            />
            <div className="error">
              {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
              ) : null}
            </div>
          </div>
          <div className="mt-3">
            <label for="exampleInputEmail1" className="form-label">
              LastName
            </label>
            <CustomInput
              type="text"
              className="form-control"
              name="lastname"
              value={formik.values.lastname}
              onChange={formik.handleChange("lastname")}
              disabled={edit}
            />
            <div className="error">
              {formik.touched.lastname && formik.errors.lastname ? (
                <div>{formik.errors.lastname}</div>
              ) : null}
            </div>
          </div>

          <div className="mt-3">
            <label for="exampleInputEmail1" className="form-label">
              Email Address
            </label>
            <CustomInput
              type="email"
              className="form-control"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange("email")}
              disabled={edit}
            />
            <div className="error">
              {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
              ) : null}
            </div>
          </div>
          <div className="mt-3">
            <label for="exampleInputEmail1" className="form-label">
              Mobile Nº
            </label>
            <CustomInput
              type="number"
              className="form-control"
              name="mobile"
              value={formik.values.mobile}
              onChange={formik.handleChange("mobile")}
              disabled={edit}
            />
            <div className="error">
              {formik.touched.mobile && formik.errors.mobile ? (
                <div>{formik.errors.mobile}</div>
              ) : null}
            </div>
          </div>
          {edit === false && (
            <button type="submit" className="button border-0 mt-3">
              Saved
            </button>
          )}
        </form>
      </Container>
    </>
  );
};

export default Profile;
