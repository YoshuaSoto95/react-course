import UserImg from '../../images/user.png'
import './List.css'

const users = [
    {
        id: 1,
        name: 'Yoshua Soto',
        car: 'AUDI'
    },
    {
        id: 2,
        name: 'Juan Perez',
        car: 'Honda'
    },
    {
        id: 3,
        name: 'Miguel Gomez',
        car: 'Skoda'
    },
    {
        id: 4,
        name: 'Ana Maria',
        car: 'BMW'
    },
    {
        id: 5,
        name: 'Laura Martinez',
        car: 'Mercedes'
    }
]

const List = () => {

    const HaddleClick = () => {
        console.log('click');
    }

    return (
        <div className='list__content'>
            <div className="cars__list">
                {
                    users.map(user => (
                        <div key={user.id} className="car__item">
                            <img src={UserImg} alt={user.name} />
                            <h3>{user.name}</h3>
                            <p>{user.car}</p>
                            <button onClick={HaddleClick} className='car__btn'>More</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default List