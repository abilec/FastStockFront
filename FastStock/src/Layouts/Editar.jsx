import Modal from "../Components/modal"
import FormProducto from "./FormProducto"
import { Modificar } from "../Services/Producto";
const Editar = ({isOpen, onClose, actualizarLista, producto}) =>{

    const editarProducto = async (producto) =>{
        try {
            
            if(producto){
                let id = localStorage.getItem("id_usuario");
                let rsp = await Modificar(producto.id_producto,id);
                console.log("Rsp de modificar: "+rsp);
                if(rsp){
                    actualizarLista();
                }else {
                    console.log("Error en modificar producto ...");
                }
            }
        } catch (error) {
            console.log("No se pudo directamente modificar: "+error);
        }
    }

    return(
        <>
            <Modal isOpen={isOpen} onClose={onClose} title={"Modificar Producto"}>
                <FormProducto onClose={onClose} producto={producto} onClick={editarProducto} />
            </Modal>
        </>
    );
};

export default Editar