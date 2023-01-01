import { BarChart, XAxis,YAxis, Bar} from 'recharts';
import React, { useState } from 'react';

function SaleReport() {
  const [DBdata,setData] =useState([{}]);

  const fetchReport = ()=>{
    fetch('/orderReport',{
      method:'GET',
    })
    .then((response) => {
        return response.json();
    })
    .then(data=>{
      console.log(data)
      setData(data)
    })
    .catch((error) => {
        console.log(`Error: ${error}`);
    })
  }
//這邊應該要傳經過整理運算後的資料會比較好
  //   const data = [{
  //     "name":"A",
  //     "number":123,
  //   },{
  //     "name":"B",
  //     "number":23,
  //   },
  // ]
    return (
      <div className="App">
        <nav>
            <li><a href={`order`}>order</a></li>
            <li>report</li>
        </nav>
        <div  onChange={fetchReport()}>
          <BarChart width={600} height={300} data = {DBdata}>
              <Bar dataKey="number" fill="#08d"></Bar>
              <XAxis dataKey = "Name"/>
              <YAxis dataKey = "number"/>
          </BarChart>
        </div>
      </div>
    );
  }
  
  export default SaleReport;