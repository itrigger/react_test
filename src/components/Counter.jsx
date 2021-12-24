import React, {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0)

    function increment(){
        setCount(count+1)
    }
    function decrement(){
        if (count > 1) {
            setCount(count - 1)
        }
    }

    return (
        <div>
            <p>
                {count}
                {/*<input type="text" value={value} onChange={event => setValue(event.target.value)}/>*/}
            </p>
            <p>
                <button onClick={increment}>+ add</button>
                <button onClick={decrement}>- sub</button>
            </p>
        </div>
    );
};

export default Counter;