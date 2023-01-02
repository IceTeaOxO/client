import { useState } from "react";
// import axios from "axios"

function OrderForm() {
  
    // interface FormDataType {name:string, tele:string, email:string}
    //表單的資料型態
    const formData = {time:"", itemNo:"", Name:"", price:"", number:""}
    const [responseBody, setResponseBody] = useState(formData)

    const inputChangeHandler = (event) => {
        const {name, value} = event.target
        setResponseBody({...responseBody, [name]: value})
        
    }

    return (// onSubmit={onSubmitHandler}
        <form  action={`/menuOrder`} method={`POST`}>
            <label>取餐時間</label>
            <input name="time" type={`time`} onChange={(e)=>inputChangeHandler(e)}></input><br/>
            <label>品項ID</label>
            <input name="itemNo" type={`text`} onChange={(e)=>inputChangeHandler(e)}></input><br/>
            <label>餐點名稱</label>
            <input name="Name" type={`text`} onChange={(e)=>inputChangeHandler(e)}></input><br/>
            <label>餐點價格</label>
            <input name="price" type={`text`} onChange={(e)=>inputChangeHandler(e)}></input><br/>
            <label>餐點數量</label>
            <input name="number" type={`text`} onChange={(e)=>inputChangeHandler(e)}></input><br/>
            <input type={`submit`} value={`購買`}></input>
        </form>
    );
  }
  
  export default OrderForm;
