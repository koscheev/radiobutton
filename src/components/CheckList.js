import React, { useState, useCallback } from 'react';
import Task from '../components/Task.js'

import '../components/CheckList.css'

const todoItems = [
    {
        id: 0,
        text: 'a'
    },
    {
        id: 1,
        text: 's'
    },
    {
        id: 2,
        text: 'd'
    },
    {
        id: 3,
        text: 'f'
    },

]
const CorrectAnswerId = 3

const CheckList = ({ title }) => {

    const [chosenAnswerId, setChosenAnswerId] = useState(0);
    const [result, setResult] = useState('')

    const onClickTask = useCallback(
        (val) => {
            setChosenAnswerId(val)
            if(CorrectAnswerId === val) 
                setResult('Correct answer')
            else 
                setResult('Wrong answer')
            },
        [chosenAnswerId, setChosenAnswerId],
    )

    return (
        <div className='checklist'>
            <h1>{title}</h1>
            <div className="tasks">
                {todoItems.map(item => {
                    return <Task key={item.id} id={item.id} text={item.text} onClickTask={onClickTask} name = 'question1' />
                })}
            </div>
            <p>{result}</p>
        </div>
    )
}
export default CheckList;

