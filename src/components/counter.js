import React, {useState, useEffect}from "react";

export const Counter = () => {
    const [count,setCount] = useState(0);
    
    useEffect(() => {
        document.title = `Clicked ${count} times`;
    })

    const increment = () => {

        setCount(count + 1)
    }
    return(
       <div>
            <button onClick={increment}>Clicked {count} times</button>
       </div>
    );
}