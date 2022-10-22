import React, {useState} from 'react';
const Hook = () => {
    //const state = useState() 
    
    const [count , setcount] = useState(5)
    function icreament() {
        setcount(100)
    };
    function dec(){
      

    };
    
    return (
        <>
            
            <h1>{count}</h1>
            <button onClick={icreament}>Click me</button>
            <h2>rear</h2>
            <button onClick={dec}>Click me</button>
        </>
    );
};
export default Hook;