import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

function AddCounterButton() {
  // useContext를 통해 addCounter 함수를 직접 가져옵니다.
  const { addCounter } = useContext(CounterContext);

  return <button onClick={addCounter}> 카운터 추가 </button>;
}

export default AddCounterButton;