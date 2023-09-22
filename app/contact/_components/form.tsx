"use client";

import handleValidateContactForm from "@/validations/feedback";
import { Formik, Field, Form, ErrorMessage } from "formik";

const ContactForm = () => {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-2xl">Send Us Your Feedback</h2>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          phoneNumber: "",
          email: "",
          agree: false,
          contactType: "By Phone",
          feedback: "",
        }}
        onSubmit={(values, { resetForm }) => {
          console.log({ values });
          resetForm();
        }}
        validate={handleValidateContactForm}>
        {({ handleSubmit, values }) => (
          <Form className="flex flex-col gap-4 w-full ">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <Field
                  name="firstName"
                  placeholder="FirstName"
                  className="w-full border px-4 py-2 rounded placeholder:text-sm outline outline-transparent focus:outline-pink"
                />
                <ErrorMessage name="firstName" />
              </div>

              <div className="flex flex-col gap-1">
                <Field
                  name="lastName"
                  placeholder="LastName"
                  className="w-full border px-4 py-2 rounded placeholder:text-sm outline outline-transparent focus:outline-pink"
                />
                <ErrorMessage name="lastName" />
              </div>

              <div className="flex flex-col gap-1">
                <Field
                  name="phoneNumber"
                  placeholder="Phone Number"
                  className="w-full border px-4 py-2 rounded placeholder:text-sm outline outline-transparent focus:outline-pink"
                />
                <ErrorMessage name="phoneNumber" />
              </div>

              <div className="flex flex-col gap-1">
                <Field
                  name="email"
                  placeholder="Email"
                  className="w-full border px-4 py-2 rounded placeholder:text-sm outline outline-transparent focus:outline-pink"
                />
                <ErrorMessage name="email" />
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-4">
                  <label>May we contact you?</label>
                  <Field
                    name="agree"
                    type="checkbox"
                    className="form-check-input"
                  />
                </div>
                {values.agree && (
                  <Field
                    name="contactType"
                    as="select"
                    className="w-full border px-4 py-2 rounded placeholder:text-sm outline outline-transparent focus:outline-pink">
                    <option>By Phone</option>
                    <option>By Email</option>
                  </Field>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <Field
                name="feedback"
                as="textarea"
                placeholder="What is your Feedback?"
                rows="12"
                className="w-full border px-4 py-2 rounded placeholder:text-sm outline outline-transparent focus:outline-pink"
              />
              <ErrorMessage name="feedback" />
            </div>

            <button
              type="submit"
              onClick={() => handleSubmit()}
              className="rounded px-4 py-2 bg-pink font-medium text-white hover:bg-pink/75 duration-500 mt-4">
              Submit Feedback
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
