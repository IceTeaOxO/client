import React, { useState, useEffect } from 'react';
import Item from './component/Item';
import { v4 } from 'uuid';

function SaleOrder() {
  const [data,setData] = useState([])
  const [data1,setData1] = useState([])
  // const {time,itemNo,Name,price,number} = data1


  const fetchOrder = ()=>{
    fetch('/orderOrder',{
      method:'GET',
    })
    .then((response) => {
        return response.json();
    })
    .then(data=>{
      // console.log(data)      
      // console.log(typeof(data[0]))      
      //將訂單資料儲存在當前狀態內
      //排完後要讓資料動態的呈現在前端頁面中
      //因為要動態呈現，所以需要及時知道狀態，要使用state和effect
      addList(order(data))   
      // setData(order(data)) 
      setData1(order(data))   
      
    })
    .catch((error) => {
        console.log(`Error: ${error}`);
    })
  }

  const order = (dataArray)=>{
    dataArray=dataArray.sort().reverse(); 
    //無作用
    return dataArray
  }

  const addList=(dataArray)=>{
    dataArray.forEach(element => {
      console.log("test",element)
    });
  }

    return (
      <div className="App">
        <nav >
            <li>order</li>
            <li><a href={`report`}>report</a></li>
        </nav>
        <button onClick={()=>fetchOrder()}>刷新</button>
        time:
        Order:
        <div>
          {
            //obj destructuring
            
            data1.map((item,index)=>{
              console.log("itemdata"+index,item);
              let id=v4()
              return <Item key={id} item={item}/>
            })
          }
        </div>
      </div>
    );
  }
  
  export default SaleOrder;