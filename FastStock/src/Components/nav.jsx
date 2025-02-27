import { useState } from "react"
import { FiltrarProducto } from "../Services/Producto"
const Nav = ({ onClose, actualizarLista }) => {
    const [buscador, setBuscador] = useState("");

    // Función para manejar cambios en el input
    const inputChange = (e) => {
        const valor = e.target.value;
        setBuscador(valor);

        // Si el input queda vacío, actualizar la lista para mostrar todos los productos
        if (!valor.trim()) {
            actualizarLista(null);
        }
    };

    return (
        <>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="">Fast Stock</a>

                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Buscar por nombre" aria-label="Search" onChange={inputChange}></input>
                        <button className="btn btn-outline-success" type="button" onClick={() => actualizarLista(buscador.trim() || null)}><i className="bi bi-search"></i></button>
                    </form>

                    <a type="button" className="btn btn-outline-dark" onClick={onClose}>Salir <i className="bi bi-box-arrow-in-left"></i></a>

                </div>
            </nav>
        </>
    )
}
export default Nav