import { useState } from 'react'
import Carditem from './CardItem/Carditem'
import UserImg from '../../images/user.png'
import './List.css'

const users = [
    {
        id: 1,
        fullname: 'Yoshua Soto',
        age: 30,
        address: 'Calle 123',
        employee: false,
        car: 'AUDI'
    },
    {
        id: 2,
        fullname: 'Maria Garcia',
        age: 25,
        address: 'Calle 456',
        employee: true,
        car: 'BMW'
    },
    {
        id: 3,
        fullname: 'Juan Perez',
        age: 35,
        address: 'Calle 789',
        employee: false,
        car: 'MERCEDES'
    },
    {
        id: 4,
        fullname: 'Ana Lopez',
        age: 28,
        address: 'Calle 012',
        employee: true,
        car: 'TOYOTA'
    },
    {
        id: 5,
        fullname: 'Pedro Gomez',
        age: 32,
        address: 'Calle 345',
        employee: false,
        car: 'FORD'
    }
]

const List = () => {

    const HaddleClick = (employee, name) => {
        if (employee === true) {
            alert(`You can contact the employee, calling now to: ${name}`)
        } else {
            alert(`This users is not an employee.`)
        }
    }

    return (
        <div className='list__content'>
            <div className="cars__list">
                {
                    users.map(({ id, fullname, age, address, employee, car }) => (
                        <Carditem key={id} fullname={fullname} age={age} address={address} employee={employee} car={car} UserImg={UserImg} HaddleClick={HaddleClick} />
                    ))
                }
            </div>
        </div>
    )
}

export default List