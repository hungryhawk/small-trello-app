import React from 'react';
import TrelloList from '../List/TrelloList';
import ActionButton from '../ActionButton/ActionButton';
import { listsContainer } from './ListsContainer.css';
import { list } from '../../types/types';

interface ListsContainerProps {
  boardId: string;
  lists: Array<list>;
}

const ListsContainer: React.FC<ListsContainerProps> = ({ boardId, lists }) => {
  return (
    <div className={listsContainer}>
      {lists.map((list) => (
        <TrelloList key={list.listId} list={list} boardId={boardId} />
      ))}
      <ActionButton list boardId={boardId} listId={''} />
    </div>
  );
};

export default ListsContainer;
