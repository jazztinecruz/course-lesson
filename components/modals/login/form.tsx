import { Formik, Field, Form, ErrorMessage } from "formik";
import { Dispatch, SetStateAction, useContext } from "react";
import { Context } from "@/contexts/context-provider";
import handleValidateLoginForm from "@/validations/login";
import Image from "next/image";

type Props = {
  setOpenLoginModal: Dispatch<SetStateAction<boolean>>;
};

const LoginForm = ({ setOpenLoginModal }: Props) => {
  const { setIsSignedIn, setUser } = useContext(Context);

  return (
    <div
      onClick={(event) => event?.stopPropagation()}
      className="w-full max-w-2xl space-y-6 p-8 lg:p-10 bg-white shadow-md rounded-md">
      <div className="flex flex-col items-center text-center gap-2">
        <div className="flex items-center gap-4 mb-4">
          <Image
            src="/images/logo.png"
            alt="NuCamp Logo"
            width={50}
            height={50}
          />
        </div>

        <h1 className="font-medium text-2xl">
          Welcome to <span className="text-pink font-bold">NuCamp</span>
        </h1>
        <p className="text-gray-500 text-sm max-w-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
          doloribus.
        </p>
      </div>

      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={(values) => {
          console.log({ values });
          setUser(values.username);
          setIsSignedIn(true);
          setOpenLoginModal(false);
        }}
        validate={(values) => handleValidateLoginForm(values)}>
        {({ handleSubmit }) => (
          <Form className="flex flex-col gap-4 w-full ">
            <div className="flex flex-col gap-1">
              <Field
                name="username"
                placeholder="Username"
                className="w-full border px-4 py-2 rounded placeholder:text-sm outline outline-transparent focus:outline-pink"
              />
              <ErrorMessage name="username" />
            </div>

            <div className="flex flex-col gap-1">
              <Field
                type="password"
                name="password"
                placeholder="Password"
                className="w-full border px-4 py-2 rounded placeholder:text-sm outline outline-transparent focus:outline-pink"
              />
              <ErrorMessage name="password" />
            </div>

            <button
              type="submit"
              onClick={() => handleSubmit()}
              className="rounded px-4 py-2 bg-pink font-medium text-white hover:bg-pink/75 duration-500 mt-4">
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
