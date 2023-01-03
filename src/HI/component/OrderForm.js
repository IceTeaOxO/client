import { useState } from "react";
// import Button from '@mui/material/Button';
// import UserForm from "./UserForm";
// import UserInfo from "../UserInfo";
// import axios from "axios"

function OrderForm(item) {
    //因為資料庫傳過來的是小寫itemno所以跟著做變動
    const {itemno,name,price} = item.item;
    // interface FormDataType {name:string, tele:string, email:string}
    //表單的資料型態
    const formData = {itemNo:"", number:"",Num:"0"}
    const [responseBody, setResponseBody] = useState(formData)

    const inputChangeHandler = (event) => {
        const {name, value} = event.target
        setResponseBody({...responseBody, [name]: value})
        
    }
    //fetch food
    // <input name="price" type={`hidden`} value={price}></input><br/>
    // <input name="name" type={`hidden`} value={name}></input><br/>

    //根據food裡面的品項自動生成表單
    return (
    <div>
            
            <input name="itemNo" type={`hidden`} value={itemno}></input><br/>
            
            
            <label>餐點名稱：{name}</label>
            <br/>
            <label>餐點價格{price}</label>
            <input name="price" type={`hidden`} value={price}></input>
            <br/>
            <label>餐點數量</label>
            <input name="number" type={`text`} onChange={(e)=>inputChangeHandler(e)} placeholder={`0`}></input><br/>
            

            
        
        </div>
    );
  }
  
  export default OrderForm;
