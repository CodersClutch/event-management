import React from "react";

const Loader = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-5 space-y-4">
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 border-4 border-purple-500 border-t-transparent rounded-full animate-spin-slow"></div>

          <div className="absolute top-0 left-1/2 -ml-1.5 w-3 h-3 bg-pink-500 rounded-full animate-orbit"></div>
          <div className="absolute top-0 left-1/2 -ml-1.5 w-3 h-3 bg-blue-500 rounded-full animate-orbit-delayed"></div>

          <div className="absolute inset-4 bg-purple-600 rounded-full animate-pulse-blink"></div>
        </div>

        <p className="text-gray-500 font-medium animate-text-wave">
          <span>L</span>
          <span>o</span>
          <span>a</span>
          <span>d</span>
          <span>i</span>
          <span>n</span>
          <span>g</span>
          <span> </span>
          <span>e</span>
          <span>v</span>
          <span>e</span>
          <span>n</span>
          <span>t</span>
          <span>s</span>
          <span className="animate-dots">...</span>
        </p>
      </div>
    </div>
  );
};

export default Loader;
