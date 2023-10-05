"use client";

import ErrorCard from "@/components/cards/error";

const CampsiteErrorPage = ({ error, reset }) => {
  return (
    <>
      <ErrorCard message={error.message} handleReset={() => reset()} />
    </>
  );
};

export default CampsiteErrorPage;
