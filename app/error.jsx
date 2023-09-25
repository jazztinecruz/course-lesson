"use client";

import ErrorCard from "@/components/cards/error";

const ErrorPage = ({ error, reset }) => {
  return (
    <html>
      <body>
        <ErrorCard message={error.message} handleReset={() => reset()} />
      </body>
    </html>
  );
};

export default ErrorPage;
