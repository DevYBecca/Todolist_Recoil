import React from 'react';
import { useRecoilState } from 'recoil';
import { todoListFilterState } from '../todoAtoms';

const TodoListFilters = () => {
  // todoListFilterState Atom의 값을 가져오기
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  // Filtering을 하기 위해 Filter 기준을 선택하면 실행됨
  const updateFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  return (
    <div className='Todolist__filters'>
      Are you done?
      <select className='filters--state' value={filter} onChange={updateFilter}>
        <option value='Show All'>ALL</option>
        <option value='Show Completed'>COMPLETED</option>
        <option value='Show Uncompleted'>UNCOMPLETED</option>
      </select>
    </div>
  );
};

export default TodoListFilters;
