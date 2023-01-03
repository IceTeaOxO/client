import { useState } from "react";
// import axios from "axios"

function UserForm() {
  
    // interface FormDataType {name:string, tele:string, email:string}
    //表單的資料型態
    const formData = {cusName:"", tele:"", email:"",time:"",Num:""}
    const [responseBody, setResponseBody] = useState(formData)

    const inputChangeHandler = (event) => {
        const {name, value} = event.target
        setResponseBody({...responseBody, [name]: value})
        
    }
    // const onSubmitHandler = (event) => {
    //     event.preventDefault()
    //     console.log(responseBody)
    //     // Form submission happens here
    //     fetch("http://localhost:5000", {method: "POST",
    //     body: JSON.stringify(responseBody),   /*把json資料字串化*/
    //     headers: new Headers({
    //         'Content-Type': 'application/json',
    //         'Access-Control-Allow-Origin': '*'
    //     })})
    //         .then(res => {res.json()
    //         console.log("ressssssss")}) /*把request json化*/
    //         .catch(e => {
    //             /*發生錯誤時要做的事情*/
    //             console.log("ERROR")
    //             console.log(e)
    //         })

    //當送出表單時，會顧客自動更新最新的取餐號碼(自己的ID)，訂單Num=0的號碼也會被指派為最新的取餐號碼
    return (
        <form  action={`/customer`} method={`POST`}>
            <label>姓名</label>
            <input name="cusName" type={`text`} onChange={(e)=>inputChangeHandler(e)}></input><br/>
            <label>電話</label>
            <input name="tele" type={`text`} onChange={(e)=>inputChangeHandler(e)}></input><br/>
            <label>Email</label>
            <input name="email" type={`text`} onChange={(e)=>inputChangeHandler(e)}></input><br/>
            <label>取餐時間</label>
            <input name="time" type={`time`} onChange={(e)=>inputChangeHandler(e)}></input><br/>

            <input type={`submit`} value={`購買`}></input>
        </form>
    );
  }
  
  export default UserForm;
