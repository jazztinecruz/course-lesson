"use client";

const CampsiteErrorPage = ({ error, reset }) => {
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <p>{error.message}</p>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
};

export default CampsiteErrorPage;
