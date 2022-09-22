import React from 'react';
import './Plan.scss'


const current = new Date();

export default function Plan(props) {

  return (
    <>
      <div className='task-wrapper'>
      <h5 className='date-time'><span className='date'>{props.date}</span></h5>
        <div className='list-container'>
          <div className='list-item'>
          <div className='list-item__inner'>
            <span className='num'>{props.id + 1}</span>
            <p className='actual-text'>{props.text}</p>
          </div>
          <p className='particular-date'>22 sep</p>
          </div>
          <button className='delete-btn' onClick={() => {
            props.onSelect(props.id);
          }}><i class="fa fa-trash-o"></i>
          </button>


        </div>
      </div>
    </>
  )
}
