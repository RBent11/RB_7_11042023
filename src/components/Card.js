import "./styles/Card.css"
import { Link } from 'react-router-dom'

function Card({id, title, cover}){
    return(

    <div className='appartment-item' key={id} id={id}> 

       

        <Link to= {`/appart/${id}`}>
            <span className="shadow-box"></span>
            <img className='appartment-cover' src={cover} alt={`${title} cover`} />
            <span className = 'appartment-title'>{title}</span>
        </Link>
        
        
    </div>
    )
}

export default Card 