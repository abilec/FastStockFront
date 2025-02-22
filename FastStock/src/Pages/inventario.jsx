import { jwtDecode } from "jwt-decode";
import { useState, useEffect } from "react";
import { Listar, Eliminar } from "../Services/Producto";
import Semaforo from "../Components/semaforo";
import Modal from "../Components/modal";

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

    const Borrar = async (id_producto) =>{
        try {
            if(id_producto){
                await Eliminar(id_producto);
            }else{
                console.log("No id: "+id_producto);
            }
        } catch (error) {
            console.error("Error, no se pudo eliminar el producto: " + error);
        }
    }
    
    return (
        <div>
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
                                        <td>{<Semaforo cant={p.cantidad} min={p.minimo}/>}</td>
                                        <td><button type="button" className="btn btn-outline-danger" onClick={()=>Borrar(p.id_producto)}><i className="bi bi-clipboard-x"></i></button>
                                            <button type="button" className="btn btn-outline-warning"  ><i className="bi bi-clipboard"></i></button>
                                        </td>
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