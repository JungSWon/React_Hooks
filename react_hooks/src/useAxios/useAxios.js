import defaultAxios from "axios";
// axios : http request
import { useState, useEffect } from "react";

// axios는 약간의 customization과 configuration을 허용함
// ex) 디폴트 url 설정, 자동으로 헤더 설정
// 아래는 클라이언트가 axiosInstance를 보내지 않는 경우 axios 패키지에서 가져옴을 의미
// = 디폴트값 정의
export const useAxios = (opts, axiosInstance = defaultAxios) => {
    const [state, setState] = useState({
        loading: true,
        error: null,
        data: null
    });

    const [trigger, setTrigger] = useState(0);
    if (!opts.url) {
        return;
    }

    const refetch = () => {
        setState({
            ...state,
            loading: true
        });
        // 랜덤한 숫자를 넣기위해 Date.now() 활용
        setTrigger(Date.now());
    };

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
// refetch(다시 가져오기) 구현
        // defendency에 무언가를 넣는다면, defendency(trigger)가 바뀌고
        // 그러면 useEffect는 access request를 다시 실행 할 것이다.
    }, [trigger]);
    return { ...state, refetch };
};

