import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setDiscountCode } from "../store/appSlice";
import { validateCode } from "../utils/helpers";

const DiscountCodeInput: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toUpperCase();
    setInputValue(value);

    if (validateCode(value)) {
      setError("");
      dispatch(setDiscountCode(value));
    } else {
      setError(
        "Invalid code. Code must start with letters followed by numbers."
      );
    }
  };

  return (
    <div className="space-y-2">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter discount code eg. NEWCODE123"
        className="border p-2 w-full"
      />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default DiscountCodeInput;
