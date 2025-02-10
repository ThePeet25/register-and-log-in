import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <main className="flex flex-col items-center justify-center flex-1 w-full px-4">
        <h2 className="text-2xl font-bold text-white mb-4">Home Page</h2>
        <p className="text-lg text-gray-300 mb-4">
          This is the home page of the Monkey Project.
        </p>
      </main>
      <footer className="bg-white w-full py-4 mt-4">
        <p className="text-neutral-800 text-center">© 2025 Monkey Project. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;