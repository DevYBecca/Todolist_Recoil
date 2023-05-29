# 📌 할 일 관리(Todo)

주어진 API를 활용해 '[완성 예시](https://beautiful-daifuku-b9462c.netlify.app/)' 처럼 자유롭게 할 일 관리(Todo) 기능을 구현해보세요!  
과제 수행 및 리뷰 기간은 별도 공지를 참고하세요!

## 요구사항

필수 요구사항은 꼭 달성해야 하는 목표로, 수정/삭제는 불가하고 추가는 가능합니다.  
선택 요구사항은 단순 예시로, 자유롭게 추가/수정/삭제해서 구현해보세요.  
각 요구사항은 달성 후 마크다운에서 `- [x]`로 표시하세요.

### ❗ 필수

- [x] 할 일 목록(List)이 출력돼야 합니다.
- [x] 할 일 항목(Item)을 새롭게 추가할 수 있어야 합니다.
- [x] 할 일 항목을 수정할 수 있어야 합니다.
- [x] 할 일 항목을 삭제할 수 있어야 합니다.
- [x] 실제 서비스로 배포하고 접근 가능한 링크를 추가해야 합니다.

### ❔ 선택

- [ ] 할 일 항목의 순서를 바꿀 수 있도록 만들어보세요. (추천 라이브러리 - [SortableJS](http://sortablejs.github.io/Sortable/))
- [x] 할 일을 완료하지 않은 항목과 완료한 항목을 분류해서 출력해보세요.
- [ ] 할 일을 완료한 항목을 한 번에 삭제할 수 있도록 만들어보세요.
- [ ] 할 일 항목의 최신 수정일을 표시해보세요.
- [ ] 할 일 목록이 출력되기 전에 로딩 애니메이션이 보이도록 만들어보세요.
- [ ] 기타 동작이 완료되기 전에 로딩 애니메이션이 보이도록 만들어보세요.
- [x] 차별화가 가능하도록 프로젝트를 최대한 예쁘게 만들어보세요.
- [x] 할 일과 관련된 기타 기능도 고려해보세요.

### 기술 스택

<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/Recoil-3578E5?style=for-the-badge&logo=&logoColor=white">

### 고찰

- React 상태 관리 라이브러리인 Recoil을 사용
  - Recoil 공식 문서를 참고하여 진행하다보니 아직 전반적인 이해가 부족함
- To do list의 토탈 개수, 달성하지 못한 항목 개수, 달성률을 기타 기능으로 추가
- 로직 구현이 미흡하여 시간이 부족해 UI 디자인은 css로만 작업한 점이 아쉬움
- API 호출과 배포 오류가 있어 현재 수정 중
