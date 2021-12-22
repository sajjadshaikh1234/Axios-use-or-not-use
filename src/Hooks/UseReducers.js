import React, { useReducer } from 'react'
import { Link } from 'react-router-dom'

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                count: state.count + 1, showtext: state.showtext
            }
        case "DECREMENT":
            return {
                count: state.count + 1, showtext: !state.showtext
            }
    }
}

const UseReducers = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0, showtext: true })
    return (
        <>

            <h1>{state.count}</h1>
            <button onClick={() => {
                dispatch({ type: "INCREMENT" });
                dispatch({ type: "DECREMENT" })
            }}>ADD</button>
            {
                state.showtext ? <p>hiii</p> : null
            }
        </>
    )
}

export default UseReducers;