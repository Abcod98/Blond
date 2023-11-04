import "./rightBar.scss";

const RightBar = () => {
  return(
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Sugerencias</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/7810405/pexels-photo-7810405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <span>Luciana</span>
            </div>
            <div className="buttons">
              <button>Seguir</button>
              <button>Descartar</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/7810405/pexels-photo-7810405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <span>Santos</span>
            </div>
            <div className="buttons">
              <button>Seguir</button>
              <button>Descartar</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Actividades Recientes</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/7810405/pexels-photo-7810405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <p>
                <span>David</span> Cambio su foto de portada
              </p>
            </div>
            <span>1 min atras</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/7810405/pexels-photo-7810405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <p>
                <span>Santos</span> Cambio su foto de portada
              </p>
            </div>
            <span>1 min atras</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/7810405/pexels-photo-7810405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <p>
                <span>Luciana</span> Cambio su foto de portada
              </p>
            </div>
            <span>1 min atras</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/7810405/pexels-photo-7810405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <p>
                <span>Abraham</span> Cambio su foto de portada
              </p>
            </div>
            <span>1 min atras</span>
          </div>
        </div>
        <div className="item">
          <span>Usuarios Conectados</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/7810405/pexels-photo-7810405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <div className="online" />
                <span>Abraham</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/7810405/pexels-photo-7810405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <div className="online" />
                <span>Abraham</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/7810405/pexels-photo-7810405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <div className="online" />
                <span>Abraham</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/7810405/pexels-photo-7810405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <div className="online" />
                <span>Abraham</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightBar