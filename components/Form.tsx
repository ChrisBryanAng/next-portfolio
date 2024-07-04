"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import InputText from "./InputText";
import InputTextArea from "./InputTextArea";

const Form = () => {
  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  // Formik logic
  const formik = useFormik({
    initialValues: {
      fullName: "",
      emailAddress: "",
      message: "",
    },

    validationSchema: Yup.object({
      fullName: Yup.string().required("This field is required"),
      emailAddress: Yup.string()
        .email("Please enter a valid email address")
        .required("This field is required"),
      message: Yup.string().required("This field is required"),
    }),

    onSubmit: async (values) => {
      await sleep(2000);
      console.log(values);
    },
  });

  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 lg:justify-between mt-10 ">
      <p className="font-Ibarra text-[44px] font-bold lg:w-[50%]">Contact Me</p>

      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col gap-9 lg:w-[58%] lg:mt-4"
      >
        <InputText
          label="Name"
          id="fullName"
          name="fullName"
          type="text"
          placeholder="Jane Applessed"
          value={formik.values.fullName}
          onChange={formik.handleChange}
          error={formik.errors.fullName}
          isTouched={formik.touched.fullName}
        />
        <InputText
          label="Email Address"
          id="emailAddress"
          name="emailAddress"
          type="email"
          placeholder="email@example.com"
          value={formik.values.emailAddress}
          onChange={formik.handleChange}
          error={formik.errors.emailAddress}
          isTouched={formik.touched.emailAddress}
        />

        <InputTextArea
          label="Message"
          id="message"
          name="message"
          placeholder="How can I help?"
          value={formik.values.message}
          onChangeTextArea={formik.handleChange}
          error={formik.errors.message}
          isTouched={formik.touched.message}
        />

        <button
          type="submit"
          className="font-Public-sans py-4 px-12 uppercase bg-primary-darkblue hover:bg-primary-cyan transition-colors duration-200 text-white text-[14px] tracking-[3px] font-extralight text-center w-max"
        >
          {formik.isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default Form;
