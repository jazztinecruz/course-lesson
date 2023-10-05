"use client";

import ErrorCard from "@/components/cards/error";

const AboutErrorPage = ({ error, reset }) => {
  return (
    <>
      <ErrorCard message={error.message} handleReset={() => reset()} />
    </>
  );
};

export default AboutErrorPage;
