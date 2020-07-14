import React from "react";

// 이벤트 실행을 일단 막고, 컨펌 후 실행
export const useConfirm = (message = "", onConfirm, onCancel) => {
    if (!onConfirm || typeof onConfirm !== "function") {
        return;
    }
    if (onCancel && typeof onCancel !== "function") {
        return;
    }
    const confirmAction = () => {
        // confirm in JS : 확인창 띄우기
        if (window.confirm(message)) {
            onConfirm();
        } else {
            // confirm에서 취소를 눌렀을때
            onCancel();
        }
    };
    return confirmAction;
};
 