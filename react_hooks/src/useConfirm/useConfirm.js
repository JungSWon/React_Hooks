import React from "react";

// 이벤트 실행을 일단 막고, 컨펌 후 실행
export const useConfirm = (message='', onCallback, onCancel) => {
    if (typeof onCallback && onCallback !== "function") {
        return;
    }
    const confirmAction = () => {
        // confirm in JS : 확인창 띄우기
        if (confirm(message)) {
            onCallback();
        } else {
            // confirm에서 취소를 눌렀을때
            onCancel();
        }
    };
    return confirmAction;
};
 