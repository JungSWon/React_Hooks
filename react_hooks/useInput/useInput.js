import React, { useState } from "react";

// 사용자 input을 업데이트 하는 hook
// + input 값의 유효성을 검사하는 로직
export const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    const onChange = e => {
        const {
            target: { value }
        } = e;
        let willUpdate = true;
        if (typeof validator === "function") {
            willUpdate = validator(value);
        }
        if (willUpdate) {
            setValue(value);
        }
    };
    return { value, onChange };
};
