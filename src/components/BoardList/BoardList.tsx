import React, { useState } from "react";
import {
  addButton,
  addSection,
  boardItem,
  boardItemActive,
  container,
  smallTitle,
  title,
} from "./BoardList.css";
import { FiPlusCircle } from "react-icons/fi";
import { useTypedSelector } from "../../utilities/reduxHooks";
import SideForm from "./SideForm/SideForm";
import clsx from "clsx";

interface BoardListProps {
  activeBoardId: string;
  setActiveBoardId: any;
}

const BoardList: React.FC<BoardListProps> = ({
  setActiveBoardId,
  activeBoardId,
}) => {
  const [formOpen, setFormOpen] = useState(false);
  const boards = useTypedSelector(state => state.boards.boardArray);


  // функция котороя повзовляет увидеть инпут в создании формы 
  const addButtonHandler = () => {
    setFormOpen(!formOpen);
  };
  // --------- 

  // переключиться на активный борд 
  const handleChooseBoard = (index: number) => {
    setActiveBoardId(boards[index].boardId);
  };

  return (
    <div className={container}>
      <div className={title}>Boards: </div>
      {boards.map((board, index) => (
        // если борд активен, класс один, если не активен, то другой 
        <div
          className={clsx(
            {
              // активный борд 
              [boardItemActive]:
                boards.findIndex(board => board.boardId === activeBoardId) ===
                index,
            },
            {
              // неактивный борд 
              [boardItem]:
                boards.findIndex(board => board.boardId === activeBoardId) !==
                index,
            }
          )}
          key={board.boardId}
        >
          {/* функция по клику на название борда переключается  */}
          <div onClick={() => handleChooseBoard(index)}>{board.boardName}</div>
        </div>
      ))}
      <div className={addSection}>
        {/* когда нажимаем на плюс в квадрате, открывается side dorm с инпутом  */}
        {formOpen ? (
          <SideForm setFormOpen={setFormOpen} />
        ) : (
          <>
            <div className={smallTitle}>Create new board </div>
            <FiPlusCircle className={addButton} onClick={addButtonHandler} />
          </>
        )}
      </div>
    </div>
  );
};

export default BoardList;
