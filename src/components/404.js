import "./styles/404.css"

function NotFound(){
    return(
        <div className="container-404">
            <h6 className="title-404">404</h6>
            <h4 className="message-404">Oups ! La page que vous demandez n'existe pas.</h4>
            <a href="#" className="link-404">Retournez à la page d'accueil</a>
        </div>
        
    )
}

export default NotFound