import { CounterProvider } from "./context/CounterContext";
import CounterList from "./component/CounterList";
import Total from "./component/Total";
import AddCounterButton from "./component/AddCounterButton"; // 새로 만들 버튼 컴포넌트
import './css/App.css';

function App() {
  return (
    // CounterProvider로 전체를 감싸면, 하위 모든 컴포넌트가 Context 값에 접근할 수 있습니다.
    <CounterProvider>
      <h1>멀티 카운터</h1>
      <CounterList />
      <AddCounterButton />
      <Total />
    </CounterProvider>
  );
}

export default App;