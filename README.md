# 송유현 202130411

---

## 📘 React 수업 내용

### 5월 22일 (12주차)(react-filterable-table브랜치에서 작업)
- 프로젝트에 도입하기 (Installation)
    - React는 점진적으로 적용할 수 있도록 설계됨.
    - 단순히 HTML에 React만 추가하거나, 복잡한 앱을 만들 때에도 사용 가능.
    - 이 장에서는 다음을 다룸
        - 새 프로젝트 시작
        - 기존 프로젝트에 React 추가
        - 에디터 설정
        - 개발 도구 설치

- 새로운 React 앱 만들기 (프레임워크로 시작)
    - 프레임워크부터 시작하는 것이 좋음.
    - 예: Next.js, Expo 등이 대표적.
    - 프레임워크는 배포/확장에 필요한 기능 포함.
    - HTML만으로도 동작 가능 (서버 필요 없음)

- React 앱 프레임워크 예시
    - Next.js
        - Vercel이 관리, Node.js 서버 사용 가능, 서버 없는 내부 라우팅도 지원
    - React Router (v7)
        - Vite와 함께 사용 가능, 다양한 Web API와 연동

- 모바일 앱용 프레임워크
    - Expo (React Native 기반)
        - 안드로이드/iOS 앱 개발 가능
        - 무료 배포 가능, Expo에서 유지 관리
    풀스택 React 프레임워크
        - 예: RedwoodJS, TanStack Start

- 기존 프레임워크 없이 시작하기 (자체 구성)
    - 라우팅, 데이터 패칭 등을 직접 설정 가능
    - 직접 구성할 수 있는 빌드 도구
        - Vite, Parcel, Rspack 등
    - 선택적으로 필요한 기능만 도입 가능

- 코드 분할 및 성능 개선
    - React.lazy()로 코드 분할 가능
    - 초기 로딩 시 데이터와 코드의 waterfall 문제 존재
    - 이를 줄이기 위한 빌드 도구 최적화 링크
        - Vite, Parcel, Rspack 관련 문서 제공

- SPA(단일 페이지 앱)의 성능 개선
    - SPA는 HTML 하나로 동작 → 초기 로딩 지연될 수 있음
    - SSG, SSR, RSC 등 사용하면 성능 향상 가능
    - React Server Components는 DB 접근 등 서버작업 가능

### 5월 15일 (11주차)(react-filterable-table브랜치에서 작업)
- UI를 컴포넌트 계층으로 쪼개기
    - 컴포넌트 구성 (기능별로 분리)
        - FilterableProductTable: 전체 UI를 감싸는 상위 컴포넌트
        - SearchBar: 검색창 + 체크박스를 포함, 사용자 입력을 받음
        - ProductTable: 필터링된 상품 리스트 표시
        - ProductCategoryRow: 카테고리 제목 (예: Fruits, Vegetables)
        - ProductRow: 각 상품 항목 (예: Apple, Dragonfruit 등)

- 최소한의 데이터만으로 UI 상태 표현하기
    - State 최소화 원칙
        - UI가 기억해야 할 최소한의 상태만 state로 관리
        - 계산 가능한 값은 state가 아닌 일반 변수로 처리

    - 데이터 예시
        - 제품 원본 목록 → ❌ props로 전달되므로 state 아님
        - 사용자 검색어 → ✅ 직접 입력되며 다른 값으로 계산 불가 → state
        - 체크박스 값 → ✅ 직접 조작되며 계산 불가 → state
        - 필터링된 제품 목록 → ❌ 검색어/체크박스 기반으로 계산 가능 → state 아님
    
결론: 검색어와 체크박스 값만 state로 관리!

