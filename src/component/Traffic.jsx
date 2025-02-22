import React, { useEffect, useState } from 'react'
import Signal from "./signal"
const Traffic = ({lights =["green","yellow","red"]}) => {

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() =>{

       const intervalId = setInterval(() => {
            setActiveIndex((prevActive) =>{
                return (prevActive+1) % lights.length;
            })
        },1000);
        return () =>{
            clearInterval(intervalId);
        };
    },[]);

  return (
    <div>

    {lights.map((color, index) => {

        return < Signal color ={color} isActive ={activeIndex === index} />
   
    })}

   
    </div>
  )
}

export default Traffic