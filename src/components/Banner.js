import "./styles/Banner.css"


function Banner({image, texte}) {
   return (
    <div className="kasa-banner">
        
        

            <h1>{texte}</h1>
            <img src={image} alt="cover-banner"/>


      
    </div>
   )
   
}

export default Banner