- State가 어디에 있어야 할 지 정하기
    - State 위치 선정 절차
        - 해당 state를 사용하는 모든 컴포넌트를 찾는다
        - 그 중 가장 가까운 공통 부모 컴포넌트를 찾는다
        - 해당 부모에 state를 배치한다
    
    - 실제 구현 예시
        - FilterableProductTable에서 2개의 state 선언
            ```sh
            const [filterText, setFilterText] = useState('');
            const [inStockOnly, setInStockOnly] = useState(false);
            ```
        - 그리고 이 값을 props로 SearchBar, ProductTable에 전달
    
    - 주의사항
        - SearchBar에서 input과 checkbox의 value를 props로 받고 변경은 onChange로 전달해야 한다.
        - 단순히 value만 주고 onChange가 없으면 read-only warning 발생함

### 5월 08일 (10주차)(react-filterable-table브랜치에서 작업)
- JSON API 예시
```js
[
  { "category": "Fruits", "price": "$1", "stocked": true, "name": "Apple" },
  { "category": "Fruits", "price": "$1", "stocked": true, "name": "Dragonfruit" },
  { "category": "Fruits", "price": "$2", "stocked": false, "name": "Passionfruit" },
  { "category": "Vegetables", "price": "$2", "stocked": true, "name": "Spinach" },
  { "category": "Vegetables", "price": "$4", "stocked": false, "name": "Pumpkin" },
  { "category": "Vegetables", "price": "$1", "stocked": true, "name": "Peas" }
]
```

- UI를 컴포넌트 계층으로 쪼개기
    - FilterableProductTable – 전체를 포함하는 상위 컴포넌트
    - SearchBar – 검색어, 체크박스를 입력받음
    - ProductTable – 제품 리스트 출력
    - ProductCategoryRow – 카테고리별 헤더
    - ProductRow – 개별 제품 행

- 정적인 컴포넌트 구현
    - props를 통해 상위 컴포넌트에서 하위 컴포넌트로 데이터 전달
    - JSX만 사용한 렌더링
    - 아직 state는 사용하지 않음
    - 상위 트리부터 단방향 데이터 흐름 유지

- 최소한의 state로 동적 UI 구현
  - 어플리케이션에서 사용하는 데이터
    - 제품의 원본 목록
    - 사용자의 검색어
    - 체크박스 선택 여부
    - 필터링된 제품 목록
  
  - 아래 조건 중 하나라도 참이면 state 아님
    - 시간이 지나도 변하지 않는다
    - props로 전달된다
    - 계산 가능하다
    - 남은 값이 state

### 4월 24일 (8주차)(중간고사)

### 4월 18일 (9주차 보강)(tic-tac-toe브랜치에서 작업)
- 과거 이동을 위한 map() 사용
    - history.map()으로 각 게임 상태를 버튼으로 렌더링.
    - 각 버튼은 jumpTo(move)를 호출함.
```js
const moves = history.map((squares, move) => {
  const description = move ? `Go to move #${move}` : "Go to game start";
  return (
    <li key={move}>
      <button onClick={() => jumpTo(move)}>{description}</button>
    </li>
  );
});
```

- key의 중요성
    - map으로 렌더링하는 <li> 요소에는 반드시 key={move} 지정.
    - React는 key를 통해 각 요소를 구분하고 효율적으로 리렌더링함.

- jumpTo 함수로 상태 이동
    - 클릭한 move를 기준으로 현재 상태 업데이트.
    - 짝수는 X 차례, 홀수는 O 차례로 처리.
```js
const [currentMove, setCurrentMove] = useState(0);

