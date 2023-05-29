import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoListStatsState } from '../todoAtoms';

// todoAtoms의 selector를 가져오기
// todoList의 총 개수, 완료된 개수, 완료되지 않은 개수, 수행정도(%)
const TodoListStats = () => {
  const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted } =
    useRecoilValue(todoListStatsState);

  const formattedPercentCompleted = Math.round(percentCompleted * 100);
  return (
    <div>
      <h1 className='Todolist__title'>TO DO LIST</h1>
      <ul className='Todolist__stats'>
        <li>Total - {totalNum} tasks</li>
        <li>Not Completed - {totalUncompletedNum} tasks</li>
        <li>Completion Percentage - {formattedPercentCompleted}%</li>
      </ul>
    </div>
  );
};

export default TodoListStats;
