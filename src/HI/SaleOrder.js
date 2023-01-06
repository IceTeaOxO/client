import React, { useState, } from 'react';
import Item from './component/Item';
import { v4 } from 'uuid';

function SaleOrder() {
  // const [data,setData] = useState([])
  const [data1,setData1] = useState([])


  const fetchOrder = ()=>{
    fetch('/api/menuOrder',{
      method:'GET',
    })
    .then((response) => {
        return response.json();
    })
    .then(data=>{
      addList(order(data))   
      setData1(order(data))   
      //發現變數會指向不對的地方，所以使用Data1代替
    })
    .catch((error) => {
        console.log(`Error: ${error}`);
    })
  }

  const order = (dataArray)=>{
    dataArray=dataArray.sort().reverse(); 
    //無作用，後續再修復
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
        
        <div>
          {            
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