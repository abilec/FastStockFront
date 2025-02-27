import Modal from "../Components/modal";
import FormProducto from "./FormProducto";
import { Agregar } from "../Services/Producto";

const Nuevo = ({ isOpen, onClose, actualizarLista }) => {

    const agregarProducto = async (producto) => {
        try {
            let rsp = await Agregar(producto);
            if (rsp) {
                actualizarLista(); 
            } else {
                console.log("Error en ageragr producto en NUEVO");
            }
        } catch (error) {
            console.error("Error al agregar producto:", error);
        }
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Agregar Producto">
            <FormProducto onClick={agregarProducto} onClose={onClose} />
        </Modal>
    );
};

export default Nuevo;
