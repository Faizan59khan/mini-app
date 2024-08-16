import React from "react";
import { generateRandomCode } from "../utils/helpers";

const GenerateCodeButton: React.FC = () => {
  const handleGenerateCode = () => {
    const newCode = generateRandomCode();
    alert(`Generated Code: ${newCode}`);
  };

  return (
    <button
      onClick={handleGenerateCode}
      className="bg-blue-500 text-white p-2 rounded"
    >
      Generate Discount Code
    </button>
  );
};

export default GenerateCodeButton;
