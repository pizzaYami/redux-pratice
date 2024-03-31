import { useDispatch, useSelector } from "react-redux";
import Box from "./component/Box";

function App() {
  const { count, id, password } = useSelector((state) => state);
  const dispatch = useDispatch();
  const increase = () => {
    dispatch({ type: "INCREMENT", payload: { num: 5 } });
  };
  const decrement = () => {
    dispatch({ type: "DECREMENT", payload: { num: 5 } });
  };
  const login = () => {
    dispatch({ type: "LOGIN", payload: { id: "yong", password: "1234" } });
  };

  return (
    <div>
      <h1>{id}</h1>
      <h1>{password}</h1>
      <h1>{count}</h1>
      <button onClick={login}>로그인</button>
      <button onClick={increase}>증가</button>
      <button onClick={decrement}>감소</button>
      <Box />
    </div>
  );
}

export default App;
