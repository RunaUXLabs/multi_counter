import { createContext, useState, useMemo } from "react";

// 1. Context 생성
export const CounterContext = createContext();

// 2. Provider 컴포넌트 정의
export function CounterProvider({ children }) {
  // App.jsx에 있던 상태와 함수들을 이곳으로 옮깁니다.
  const [counters, setCounters] = useState([
    { id: Date.now() - 2, value: 100, name: "1" },
    { id: Date.now() - 1, value: 2, name: "2" },
  ]);

  const increase = (id) => {
    setCounters((prev) =>
      prev.map((counter) =>
        counter.id === id ? { ...counter, value: ++counter.value } : counter
      )
    );

  };

  const decrease = (id) => {
    setCounters((prev) =>
      prev.map((counter) =>
        counter.id === id ? { ...counter, value: --counter.value } : counter
      )
    );
    ;
  };

  const addCounter = () => {
    setCounters([...counters, { id: Date.now(), value: 0, name: `${counters.length + 1}` }]);

  };

  // Total 계산 로직도 Context로 가져와 useMemo로 최적화합니다.
  const total = useMemo(() => {
    console.log("Calculating total..."); // 계산이 필요할 때만 실행되는지 확인
    return counters.reduce((sum, counter) => sum + counter.value, 0);

  }, [counters]);

  // Context를 통해 전달할 값들을 객체로 묶습니다.
  const value = {
    counters,
    increase,
    decrease,
    addCounter,
    total,
  };

  // 3. Provider로 하위 컴포넌트들을 감싸고, value를 전달합니다.
  return (
    < CounterContext.Provider value={value} >
      {children}
    </CounterContext.Provider >
  );

}