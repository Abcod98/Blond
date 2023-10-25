import "./login.scss"
import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Blond</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa dolores optio minima at mollitia, soluta unde quis nobis id eum inventore odio accusamus qui, aspernatur explicabo itaque debitis! Quia, pariatur.</p>
          <span>
          ¿No tienes una cuenta?
          </span>
          <Link to="/register">
            <button>Registrar</button>
          </Link>
        </div>
        <div className="right">
          <h1>Iniciar sesión</h1>
          <form action="">
            <input type="text" placeholder="Usuario" />
            <input type="password" placeholder="Contraseña" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login