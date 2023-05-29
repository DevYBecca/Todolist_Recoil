import React from 'react';
import { useRecoilState } from 'recoil';
import { todoListState } from '../todoAtoms';

const TodoItem = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  // 인덱스 번호 찾기
  const index = todoList.findIndex((listItem) => listItem === item);

  // 새로 입력한 값을 추가하기
  const editItemText = ({ target: { value } }) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    });
    setTodoList(newList);
  };

  // todoList의 완료 여부 체크하기
  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });
    setTodoList(newList);
  };

  // todoList를 삭제하기
  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);
    setTodoList(newList);
  };

  return (
    <div className='Todolist__container'>
      <input
        className='Todolist__item--check'
        type='checkbox'
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <input
        className='Todolist__item'
        type='text'
        value={item.text}
        onChange={editItemText}
      />
      <button className='Todolist__item--delete' onClick={deleteItem}>
        X
      </button>
    </div>
  );
};

export default TodoItem;

// 배열에 있는 아이템을 인덱스 번호로 찾아 새로운 값으로 수정하기
function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

// 배열에 있는 아이템 중 삭제할 항목을 제외하고 출력하기
function removeItemAtIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
