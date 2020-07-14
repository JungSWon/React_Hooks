import defaultAxios from "axios";
// axios : http request
import { useState, useEffect } from "react";

// axios는 약간의 customization과 configuration을 허용함
// ex) 디폴트 url 설정, 자동으로 헤더 설정
// 아래는 클라이언트가 axiosInstance를 보내지 않는 경우 axios 패키지에서 가져옴을 의미
// = 디폴트값 정의
const useAxios = (opts, axiosInstance = defaultAxios) => {
    const [state, setState] = useState({
        loading: true,
        error: null,
        data: null
    });
    if (!opts.url) {
        return;
    }

    useEffect(() => {
        axiosInstance(opts)
            .then(data => {
                setState({
                    ...state,
                    loading: false,
                    data
                });
            })
            .catch(error => {
                setState({ ...state, loading: false, error });
            });
    }, []);
    return state;
};

export default useAxios;

