"use client";

import ErrorCard from "@/components/cards/error";

const FeaturedErrorPage = ({ error, reset }) => {
  return (
    <>
      <ErrorCard message={error.message} handleReset={() => reset()} />
    </>
  );
};

export default FeaturedErrorPage;
