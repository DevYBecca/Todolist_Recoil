import './App.css';
import React from 'react';
import TodoItem from './components/TodoItem';
import TodoItemCreator from './components/TodoItemCreator';
import TodoListFilters from './components/TodoListFilters';
import TodoListStats from './components/TodoListStats';
import { useRecoilValue } from 'recoil';
import { filteredTodoListState } from './todoAtoms';

function App() {
  // Filtering된 todoList를 가져오기
  const filteredTodoList = useRecoilValue(filteredTodoListState);

  return (
    <div className='App'>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      {filteredTodoList.map((todoItem) => {
        return <TodoItem key={todoItem.id} item={todoItem} />;
      })}
    </div>
  );
}

export default App;
