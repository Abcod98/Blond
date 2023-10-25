import "./register.scss"
import { Link } from "react-router-dom"

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Blond</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa dolores optio minima at mollitia, soluta unde quis nobis id eum inventore odio accusamus qui, aspernatur explicabo itaque debitis! Quia, pariatur.</p>
          <span>
          ¿Ya tienes una cuenta?
          </span>
          <Link to="/login">
            <button>Iniciar sesión</button>
          </Link>
        </div>
        <div className="right">
          <h1>Registro</h1>
          <form action="">
            <input type="text" placeholder="Usuario" />
            <input type="email" placeholder="Correo" />
            <input type="password" placeholder="Contraseña" />
            <input type="text" placeholder="Nombre" />
            <button>Registrar</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register