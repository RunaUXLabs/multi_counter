// context사용
import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";
import Counter from "./Counter";

function CounterList() {
  // props 대신 context에서 counters 배열을 직접 가져옵니다.
  const { counters } = useContext(CounterContext);

  return (
    <div>
      {counters.map((counter) => (
        // Counter 컴포넌트에는 이제 counter 객체만 전달합니다.
        <Counter key={counter.id} counter={counter} />
      ))}
    </div>
  );
}

export default CounterList;


// // 기본형
// import Counter from "./Counter";

// function CounterList({ counters, onIncrease, onDecrease }) {
//   return (
//     <div>
//       {counters.map((count, index) => (
//         <Counter
//           key={index}
//           index={index}
//           count={count}
//           onIncrease={onIncrease}
//           onDecrease={onDecrease}
//         />
//       ))}
//     </div>
//   );
// }

// export default CounterList;
