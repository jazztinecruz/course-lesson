"use client";

import LoginForm from "@/components/modals/login/form";
import useMyContext from "@/hooks/use-context";
import handleValidateCommentForm from "@/validations/comment";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useRouter } from "next/navigation";

const CommentForm = ({ campsiteId }) => {
  const { user } = useMyContext();
  const router = useRouter();

  if (!user) return <LoginForm />;

  return (
    <Formik
      initialValues={{
        rating: 1,
        message: "",
      }}
      onSubmit={async (values, { resetForm }) => {
        await fetch("http://localhost:3001/comments", {
          method: "POST",
          body: JSON.stringify({
            ...values,
            campsiteId,
            user,
          }),
          headers: { "Content-Type": "application/json" },
        });
        router.refresh();
        resetForm();
      }}
      validate={handleValidateCommentForm}>
      <Form className="flex flex-col gap-4 w-full border rounded p-4">
        <div className="flex flex-col gap-1">
          <Field
            name="rating"
            as="select"
            placeholder="How much will you rate this Campsite?"
            className="w-full border px-4 py-2 rounded placeholder:text-sm outline outline-transparent focus:outline-pink">
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </Field>
          <ErrorMessage name="rating" />
        </div>

        <div className="flex flex-col gap-1">
          <Field
            as="textarea"
            name="message"
            placeholder="What do you think of this Campsite?"
            className="w-full border px-4 py-2 rounded placeholder:text-sm outline outline-transparent focus:outline-pink"
          />
          <ErrorMessage name="message" />
        </div>

        <button
          type="submit"
          className="rounded px-4 py-2 bg-pink font-medium text-white hover:bg-pink/75 duration-500 mt-4">
          Post Comment
        </button>
      </Form>
    </Formik>
  );
};

export default CommentForm;
