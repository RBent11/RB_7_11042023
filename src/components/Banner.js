import "./styles/Banner.css"

// component bannière qui affiche le texte et l'image choisis
function Banner({image, texte}) {
   return (
    <div className="kasa-banner">
        <h1>{texte}</h1>
        <span className="shadow"></span>
        <img src={image} alt="cover-banner"/>
    </div>
   )
   
}

export default Banner