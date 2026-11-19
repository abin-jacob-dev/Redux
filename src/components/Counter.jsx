import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "../redux/counterSlice";



function Counter() {
    const count = useSelector((store) => store.counter.count)
    const dispatch = useDispatch()

    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </>
    )
}

export default Counter