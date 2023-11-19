import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall, BiInfoCircle } from "react-icons/bi";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { postQuery } from "../features/contact/contactSlice";

const Contact = () => {
  const dispatch= useDispatch()
  const contactschema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Email should be valid")
      .required("Email is required"),
    mobile: yup.number().required("Mobile is required"),
    comment: yup.string().required("Comment is required"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      comment: "",
    },
    validationSchema: contactschema,
    onSubmit: values => {
      dispatch(postQuery(values))
    },
  });
  return (
    <>
      <Meta title={"Contact"} />
      <BreadCrumb title="Contact" />
      <div className="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4640.272100301943!2d-76.9966137292157!3d-12.04433436810109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c676e6cef7e3%3A0x5e83b54b9576d7ec!2sEl%20Agustino!5e0!3m2!1ses-419!2spe!4v1694567978916!5m2!1ses-419!2spe"
              width="600"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4">Contact</h3>
                  <form
                    onSubmit={formik.handleSubmit}
                    className="d-flex flex-column gap-15"
                  >
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange("name")}
                      />
                      <div className="error">
                        {formik.touched.name && formik.errors.name ? (
                          <div>{formik.errors.name}</div>
                        ) : null}
                      </div>
                    </div>
                    <div>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        name="email"
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
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Mobile Number"
                        name="mobile"
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
                      <textarea
                        className="w-100 form-control"
                        cols="30"
                        rows="4"
                        placeholder="Comments"
                        name="comment"
                        value={formik.values.comment}
                        onChange={formik.handleChange("comment")}
                      ></textarea>
                      <div className="error">
                        {formik.touched.comment && formik.errors.comment ? (
                          <div>{formik.errors.comment}</div>
                        ) : null}
                      </div>
                    </div>
                    <div className="">
                      <button className="button" type="submit">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>

                <div>
                  <h3 className="contact-title mb-4">Get in touch with us</h3>
                  <div>
                    <ul className="ps-0">
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiOutlineHome className="fs-5" />
                        <address className="mb-0">
                          Hno:277, Near village chopal , Mandura, Sonipat,
                          Haryana
                        </address>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BiPhoneCall className="fs-5" />
                        <a href="/">+51 823783434</a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiOutlineMail className="fs-5" />
                        <a href="/">carloslorapuma@gmail.com</a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BiInfoCircle className="fs-5" />
                        <p className="mb-0">Monday - friday 10 AM - 8 PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
