import Modal from "../Components/modal"
import FormProducto from "./FormProducto"
import { Modificar } from "../Services/Producto";

const Editar = ({ isOpen, onClose, actualizarLista, producto }) => {

    const editarProducto = async (id, productoData) => {
        try {
            console.log(`Intentando modificar producto con ID: ${id}`);
            console.log("Datos enviados:", productoData);

            if (id) {
                await Modificar(id, productoData);
                actualizarLista();
            } else {
                console.error("Error: ID del producto faltante");
            }
        } catch (error) {
            console.error("Error al modificar producto:", error);
        }
    }

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} title={"Modificar Producto"}>
                <FormProducto onClose={onClose} producto={producto} onClick={editarProducto} />
            </Modal>
        </>
    );
};

export default Editar;