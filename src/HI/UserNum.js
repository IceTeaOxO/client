
import React, { useState, useEffect } from 'react';
import Footer from './component/Footer';
import gif from './img/gif.gif'

const UserNum=()=> {
  let [A,setA] = useState(0)
  function number(num){
    setA(0+num)
  }
  const fetchNum = ()=>{
    fetch('/OrderNum',{
      method:'GET',
    })
    .then((response) => {
        return response.json();
    })
    .then(data=>{
      // console.log(data[0])
      number(data[0])
    })
    .catch((error) => {
        // console.log(`Error: ${error}`);
    })
  }
    useEffect(()=>{
      fetchNum();
    })
    return (
      <div className="App">
        <h2 onClick={()=>fetchNum()} >你的取餐號碼:{A}</h2>
        
        <p>note:請截圖或出示該頁面以領取餐點，預約時間前15分鐘會寄一封email提醒信!</p>
        <img alt='gif' src={gif}></img>

        <Footer/>
      </div>
    );
  }
  
  export default UserNum;