import React, { useState, } from 'react';


const Item = (item)=>{
    const {itemNo,number,Num} = item.item;
    const [name,setName] = useState([])

    //fetch food
    //根據itemNo找到食物的名字和價格
    const fetchFood = ()=>{
        let url ='/api/foodDetail'+
        '?'+
        'itemNo='+
        itemNo;
        // console.log("URL",url)
        fetch(url,{
          method:'GET',
        })
        .then((response) => {
            return response.json();
        })
        .then(data=>{
            // console.log("get",data.name)
            setName(data.name)

        })
        .catch((error) => {
            console.log(`Error: ${error}`);
        })
      }
    // console.log("QQQ",typeof(item.item.time))
    return(
        <div onLoad={fetchFood()}>
            <p>餐點名稱:{name}</p>
            <p>餐點數量:{number}</p>
            <p>取餐編號:{Num}</p>
            
            {/* <p>{itemNo}{price}</p> */}
            

        </div>
    )

}

export default Item;