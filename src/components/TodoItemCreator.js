import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../todoAtoms';

const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState('');

  // input 태그에 타이핑한 내용을 Atom을 넣어주기 위해
  // Atom의 내용을 업데이트하는 useSetRecoilState() hook 이용
  const setTodoList = useSetRecoilState(todoListState);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  // todoList 업데이트 및 추가 후 input 태그 초기화
  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue('');
  };

  return (
    <div className='Todolist__input'>
      <input
        className='input__area'
        type='text'
        placeholder='Please enter your to do!'
        value={inputValue}
        onChange={handleChange}
      />
      <button className='input__button' onClick={addItem}>
        ADD
      </button>
    </div>
  );
};

// todoList 업데이트 시 추가될 배열의 고유한 id 생성
let id = 0;
function getId() {
  return id++;
}

export default TodoItemCreator;
