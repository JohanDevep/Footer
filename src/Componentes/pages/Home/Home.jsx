import "./Home.css";

export const Home = () => {
  return (

    <div className="Home">
      <div className="Container">
        <div className="Imagen">
          <img className="Imagen-Home" 
            src="https://generation-sessions.s3.amazonaws.com/e8ea0a83929f6409af7b718bce2f46a6/img/istockphoto-1227631708-612x612-1.png"
          />
          <p className="promovemos">
            Promovemos la empleabilidad y emprendimiento,
            <br /> generando nuevas oportunidades.
          </p>
        </div>
        <img
          className="Logo"
          alt="Image"
          src="https://generation-sessions.s3.amazonaws.com/e8ea0a83929f6409af7b718bce2f46a6/img/image-1.png"
        />
      </div>
    </div>
  )
}