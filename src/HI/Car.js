import React, { useState, useEffect, useRef } from 'react';

class Car extends React.Component {
    constructor(props){
        super(props);
        this.state = 0;
        this.A = 0;
    }

    setNum=(num)=>{
        this.setState(num)
    }
    

    fetchNum(){
        fetch('/OrderNum',{
          method:'GET',
          
        })
        .then((response) => {
            // console.log()
            return response.json();
        })
        .then(data=>{
          // console.log(data)
          // console.log(typeof(data[0]))
          this.setNum(data[0])
          
        })
    
        .catch((error) => {
            console.log(`Error: ${error}`);
        })
      }

    

    render() {
      return(
        <h2 onLoad={this.fetchNum()}>your num is {this.state}</h2>

      ) 
    }
  }
export default Car