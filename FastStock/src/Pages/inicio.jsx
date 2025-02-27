import { useState } from "react"
import Input from "../Components/input"
import { useNavigate } from "react-router-dom";
import { Acceder } from "../Services/Auth";

const Inicio = () => {
    const [datos, setDatos] = useState({ nombre: "", clave: "" });
    const navigate = useNavigate();
    const Login = async () => {
        try {
            let resp = await Acceder(datos);
            if (resp.token) {
                localStorage.setItem("token", resp.token);
                navigate("/inventario");
            } else {
                navigate("/inicio");
                console.log("Error al autenticar...");
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card" id="cardInicio">
                        <div className="card-title">
                            <h1>Iniciar sesión</h1>
                        </div>
                        <div className="card-body" >
                            <form>
                                <Input label={"Nombre de usuario"} type={"text"} onChange={(e) => { setDatos({ ...datos, nombre: e.target.value }) }} />
                                <Input label={"Clave"} type={"password"} onChange={(e) => { setDatos({ ...datos, clave: e.target.value }) }} />
                                <br />
                                <button onClick={Login} type="button" className="btn btn-primary">Ingresar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Inicio