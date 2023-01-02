

const Item = (item)=>{
    const {time,itemNo,Name,price,number} = item.item;
    console.log("not use",itemNo,price)

    // console.log("QQQ",typeof(item.item.time))
    return(
        <div>
            <p>取餐時間:{time}</p>
            <p>餐點名稱:{Name}</p>
            <p>餐點數量:{number}</p>
            
            {/* <p>{itemNo}{price}</p> */}
            

        </div>
    )

}

export default Item;