# 송유현 202130411

---

## React 수업 내용

### 4월 17일 (7주차)(tic-tac-toe브랜치에서 작업)
- state 끌어올리기 - 개요
    - 처음엔 각 Square(칸)마다 개별적으로 X를 찍을 수 있었지만, 오직 왼쪽 위 Square만 가능했음.
    - handleClick 함수가 index 0에만 적용되어 있어서임.
    - Square 클릭 시 어떤 index를 클릭했는지 상위 컴포넌트(Board) 에서 처리하도록 state를 끌어올려야 함.

- 인덱스 기반으로 handleClick 함수 재정의
    - handleClick(index)로 index를 인자로 받아서하면 클릭된 Square의 index에 따라 값이 업데이트됨.
```sh
const nextSquares = squares.slice();
nextSquares[i] = "X";
setSquares(nextSquares);
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

    예제: ShoppingList 컴포넌트를 만들어 출력 확인.

### 3월20일(3주차)
React는 컴포넌트 기반으로 UI를 구성하는 라이브러리로, 각 컴포넌트는 작은 기능을 수행하며, 이를 조합하여 웹 애플리케이션을 구축한다.
React에서 컴포넌트는 JavaScript 함수이며, 조건부 렌더링이나 리스트 렌더링을 통해 동적 UI를 생성한다.
이를 위해 Next.js, Remix 같은 Full-stack React Framework를 사용하면 서버 측 데이터 처리 및 라우팅을 효율적으로 할 수 있다.
프로젝트 구조는 src/ 폴더에 주요 코드가 위치하고, App.js가 메인 컴포넌트 역할을 한다. 또한, package.json을 통해 프로젝트의 의존성 관리를 하며, 협업 시에는 npm install을 실행해 동일한 개발 환경을 유지해야 한다.

---

## 🎨 React 수업 프로젝트 - React App

이 프로젝트는 **React 수업**에서 활용하기 위한 실습 프로젝트입니다.  
React의 기본 개념을 익히고, 컴포넌트 기반 UI 개발을 연습하는 데 목적이 있습니다. 🚀

---

## 🛠️ 자주 사용하는 Git Bash 명령어

### 1️⃣ 프로젝트 시작할 때
```sh
git init                                                        # 현재 폴더를 Git 저장소로 초기화
git remote add origin https://github.com/songyh00/react-class-2025.git  # GitHub 원격 저장소 추가
git clone https://github.com/songyh00/react-class-2025.git      # GitHub에서 프로젝트 다운로드
```

### 2️⃣ 변경 사항 저장하기
```sh
git status                      # 현재 변경된 파일 확인
git add .                       # 모든 변경된 파일 스테이징
git commit -m "커밋 메시지"      # 변경 사항 커밋
```

### 3️⃣ GitHub에 올리기 & 최신 코드 가져오기
```sh
git push origin main            # GitHub에 코드 업로드
git pull origin main            # GitHub에서 최신 코드 가져오기
```

### 4️⃣ 브랜치 관련
```sh
git branch                     # 현재 브랜치 확인
git branch <브랜치_이름>        # 새 브랜치 생성
git checkout <브랜치_이름>      # 다른 브랜치로 이동
git checkout -b <브랜치_이름>   # 새 브랜치 생성 후 이동
git merge <브랜치_이름>         # 현재 브랜치에 다른 브랜치 병합
git branch -d <브랜치_이름>     # 브랜치 삭제
```

### 5️⃣ 이전 커밋 되돌리기 (Revert & Reset)
```sh
git revert <커밋해시>           # 특정 커밋 되돌리기 (새로운 커밋 생성)
git reset --soft HEAD~1         # 최근 1개 커밋을 취소 (변경 내용 유지)
git reset --hard HEAD~1         # 최근 1개 커밋을 완전히 삭제 (⚠ 되돌릴 수 없음!)
```

### 6️⃣ 특정 파일만 되돌리기
```sh
git checkout -- <파일명>        # 특정 파일 변경사항 되돌리기
git restore <파일명>            # 최신 커밋 상태로 파일 복원
```

### 7️⃣ 작업 내용 임시 저장 (Stash)
```sh
git stash                   # 현재 변경 사항을 임시 저장
git stash pop               # 저장된 변경 사항 다시 적용
git stash list              # 저장된 stash 목록 확인
git stash drop              # 특정 stash 삭제
```

### 8️⃣ 원격 저장소 관련
```sh
git remote -v                                 # 연결된 원격 저장소 확인
git remote set-url origin <새로운_저장소_URL>  # 원격 저장소 변경
git remote remove origin                      # 원격 저장소 삭제
```

### 9️⃣ 강제 푸시 / 강제 풀 (⚠ 조심해서 사용!)
```sh
git push --force              # 강제 푸시 (⚠ 원격 저장소에 강제 적용)
git reset --hard origin/main  # 원격 저장소 기준으로 강제 덮어쓰기 (⚠ 기존 변경 사항 삭제됨)
```

### 🔟 기타 유용한 명령어
```sh
clear                       # 터미널 화면 정리
ls -la                      # 현재 폴더의 모든 파일 보기
cd <폴더명>                 # 폴더 이동
cd ..                       # 상위 폴더로 이동
git log --oneline           # 커밋 로그 한 줄로 보기
```
