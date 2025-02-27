import { useState } from "react"
import { FiltrarProducto } from "../Services/Producto"
const Nav = ({onClick}) => {
    const [buscador, setBuscador] = useState("");

    const Buscar = async () =>{
        const id = localStorage.getItem("id_usuario");
        try {
            let rsp = await FiltrarProducto(id,buscador);
            if(rsp){
                console.log("Que se guarda...: "+JSON.stringify(rsp));
            }
        } catch (error) {
            console.log("Error al filtrar "+error);
        }
    }

    return (
        <>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="">Fast Stock</a>

                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"  onChange={(e) => {setBuscador(e.target.value)}}></input>
                        <button className="btn btn-outline-success" type="button" onClick={Buscar}>Search</button>
                    </form>

                    <a type="button" className="btn btn-outline-dark" onClick={onClick}>Salir</a>

                </div>
            </nav>
        </>
    )
}
export default Nav