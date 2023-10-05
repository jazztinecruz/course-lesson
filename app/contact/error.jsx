"use client";
import ErrorCard from "@/components/cards/error";

const ContactErrorPage = ({ error, reset }) => {
  return (
    <>
      <ErrorCard message={error.message} handleReset={() => reset()} />
    </>
  );
};

export default ContactErrorPage;
