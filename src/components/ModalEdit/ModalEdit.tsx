import { ChangeEvent, useState } from "react";
import {
  buttons,
  closeButton,
  deleteButton,
  header,
  input,
  modalWindow,
  title,
  updateButton,
  wrapper,
} from "./ModalEdit.css";
import { FiX } from "react-icons/fi";
import { useTypedDispatch, useTypedSelector } from "../../utilities/reduxHooks";
import {
  deleteTask,
  setModalActive,
  updateTask,
} from "../../redux/slices/boardsSlice";
import { addLog } from "../../redux/slices/loggerSlice";
import { v4 } from "uuid";

const ModalEdit = () => {
  const dispatch = useTypedDispatch();
  const editingState = useTypedSelector(state => state.modal);
  const [data, setData] = useState(editingState);

  const handleCloseButton = () => {
    dispatch(setModalActive(false));
  };

  const handleUpdate = () => {
    dispatch(
      updateTask({
        boardId: editingState.boardId,
        listId: editingState.listId,
        task: data.task,
      })
    );
    dispatch(
      addLog({
        logId: v4(),
        logMessage: `Update task: ${editingState.task.taskName}`,
        logAuthor: "User",
        logTimestamp: String(Date.now()),
      })
    );
    dispatch(setModalActive(false));
  };

  const handleDelete = () => {
    dispatch(
      deleteTask({
        boardId: editingState.boardId,
        listId: editingState.listId,
        taskId: editingState.task.taskId,
      })
    );
    dispatch(
      addLog({
        logId: v4(),
        logMessage: `Delete task: ${editingState.task.taskName}`,
        logAuthor: "User",
        logTimestamp: String(Date.now()),
      })
    );
    dispatch(setModalActive(false));
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, task: { ...data.task, taskName: e.target.value } });
  };
  const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      task: { ...data.task, taskDescription: e.target.value },
    });
  };

  return (
    <div className={wrapper}>
      <div className={modalWindow}>
        <div className={header}>
          <div className={title}>{editingState.task.taskName}</div>
          <FiX className={closeButton} onClick={handleCloseButton} />
        </div>
        <div className={title}>Task name</div>
        <input
          type="text"
          className={input}
          value={data.task.taskName}
          onChange={handleNameChange}
        />
        <div className={title}>Task description</div>
        <input
          type="text"
          className={input}
          value={data.task.taskDescription}
          onChange={handleDescriptionChange}
        />
    
        <div className={buttons}>
          <button className={updateButton} onClick={handleUpdate}>
            Update task
          </button>
          <button className={deleteButton} onClick={handleDelete}>
            Delete task
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalEdit;
