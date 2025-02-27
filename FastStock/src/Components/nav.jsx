import { useState } from "react"
import { FiltrarProducto } from "../Services/Producto"
const Nav = ({onClose, actualizarLista}) => {
    const [buscador, setBuscador] = useState("");

    return (
        <>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="">Fast Stock</a>

                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"  onChange={(e) => {setBuscador(e.target.value)}}></input>
                        <button className="btn btn-outline-success" type="button" onClick={()=>actualizarLista(buscador.trim() || null)}>Search</button>
                    </form>

                    <a type="button" className="btn btn-outline-dark" onClick={onClose}>Salir</a>

                </div>
            </nav>
        </>
    )
}
export default Nav