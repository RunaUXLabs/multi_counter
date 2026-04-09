// // context사용
import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

function Total() {
  // props 대신 context에서 total 값을 직접 가져옵니다.
  const { total } = useContext(CounterContext);

  return (
    <p className="total">
      Total: {total}
    </p>
  );
}

export default Total;


// // 최적화를 위한 useMemo 훅 사용
// import { useMemo } from 'react';

// function Total({ counters }) {
//   const total = useMemo(() => {
//     return counters.reduce((sum, count) => sum + count, 0);
//   }, [counters]);

//   return (
//     <p className="total">
//       Total: {total}
//     </p>
//   );
// }

// export default Total;

// // 기본형
// function Total({ counters }) {
//   const total = counters.reduce((sum, count) => sum + count, 0);

//   return (
//     <p className="total">
//       Total: {total}
//     </p>
//   );
// }

// export default Total;
