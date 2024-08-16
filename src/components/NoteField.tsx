import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { setNote } from "../store/appSlice";

const NoteField: React.FC = () => {
  const dispatch = useDispatch();
  const note = useSelector((state: RootState) => state.app.note);

  const handleNoteChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setNote(event.target.value));
  };

  return (
    <textarea
      value={note}
      onChange={handleNoteChange}
      placeholder="Enter your notes here"
      className="border p-2 w-full h-32"
    />
  );
};

export default NoteField;
