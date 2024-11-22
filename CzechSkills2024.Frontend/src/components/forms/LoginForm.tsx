"use client";

import { Formik } from "formik";
import Button from "../common/Button";
import { object, string } from "yup";
import Input from "./Input";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { toastSuccess } from "../common/Toast";
import Section from "../common/Section";

export default function LoginForm() {
  // router
  const router = useRouter();

  // error response
  const [formError, setFormError] = useState<string | undefined>();

  // loading
  const [loading, setLoading] = useState(false);

  // validation schema for fields
  const validationSchema = object({
    username: string().required("Username is required"),
    password: string().required("Password is required"),
  });

  // initial values for fields
  const initialValues = {
    username: "",
    password: "",
  };

  // on submit handler
  const onSubmit = async (values: any) => {
    if (!values.username || !values.password) {
      return;
    }

    setLoading(true);

    const signInRes = await signIn("credentials", {
      username: values.username,
      password: values.password,
      callbackUrl: "/user-panel",
      redirect: false,
    });

    setLoading(false);

    if (signInRes?.ok) {
      router.push(signInRes.url!);
      toastSuccess("You have been signed in.");
    } else if (signInRes?.error) {
      setFormError("Invalid username or password.");
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }: any) => (
        <form onSubmit={handleSubmit} className="w-full">
          <div className="flex flex-col gap-8">
            <div>
              <Section title="Username" color="white" />
              <Input
                name="username"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
                placeholder="Enter username"
                error={errors.username}
                touched={touched.username}
              />
            </div>
            <div>
              <Section title="Password" color="white" />
              <Input
                name="password"
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder="Enter password"
                error={errors.password || formError}
                touched={touched.password}
              />
            </div>

            <Button
              icon="ArrowRight"
              text="Login"
              iconDirection="right"
              loading={loading}
              type="primary"
            />
          </div>
        </form>
      )}
    </Formik>
  );
}
