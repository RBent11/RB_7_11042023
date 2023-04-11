import Card from "./Card"
import logements from "../api/logements.json"
import './styles/AppartList.css'

function AppartList(){
    return(
       
            <div className = 'appartment-list'> 
                
                    {logements.map(({title, cover})=>(
                        <Card
                        title={title}
                        cover={cover} 
                        />
                    ))}
                
            </div>
        
        

    )
}

export default AppartList