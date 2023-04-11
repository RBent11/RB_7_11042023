import "./styles/Card.css"

function Card({title, cover}){
    return(
<div className='appartment-item'> 
    <img className='appartment-cover' src={cover} alt={`${title} cover`} />
    <span className = 'appartment-title'>{title}</span>
</div>
    )
}

export default Card 