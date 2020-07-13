import React, { useState, useEffect } from "react";

export const useScroll = () => {
    const [state, setState] = useState({
        x: 0,
        y: 0
    });
    const onScroll = e => {
        // console.log(window.scrollY);
        setState({ y: window.scrollY, x: window.scrollX });
    };
    useEffect(() => {
        window.addEventListener("scroll", onScroll);
    });
    return state;
};