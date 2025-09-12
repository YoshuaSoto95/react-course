import './Section.css'

export const Section = ({ children, title, show }) => {
    return (
        <div className='hero'>
            <div>
                <h1 className='hero__title'>Welcome to React World</h1>
                {title && <h1 className='hero__title'>{title}</h1>}
                <p className='hero__text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, corporis.</p>
                <button className='hero__btn'>More</button>
                {show ? <p>Show this text if is valid</p> : <p>Show this text if not valid</p>}
            </div>
        </div>
    )
}