import React, { useState } from 'react';
import './Home.scss';
import Plan from '../Plan/Plan';
// import { Button } from "rsuite";
// import "rsuite/dist/rsuite.min.css";


const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const d = new Date();
const date = dayNames[d.getDay()] + " " + d.getFullYear().toString().slice(-2) + " " + monthNames[d.getMonth()];
const time = d.getHours() + ':' + d.getMinutes()
function Home() {
    const [showForm, setShowForm] = useState(false);
    const [hideBtn, setHideBtn] = useState(true);
    const [inputList, setInputList] = useState("");
    const [items, setItems] = useState([]);
    const [curDate, setCurDate] = useState(date)

    const [disable, setDisable] = useState(true);


    const itemEvent = (event) => {
        setInputList(event.target.value);
    };
    const listOfItems = () => {
        if (inputList === "") {
            alert("add some task")
        } else {

            setItems((oldItems) => {
                return [...oldItems, inputList];
            });
        }
        setInputList('');
    };
    const deleteItems = (id) => {
        setItems((oldItems) => {
            return oldItems.filter((arrEle, index) => {
                return index !== id;
            })
        })
        alert("Your Present Task will be Deleted!")
    }

    const showTextarea = () => {
        setShowForm(true)
        setHideBtn(false)
    }
    const showAddTask = () => {
        setHideBtn(true)
        setShowForm(false)
    }

    return (
        <>
            <header className="header">TODO LIST</header>
            <main className='main'>
                <h4 className='main-heading'>Today<span className='main-today-date'>{date}</span></h4>
                {hideBtn ?
                    <div className='main-content' onClick={showTextarea} >
                        <button><span className='plus-icon'>+</span>Add Task</button>
                    </div> : null
                }

                {showForm ?
                    <form className='form-container'>
                        <textarea type="text"
                            className='input-text'
                            placeholder='Add your task'
                            value={inputList}
                            onChange={itemEvent}
                        />
                        <div className='btn-wrapper'>
                            <button className='cancel-btn btn' onClick={showAddTask}  >CANCEL</button>
                            <button className='add-btn btn' disabled={!inputList} onClick={listOfItems}  >ADD</button>
                            {/* <button className='cancel-btn btn' onClick={showAddTask} appearance="default"  >CANCEL</button>
                            <button className='add-btn btn' disabled={!inputList} onClick={listOfItems} appearance="primary" color='red' >ADD</button> */}
                        </div>
                    </form> : null

                }
                <div>
                    <ol>
                        {/* <h5 className='date-time'><span className='date'>{date}</span><span>Time:{time}</span></h5> */}
                        {items.map((itemval, index) => {
                            return <Plan
                                key={index}
                                id={index}
                                text={itemval}
                                onSelect={deleteItems}
                                date={curDate}
                            />
                        })
                        }
                    </ol>
                </div>
            </main>
        </>
    )
}

export default Home