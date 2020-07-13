import React from "react";

export const usePreventLeave = () => {
    const listener = e => {
        console.log(e)
        e.preventDefault(); // beforeunload.preventDefault()
        e.returnValue = ""; // beforeunload 를 이벤트로 받을 때 그냥 써야함, 크롬의 문제
    };
    // {enablePrevent}가 onClick으로 들어오면 beforeunload 이벤트를 모니터해서 listener실행
    // beforeunload : window가 닫히기 전에 실행
    const enablePrevent = () => window.addEventListener("beforeunload", listener);
    // {unablePrevent}가 onClick으로 들어오면 beforeunload 이벤트를 없애고 listener실행
    const disablePrevent = () =>
        window.removeEventListener("beforeunload", listener);
    return { enablePrevent, disablePrevent };
};
