import { jwtDecode } from "jwt-decode";
import { useState, useEffect } from "react";
import { Listar } from "../Services/Producto";

const Inventario = () => {
    const [tokenUser, setTokenUser] = useState();
    const [lista, setLista] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            try {
                const decoded = jwtDecode(token);
                if (decoded) {
                    setTokenUser(decoded);
                    localStorage.setItem("usuario", decoded.usuario);
                    localStorage.setItem("id_usuario", decoded.id_usuario);
                }
            } catch (error) {
                console.error("Error a decodificar el Token: " + error);
                setTokenUser("TokenInvalido");
            }
        }
    }, [])

    useEffect(() => {
        const traerProductos = async () => {
            try {
                const id = localStorage.getItem("id_usuario");
                if (id) {
                    const datos = await Listar(id);
                    console.log("a ver que se cargo aca", datos);
                    if (datos.length > 0) {
                        setLista(datos);
                    } else {
                        console.log("vacio");
                    }
                } else {
                    console.log("No se encontró id");

                }
            } catch (error) {
                console.error("Error al obtener lista: " + error);
            }
        }
        traerProductos();
    }, [])

    return (
        <div>
            <h1>Pasaste</h1>
            <div className="card" id="cardInicio">
                <div className="card-body">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Cantidad</th>
                                <th>Mínimo</th>
                                <th>Semáforo</th>
                                <th>&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            {lista.length > 0 ? (
                                lista.map((p, index) => (
                                    <tr key={index}>
                                        <td>{p.nombre}</td>
                                        <td>{p.cantidad}</td>
                                        <td>{p.minimo}</td>
                                        <td>&nbsp;</td>
                                        <td>{p.id_producto}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="text-center">No hay productos</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Inventario