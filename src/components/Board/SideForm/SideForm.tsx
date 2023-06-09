import React, { ChangeEvent, useState } from "react";
import { icon, input, sideForm } from "./SideForm.css";
import { MdOutlineAdd } from "react-icons/md";
import { useTypedDispatch } from "../../../utilities/reduxHooks";
import { addBoard } from "../../../redux/slices/boardsSlice";
import { v4 as uuidv4, v4 } from "uuid";
import { addLog } from "../../../redux/slices/loggerSlice";

interface SideFormProps {
  setFormOpen: any;
}

const SideForm: React.FC<SideFormProps> = ({ setFormOpen }) => {
  const [text, setText] = useState("");
  const dispatch = useTypedDispatch();

  const handleOnBlur = () => {
    setFormOpen(false);
  };

  const handleAddBoard = () => {
    if (text) {
      dispatch(
        addBoard({ board: { boardId: v4(), boardName: text, lists: [] } })
      );
      dispatch(
        addLog({
          logId: v4(),
          logMessage: `Create board: ${text}`,
          logAuthor: "User",
          logTimestamp: String(Date.now()),
        })
      );
    }

    setFormOpen(false);
  };

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div className={sideForm}>
      <input
        type="text"
        autoFocus
        onBlur={handleOnBlur}
        className={input}
        onChange={handleTextChange}
        placeholder="Enter new board name"
      />
      <MdOutlineAdd className={icon} onMouseDown={handleAddBoard} />
    </div>
  );
};

export default SideForm;
