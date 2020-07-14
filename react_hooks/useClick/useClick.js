import React, {useEffect, useRef} from "react";

const useClick = onClick =>{
    const element = useRef();
    // useEffect( 함수인자 ) 랜더 후 실행
    useEffect(()=>{
        if(element.current){
            element.current.addEventListener('click', onClick);
        }
    })
// return element, 즉 ref요소를 return 해야 reference 연결이 된다.
    return element;
}