import React from "react";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <main className="flex flex-col items-center justify-center flex-1 w-full px-4">
        <h2 className="text-2xl font-bold text-white mb-4">Home Page</h2>
        <p className="text-lg text-gray-300 mb-4">
          This is the home page of the Monkey Project.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
