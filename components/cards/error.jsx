"use client";

const ErrorCard = ({ message, handleReset }) => {
  return (
    <div className="absolute inset-0 backdrop-blur-sm z-50 bg-black/10 flex items-center justify-center">
      <div className="w-full max-w-2xl space-y-6 p-8 lg:p-10 bg-white shadow-md rounded-md flex flex-col items-center text-center">
        <h2 className="text-red-500 font-bold text-2xl">
          Oops! Something went wrong!
        </h2>
        <p>Message: {message}</p>

        <button
          onClick={handleReset}
          className="border rounded px-4 py-2 border-red-500 text-red-500 font-medium hover:bg-red-500 duration-500 hover:text-white">
          Try again
        </button>
      </div>
    </div>
  );
};

export default ErrorCard;
