import React from 'react'
import { useState } from 'react'
import './Carditem.css'

const Carditem = (user) => {

    const [count, setCount] = useState(0)

    const countClick = () => {
        setCount(count + 1)
    }

    const greetings = () => {
        return () => {
            alert(`Hello, ${user.fullname}. Welcome to our website!`)
        }
    }

    const { id, fullname, age, address, employee, car, UserImg, HaddleClick } = user
    return (
        <div key={id} className="car__item">
            <img src={UserImg} alt={fullname} />
            <h3>Fullname: {fullname}</h3>
            <p>Car:{car}</p>
            <p>Age: {age}</p>
            <p>Address: {address}</p>
            <p>Employee: {employee ? 'Yes' : 'No'}</p>
            <button onClick={() => HaddleClick(employee, fullname)} className='car__btn'>Contact</button>
            <button onClick={countClick} className='car__btn'>Count {count}</button>
            <button onClick={greetings()} className='car__btn'>Greetings</button>
        </div>
    )
}

export default Carditem