import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="bg-gray-800 min-h-screen flex flex-col items-center justify-center text-center p-6">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-white mb-4">
          Oops! Page not found
        </h2>
        <p className="text-gray-300 mb-6">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/"
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
          >
            Go Back Home
          </Link>
          <Link 
            to={"/contact"}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
          >
            Report Problem
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
