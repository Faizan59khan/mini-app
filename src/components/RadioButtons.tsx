import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { setSelectedOption } from "../store/appSlice";

const RadioButtons: React.FC = () => {
  const dispatch = useDispatch();
  const selectedOption = useSelector(
    (state: RootState) => state.app.selectedOption
  );

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSelectedOption(event.target.value));
  };

  return (
    <div className="space-y-2">
      {["Option A", "Option B", "Option C"].map((option) => (
        <label key={option} className="flex items-center">
          <input
            type="radio"
            value={option}
            checked={selectedOption === option}
            onChange={handleOptionChange}
            className="mr-2"
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default RadioButtons;
