import { useState } from 'react';
import { useTypedDispatch, useTypedSelector } from '../utilities/reduxHooks.ts';

import {
  appContainer,
  board,
  buttons,
  deleteBoardButton,
  loggerButton,
} from './App.css.ts';

import {DragDropContext} from 'react-beautiful-dnd'
import {v4} from 'uuid';

function App() {
  return (
    <div className={appContainer}>
      {modalActive ? <ModalEdit /> : null}
      <BoardList
        setActiveBoardId={setActiveBoardId}
        activeBoardId={activeBoardId}
      />
      <div className={board}>
        <DragDropContext onDragEnd={onDragEnd}>
          <ListsContainer lists={lists} boardId={getActiveBoard.boardId} />
        </DragDropContext>
        {loggerOpen ? <LogggerModal /> : null}
      </div>
      <div className={buttons}>
        <button className={deleteBoardButton} onClick={handleDeleteBoard}>
          Delete this board
        </button>
        <button className={loggerButton} onClick={handleOpenLogger}>
          {loggerOpen ? 'Hide activity history' : 'Show activity history'}
        </button>
      </div>
    </div>
  );
}

export default App;
