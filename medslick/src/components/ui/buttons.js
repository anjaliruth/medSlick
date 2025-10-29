import React from "react";

export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`px-4 py-2 bg-pink-600 text-white rounded hover:bg-black-700 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}