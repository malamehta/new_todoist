import React from 'react';
import './Plan.css'


const current = new Date();
const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

const time = current.getHours() 
        + ':' + current.getMinutes() 
      

export default function Plan(props) {

  return (
    <>
    
      <div className='date-time'><span className='date'>{date}</span><span>Time:{time}</span></div>
      <div className='list-container'>
        <div  className='task-item'><span className='num'>{props.id + 1}</span><div className='actual-text'>{props.text}</div></div><button className='delete-btn' onClick={() => {
          props.onSelect(props.id);
        }}>Delete</button>

      </div>
    </>
  )
}
