import OrderForm from './component/OrderForm';
// import Toast from './component/Toast';
import { v4 } from 'uuid';
import React, { useState, } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';

function Order() {
    //fetch food db根據內容動態生成表單
    const [food,setFood] = useState([])
    //控制隱藏顯示
    const [showResults, setShowResults] = useState(false)


  const fetchOrder = ()=>{
    fetch('/api/food',{
      method:'GET',
    })
    .then((response) => {
        return response.json();
    })
    .then(data=>{
      // console.log("test") 
      // console.log("DATA",data)
      //將資料庫的資料放入陣列food裡面
      setFood(data)
      if(showResults===false){
        setShowResults(true)
      }else{
        setShowResults(false)
      }
    })
    .catch((error) => {
        console.log(`Error: ${error}`);
    })
  }

    //
    return (
      <div ><Accordion onClick={()=>fetchOrder()}>
      <AccordionSummary
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
      <Typography style={{fontFamily:"Noto Serif TC"}}>吐司&漢堡菜單</Typography>
      </AccordionSummary>
      </Accordion>
      <form action={`/api/menuOrder`} method={`POST`} style={{ marginLeft: "20px"}}>
            { 
              food.map((item,index)=>{
                console.log("itemdata"+index,item);
                let id=v4()
                return showResults ?<OrderForm key={id} item={item}/>:null
              })
            }
            <br />
            <input type={`submit`} value={`購買`} variant="outlined" appearance="default"  
            style={{width: "60px", height: "30px", color: "#ffffff", backgroundColor: "#90B44B",
            border: "0", borderRadius: "3px",fontFamily:"Noto Serif TC", fontWeight:"light"}}></input>
          </form>
      </div>
      /*
      <div >
          <button onClick={()=>fetchOrder()}>吐司&漢堡菜單</button>
        <div>
        <form action={`/menuOrder`} method={`POST`}>
          {            

            food.map((item,index)=>{
              console.log("itemdata"+index,item);
              let id=v4()
              return showResults ?<OrderForm key={id} item={item}/>:null
            })
          }
          <input type={`submit`} value={`購買`}></input>
        </form>

        </div>
        
        

        </div>*/
    );
  }
  
  export default Order;