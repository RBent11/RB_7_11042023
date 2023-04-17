import { Routes, Route } from 'react-router-dom'
import APropos from '../pages/APropos'
import Page404 from '../pages/Page404'
import Accueil from '../pages/Accueil'
import Appartement from '../pages/Appartement'

// Routing final avec tous les path reliés aux pages correspondantes

function Routing(){
    return(
        <Routes>
            <Route path="/" element={<Accueil />}></Route>
            <Route path="*" element={<Page404 />}></Route>        
            <Route path="/appart/:id" element={<Appartement />} />
            <Route path="/About" element={<APropos />} />
      </Routes>
    )
}

export default Routing