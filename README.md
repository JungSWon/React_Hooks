##  10 Hooks for React practice

### 0. INTRODUCTION 

- [x] \#0.2ntroduction to Hooks </br>
- [x] \#0.3 Requirements </br>
- [x] \#0.4 Workflow </br>

###  1. USESTATE

- [x] \#1.0 Introduction to useState  </br>
  - [리액트 훅이 나온 이유, 클래스와 차이점, 간단한 사용법](https://www.youtube.com/watch?v=yS-BU6eYUDE)
  - [👆 정리](https://github.com/JungSWon/JavaScript/blob/master/05_01_React-by-Nomad/03-01.React-Hook-Intro.md)
- [x] \#1.1 userInput  </br>
- [x] \#1.2 userInput part Two </br>
- [x] \#1.3 useTabs </br>

### 2. USEEFFECT
- [x] \#2.0 Introduction to useEffect
- [x] \#2.1 useTitle
- [x] \#2.2 useClick
- [x] \#2.3 useConfirm & usePreventLeave
- [x] \#2.4 useBeforeLeave
- [x] \#2.5 useFadeIn & useNetwork
- [x] \#2.6 useScroll & useFullscreen
- [x] \#2.7 useNotification
- [x] \#2.8 useAxios
- [x] \#2.9 Conclusions
    - 리액트 내장 훅 또는 vanilla React로 Crazy Creative 커스텀 훅을 만들어보자
    - "Use Hooks, Use Your Brain!"-Nicolas,Nomad Coder  
- [ ] \#2.10 Publishing to NPM
- [ ] \#2.11 That to learn next 

## Custom Hooks what we're making 

Collection of React Hooks ready to install with NPM

- [x] useTitle : React doc title 을 hook과 함께 바꾸는 것 
- [x] useInput : input역할
- [x] useBeforeLeave : 유저가 페이지를 벗어나는 시점을 모니터하고 함수 실행 
- [x] useClick : 클릭 시점 모니터
- [x] useFadeIn : 어떤 element든 애니메이션을 element안으로 fade in 하게 함 
- [x] useFullscreen : 어떤 element든 Full screen으로 만들거나 다시 돌아가게 함 
- [x] useHover : 호버 시점 모니터 
- [x] useNetwork : 온/오프라인 상태 감지  
- [x] useNotification : Notification API 사용시 알림 보냄 
- [x] useScroll : 스크롤 모니터 
- [x] useTabs : 탭을 편리하게 만들어줌 
- [x] usePreventLeave : 변경사항을 저장하지 않고 페이지를 벗어나도록 함
    - actually It's not a react hook as not to use useEffect or useState 
- [x] useConfirm 
    - actually It's not a react hook as not to use useEffect or useState
- [x] useAxios 



##  IDE

- [CodeSandbox](https://codesandbox.io/index2)
    - VSC와 server등이 준비되어있는 환경
    - 소스코드 변경사항이 live build된다.  
    - 이번 강의에서 로컬 editor는 완성된 hook을 가져와서 npm에 업데이트 하는 용도로 사용한다.  