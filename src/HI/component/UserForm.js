import { useState } from "react";
// import axios from "axios"

function UserForm() {
  
    // interface FormDataType {name:string, phone:string, email:string}
    //表單的資料型態
    const formData = {name:"", phone:"", email:""}
    const [responseBody, setResponseBody] = useState(formData)

    const inputChangeHandler = (event) => {
        const {name, value} = event.target
        setResponseBody({...responseBody, [name]: value})
        
    }
    const onSubmitHandler = (event) => {
        event.preventDefault()
        console.log(responseBody)
        // Form submission happens here
        fetch("http://localhost:5000/", {method: "POST",
        body: JSON.stringify(responseBody),   /*把json資料字串化*/
        headers: new Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        })})
            .then(res => res.json()) /*把request json化*/
            .then(responseBody => {
                /*接到request data後要做的事情*/
                console.log("DATA:",responseBody)
            })
            .catch(e => {
                /*發生錯誤時要做的事情*/
                console.log("ERROR")
            })


        // axios.post("http://localhost:5000/num", responseBody)
        // fetch('http://localhost:5000/num', {
        //     method: 'POST',
        //     body: JSON.stringify(responseBody),
        //     headers: {
        //     'Content-Type': 'application/json',
        //     'Access-Control-Allow-Origin': '*'
        // },
        // })
    }



    return (//action={`num`} method={`POST`}
        <form  onSubmit={onSubmitHandler}>
            post之後要redirect<br/>
            <label>姓名</label>
            <input name="name" type={`text`} onChange={(e)=>inputChangeHandler(e)}></input><br/>
            <label>電話</label>
            <input name="phone" type={`text`} onChange={(e)=>inputChangeHandler(e)}></input><br/>
            <label>Email</label>
            <input name="email" type={`text`} onChange={(e)=>inputChangeHandler(e)}></input><br/>
            <input type={`submit`} value={`購買`}></input>
        </form>
    );
  }
  
  export default UserForm;
