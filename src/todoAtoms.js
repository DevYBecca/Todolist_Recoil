import { atom, selector } from 'recoil';

// Atom은 상태의 일부를 나타내고, 컴포넌트들이 구독함
// todoList의 아이템들을 배열에 하나씩 넣어줌
export const todoListState = atom({
  key: 'todoListState',
  default: [],
});

// TodoList를 필터링할 수 있는 기준이 되는 Atom
export const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: 'Show All',
});

// todoListState Atom이나 todoListFilterState Atom의
// 상태가 변경되면 재렌더링 될 selector
// todoList의 filtering을 담당
export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case 'Show Completed':
        return list.filter((item) => item.isComplete);
      case 'Show Uncompleted':
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});

// todoList의 총 개수, 완료된 개수, 완료되지 않은 개수, 수행정도(%)
export const todoListStatsState = selector({
  key: 'todoListStatsState',
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  },
});
