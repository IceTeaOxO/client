import { useState } from "react";
import '../css/menu.css'
import Popup from 'reactjs-popup';

const Toast = ()=>{


    const formData = {cusName:"", tele:"", email:""}
    const [responseBody, setResponseBody] = useState(formData)

    const inputChangeHandler = (event) => {
        const {name, value} = event.target
        setResponseBody({...responseBody, [name]: value})
        
    }
    return(
        <div className="bigButton">
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
        <Popup trigger={<button> 漢堡 </button>} position="bottom left">
            <Toast/>
        </Popup>
        </div>
    )
}
export default Toast;