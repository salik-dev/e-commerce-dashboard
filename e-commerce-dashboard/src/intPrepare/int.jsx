import React, { useReducer } from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case "decrement":
            return state.count > 0 ? { count: state.count - 1 } : {count: state.count};
        case "increment":
            return { count: state.count + 1 };
        case "reset":
            return { count: 0 };
        default:
            throw new Error();
    }
}

const ToDos = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <>
            <p>count: {state.count}</p>
            <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>&nbsp;
            <button onClick={() => dispatch({ type: "increment" })}>increment</button>&nbsp;
            <button onClick={() => dispatch({ type: "reset" })}>reset</button>&nbsp;
        </>
    )
}
export default ToDos;