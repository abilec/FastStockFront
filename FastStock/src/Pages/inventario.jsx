import { jwtDecode } from "jwt-decode";
import { useState, useEffect } from "react";
import { Listar, Eliminar } from "../Services/Producto";
import Semaforo from "../Components/semaforo";
import Nuevo from "../Layouts/Nuevo";
import Editar from "../Layouts/Editar";
import Nav from "../Components/nav";
import { useNavigate } from "react-router-dom";

const Inventario = () => {
    const [tokenUser, setTokenUser] = useState(null);
    const [lista, setLista] = useState([]);
    const [modalAgregar, setModalAgregar] = useState(false);
    const [modalEditar, setModalEditar] = useState(false);
    const [productoSelect, setProductoSelect] = useState({});
    const navigate = useNavigate();
    
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            try {
                const decoded = jwtDecode(token);
                setTokenUser(decoded);
                localStorage.setItem("usuario", decoded.usuario);
                localStorage.setItem("id_usuario", decoded.id_usuario);
            } catch (error) {
                console.error("Error al decodificar el token:", error);
                setTokenUser(null);
            }
        }
    }, []);

    const traerProductos = async () => {
        try {
            const id = localStorage.getItem("id_usuario");
            if (id) {
                const datos = await Listar(id);
                setLista(datos.length > 0 ? datos : []);
            }
        } catch (error) {
            console.error("Error al obtener lista:", error);
        }
    };

    useEffect(() => {
        traerProductos();
    }, []);

    const borrarProducto = async (id_producto) => {
        try {
            await Eliminar(id_producto);
            traerProductos(); // Refrescar la lista después de eliminar
        } catch (error) {
            console.error("Error al eliminar el producto:", error);
        }
    };

    const abrirModalEditar = (producto) => {
        console.log("que se guarda en producto: " + JSON.stringify(producto));
        setProductoSelect(producto);
        setModalEditar(true);
    }

    const Salir = () =>{
        localStorage.clear();
        navigate("/inicio");
    }

    return (
        <>
            <div className="row">
                <div className="col">
                    <Nav onClick={Salir} />
                    <br />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-header">
                            <h5>Inventario</h5>
                        </div>

                        {/* Modal */}
                        <Nuevo isOpen={modalAgregar} onClose={() => setModalAgregar(false)} actualizarLista={traerProductos} />
                        {productoSelect && (
                            <Editar
                                isOpen={modalEditar}
                                onClose={() => { setModalEditar(false); setProductoSelect(null); }}
                                actualizarLista={traerProductos}
                                producto={productoSelect} />)
                        }

                        <div className="card-body">
                            <h3 className="card-title">Lista de Stock</h3>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <button type="button" onClick={() => setModalAgregar(true)} className="btn btn-outline-success">
                                Agregar <i className="bi bi-clipboard-plus"></i>
                            </button>

                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Producto</th>
                                        <th>Cantidad</th>
                                        <th>Mínimo</th>
                                        <th>Semáforo</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {lista.length > 0 ? (
                                        lista.map((p, index) => (
                                            <tr key={index}>
                                                <td>{p.nombre}</td>
                                                <td>{p.cantidad}</td>
                                                <td>{p.minimo}</td>
                                                <td><Semaforo cant={p.cantidad} min={p.minimo} /></td>
                                                <td>
                                                    <button type="button" className="btn btn-outline-danger" onClick={() => borrarProducto(p.id_producto)}>
                                                        <i className="bi bi-clipboard-x"></i>
                                                    </button>
                                                    &nbsp;
                                                    <button type="button" className="btn btn-outline-info" onClick={() => abrirModalEditar(p)}>
                                                        <i className="bi bi-clipboard-data"></i>
                                                    </button>

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
            </div>
        </>
    );
};

export default Inventario;
