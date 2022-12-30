
import React, { useState, useEffect, useRef } from 'react';

const UserNum=()=> {
  let [A,setA] = useState(0)
  // const numtest = useRef(setNum)
  function number(num){
    setA(0+num)
  }
  
  
  const fetchNum = ()=>{
    fetch('/OrderNum',{
      method:'GET',
      
    })
    .then((response) => {
        // console.log()
        return response.json();
    })
    .then(data=>{
      console.log(data[0])
      // console.log(typeof(data[0]))
      number(data[0])
      
    })

    .catch((error) => {
        console.log(`Error: ${error}`);
    })
  }

    useEffect(()=>{
      // console.log('execute function in useEffect');
      fetchNum();
    })
  // console.log(fetchNum().A)
    return (
      <div className="App">
        <h2 onClick={()=>fetchNum()} >your num is {A}</h2>
        
        <p>note:</p>
      </div>
    );
  }
  
  export default UserNum;