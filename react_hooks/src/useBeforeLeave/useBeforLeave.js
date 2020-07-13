import React, { useEffect } from "react";

// 마우스가 페이지를 벗어날때 실행
const useBeforeLeave = onBefore => {
  if (typeof onBefore !== "function") {
    return;
  }
  const handle = e => {
    console.log(e);
    const { clientY } = e;
    // 마우스가 화면 위로 벗어나는 경우
    if (clientY <= 0) {
      onBefore();
    }
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  });
};