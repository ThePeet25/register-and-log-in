import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <main className="flex flex-col items-center justify-center flex-1 w-full px-4">
        <h2 className="text-5xl font-bold text-white mb-4">Error 404!!</h2>
        <p className="text-2xl text-gray-300 mb-4">Not found page.</p>
      </main>
    </div>
  );
};

export default NotFoundPage;