function jumpTo(nextMove) {
  setCurrentMove(nextMove);
  setXIsNext(nextMove % 2 === 0);
}
```

- 랜더링 기준 변경
    - 항상 마지막 상태가 아닌, 선택한 시점의 보드를 렌더링하도록 수정.
```js
const currentSquares = history[currentMove];
```

### 4월 17일 (7주차)(tic-tac-toe브랜치에서 작업)
- state 끌어올리기 - 개요
    - 처음엔 각 Square(칸)마다 개별적으로 X를 찍을 수 있었지만, 오직 왼쪽 위 Square만 가능했음.
    - handleClick 함수가 index 0에만 적용되어 있어서임.
    - Square 클릭 시 어떤 index를 클릭했는지 상위 컴포넌트(Board) 에서 처리하도록 state를 끌어올려야 함.

- 인덱스 기반으로 handleClick 함수 재정의
    - handleClick(index)로 index를 인자로 받아서하면 클릭된 Square의 index에 따라 값이 업데이트됨.
```js
const nextSquares = squares.slice();
nextSquares[i] = "X";
setSquares(nextSquares);
```

- 콜백 함수 전달 방식의 실수
    - onSquareClick={handleClick(i)}를 하면 함수가 즉시 실행되어 오류 발생하므로 화살표 함수를 사용해 함수 자체를 넘겨야 함.
```js
onSquareClick={() => handleClick(i)}
```

- 불변성의 중요성
    - xIsNext라는 state를 추가해서 다음에 누가 둘 차례인지 추적
```js
const [xIsNext, setXIsNext] = useState(true);
...
nextSquares[i] = xIsNext ? "X" : "O";
setXIsNext(!xIsNext);
```

- 승자 판단하기
    - 클릭 시 calculateWinner(squares)를 실행해서 누군가 승리했는지 확인
    - 이미 값이 있거나, 승자가 있는 경우 클릭 이벤트는 무시
```js
if (squares[i] || calculateWinner(squares)) return;
```

- 승자 판단 후 상태 메시지 출력
    - calculateWinner(squares)를 호출해서 승자가 있는지 확인
    - 있으면 status = "Winner: X" 또는 "Winner: O", 없으면 status = "Next player: X" 또는 "Next player: O"
```js
const winner = calculateWinner(squares);
let status;
if (winner) {
  status = "Winner: " + winner;
} else {
  status = "Next player: " + (xIsNext ? "X" : "O");
}
```

- 히스토리 배열로 이전 상태 저장
    - squares 배열을 직접 수정하지 않고, 매 클릭마다 slice()로 복사해서 저장 후 모아서 history 배열에 저장
```js
const history = [
  [null, null, ..., null],   // 첫 턴
  ["X", null, ..., null],    // 두 번째 턴
  ["X", "O", ..., null],     // 세 번째 턴
];
```

- Game 컴포넌트에서 state 끌어올리기
    - 이제 Board가 아니라 Game 컴포넌트가 전체 상태 관리의 중심
    - history를 Game에서 관리하고 Board에는 squares 상태를 props로 넘김

- 컴포넌트 구조 변화
    - Game이 최상위 컴포넌트가 되고 App.js나 index.js에서 Board 대신 Game을 렌더링
```js
export default function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <ol>{/* TODO: 히스토리 버튼 렌더링 */}</ol>
      </div>
    </div>
  );
}
```

### 4월 10일 (6주차)
- 병결

### 4월 3일 (5주차)
- 이벤트에 응답하기
    React에서는 컴포넌트 내부에 이벤트 핸들러 함수를 선언해 사용자 이벤트에 응답할 수 있음.
    onClick={함수이름} 형태로 작성하며, 괄호를 붙이지 않음(즉시 실행 방지).
    버튼 클릭 시 해당 함수가 호출됨.

- 화면 업데이트하기 (useState)
    값을 기억하고 표시하려면 state를 사용함.
    useState()로 변수와 업데이트 함수를 선언하고, 필요 시 set함수로 값을 변경함.
    버튼 클릭 등을 통해 값을 변경하면 화면도 함께 갱신됨.

- Hook 사용하기
    use로 시작하는 함수를 Hook이라 하며, React에서 제공하는 상태/라이프사이클 관리 도구임.
    Hook은 컴포넌트 또는 사용자 정의 Hook 내부에서만 사용할 수 있음.
    조건문, 반복문 안에서는 사용할 수 없음 (항상 컴포넌트 최상단에서 호출).

- Hooks의 사용 규칙

    최상위에서만 호출할 것

    React 함수형 컴포넌트 또는 사용자 정의 Hook 안에서만 사용 가능
    → 이는 React의 렌더링 순서와 상태 추적을 정확히 하기 위해 필요한 규칙임.

- component 간 데이터 공유
    각각의 컴포넌트는 독립적인 state를 가짐.
    동일한 컴포넌트를 여러 번 사용해도 각자의 state를 유지함.
    공통 데이터를 사용하려면 상위 컴포넌트에서 state를 선언하고 props로 하위에 전달해야 함.
    
### 3월27일(4주차)
- Component와 Nesting

    React 앱은 component 단위로 구성됨.

    component는 UI의 일부분으로, 버튼처럼 작거나 페이지처럼 클 수 있음.

    JavaScript 함수로 작성되며 마크업을 반환함.

    CSS 중첩(Nesting)을 통해 스타일 구성 가능 (2023년부터 CSS에서 직접 지원).

- export와 import

    export default: 기본 component 내보낼 때 사용.

    export: 여러 개의 component를 내보낼 때 사용.

    import 시 default는 이름 자유롭게 지정 가능, export는 정확한 이름 사용해야 함.

- 스타일 추가하기

    React에서는 class 대신 className 사용.

    별도의 CSS 파일에 작성 후, import로 불러와 사용.

    HTML처럼 <link> 태그로 불러오는 방식은 비추천.

- 데이터 표시하기 (JSX 사용법)

    JSX에서는 마크업 안에 JavaScript 표현식을 중괄호 {}로 사용.

    className, src 등에 변수 전달 가능.

- 스타일 적용 확인 및 Profile 컴포넌트

    작성한 CSS를 import 하여 적용.

    Profile 컴포넌트에 사용자 정보(이름, 이미지, 사이즈 등) 전달 및 출력.

- 데이터 중앙 정렬하기

    App.css에 wrapper class 추가 후 App.js에 적용.

    중앙 정렬 등의 스타일은 공통 CSS(App.css)에 정의 가능.

- 조건부 렌더링

    일반 JS 문법 그대로 사용 (if-else, 삼항 연산자, && / || 연산자 등).

    상황에 따라 다른 컴포넌트를 반환.

- 리스트 렌더링

    map() 함수를 사용하여 배열을 반복 렌더링.

    각 항목에는 고유한 key 속성 필요.

    예제: jsoppingList 컴포넌트를 만들어 출력 확인.

### 3월20일(3주차)
- React란?
    - 컴포넌트 기반의 UI 라이브러리
    - 각 컴포넌트는 작은 기능 단위로 구성
    - 이들을 조합하여 전체 웹 애플리케이션을 구현

- 컴포넌트 구조
    - React 컴포넌트는 JavaScript 함수로 작성됨
    - JSX 문법을 사용하여 UI 요소 반환
    - 조건부 렌더링: 특정 조건에 따라 요소 표시 여부 결정
    - 리스트 렌더링: 배열을 기반으로 반복 출력 (ex. map())

- 확장: Full-stack React Framework
    - Next.js, Remix 등은 React 기반의 서버 사이드 기능 제공
    - 라우팅 처리
    - 서버 측 데이터 가져오기 (SSR / API 연동)
    - SEO 최적화

- 프로젝트 구조
    - 모든 주요 코드는 src/ 폴더 안에 위치
    - App.js: 전체 앱의 중심이 되는 루트 컴포넌트

- 의존성 관리
    - package.json을 통해 라이브러리 및 설정 관리
    - 협업 시에는 'npm install'으로 동일한 환경 구성 가능

---

## 📘 React 실습 프로젝트 정리

이 저장소는 2024년 React 수업에서 진행한 실습 내용을 정리한 자료입니다.

---

## 📘 Git Bash 명령어
```js
cd ~/Desktop
npx create-react-app 프로젝트이름
cd 프로젝트이름
npm start
```
