import React from "react";

export const Resize: React.FC = () => {
  return (
    <div className="flex justify-center mb-12 ">
      <span>80%</span>
      <input type="range" />
    </div>
  );
};
