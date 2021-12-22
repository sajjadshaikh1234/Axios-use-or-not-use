
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function UseStates() {
    const [counter, setCounter] = useState(0)
    const [inputvalue, setInputvalue] = useState("")
    const [data, setData] = useState(0)
    const [modal, setModal] = useState(true)

    const changehanler = (e) => {
        setInputvalue(e.target.value)
    }

    return (
        <div className="App">
            <Link to="/"> state</Link> <br />
            <Link to="/reduce">reduce</Link> <br />
            <Link to="/effect">effect</Link>
            <br />
            {counter}
            <br />
            <button onClick={() => setCounter(counter + 1)}>Increment</button>
            <button onClick={() => setCounter(counter - 1)}>decrement</button>
            <br />
            <input placeholder="text" onChange={changehanler} />
            {inputvalue}

            <br />

            {data}
            <button onClick={() => {
                setData(data + 1)
                setModal(!modal)
            }}
            >Add</button>
            {
                modal ? <h2>toogle here</h2> : null
            }


        </div>
    );
}

export default UseStates;
