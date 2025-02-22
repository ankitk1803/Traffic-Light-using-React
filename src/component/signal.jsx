import React from 'react'

const signal = ({color, isActive}) => {
  return (
    <div className='upper_signal' >
    <div 
        className= "signal"
         style={{backgroundColor:`${isActive ? color : "grey"}`} }
    >
    </div>
    </div>
  );
};

export default signal