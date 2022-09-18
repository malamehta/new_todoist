import React, { useState } from 'react';
import './Home.css';
import Plan from '../Plan/Plan';
import { Button } from "rsuite";
import "rsuite/dist/rsuite.min.css";

const current = new Date();
const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
function Home() {
    const [showForm, setShowForm] = useState(false);
    const [hideBtn, setHideBtn] = useState(true);

    const [inputList, setInputList] = useState("");
    const [items, setItems] = useState([]);

    // const [disable, setDisable] = useState(true);


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
    
    const showTextarea=()=>{
          setShowForm(true)
          setHideBtn(false)
    }

    return (
        <div>
            <header className="header">TODO LIst</header>
            <section className='container'>
                <div className='heading'>Today<span className='today-date'>{date}</span></div>
                {hideBtn?
                    <div className='content' onClick={showTextarea} >
                       <span className='plus-icon'>+</span><span>Add Task</span>
                   </div>:null
                }

                {showForm ?
                    <div className='form-container'>
                        <form>
                            <textarea type="text"
                                className='input-text'
                                placeholder='Add your task'
                                value={inputList}
                                onChange={itemEvent}
                            />
                        </form>
                        <Button className='add-btn' disabled={!inputList} onClick={listOfItems} appearance="primary" >ADD</Button>
                    </div> : null
                }
                <ul>
                    {items.map((itemval, index) => {
                        return <Plan
                            key={index}
                            id={index}
                            text={itemval}
                            onSelect={deleteItems}
                        />
                    })
                    }
                </ul>
            </section>
        </div>
    )
}

export default Home