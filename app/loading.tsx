import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900 mb-4"></div>
      <p className="text-xl font-semibold text-gray-700">Loading...</p>
    </div>
  );
};

export default Loading;
