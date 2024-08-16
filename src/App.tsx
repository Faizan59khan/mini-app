import React from "react";
import RadioButtons from "./components/RadioButtons";
import DiscountCodeInput from "./components/DiscountCodeInput";
import GenerateCodeButton from "./components/GenerateCodeButton";
import NoteField from "./components/NoteField";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="p-4 space-y-4 max-w-md w-full border border-gray-300 bg-gray-100 rounded-lg shadow-lg">
        <h1 className="text-xl font-bold text-center">
          React TypeScript Mini-App
        </h1>
        <RadioButtons />
        <DiscountCodeInput />
        <GenerateCodeButton />
        <NoteField />
      </div>
    </div>
  );
};

export default App;
