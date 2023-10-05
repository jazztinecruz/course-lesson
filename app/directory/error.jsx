"use client";

import ErrorCard from "@/components/cards/error";

const DirectoryErrorPage = ({ error, reset }) => {
  return (
    <>
      <ErrorCard message={error.message} handleReset={() => reset()} />
    </>
  );
};

export default DirectoryErrorPage;
