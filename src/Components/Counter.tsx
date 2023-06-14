import React, {useState} from 'react';
import classes from './Counter.module.scss'
const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = () => setCount(prev => prev + 1)
    return (
        <div>
            {count}
            <button className={classes.btn} onClick={increment}>Increment</button>
        </div>
    );
};

export default Counter;