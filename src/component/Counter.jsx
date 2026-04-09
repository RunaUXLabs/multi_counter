// context사용
import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

function Counter({ counter }) { // props로 counter 객체 하나만 받습니다.
  // onIncrease, onDecrease 함수를 context에서 직접 가져옵니다.
  const { increase, decrease } = useContext(CounterContext);

  return (
    <div className="counter">
      <span>{counter.name}번 카운터:</span>
      <span>{counter.value}</span>
      <button onClick={() => increase(counter.id)}> + </button>
      <button onClick={() => decrease(counter.id)}> - </button>
    </div>
  );
}

export default Counter;

// // 기본형
// function Counter({ index, count, onIncrease, onDecrease }) {
//   return (
//     <div className="counter">
//       <span>
//         {index + 1}번 카운터:
//       </span>
//       <span>
//         {count}
//       </span>
//       <button onClick={() => onIncrease(index)}> + </button>
//       <button onClick={() => onDecrease(index)}> - </button>
//     </div>
//   );
// }

// export default Counter;
