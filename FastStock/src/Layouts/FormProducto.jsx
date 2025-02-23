import Input from "../Components/input";
import { useState } from "react";

const FormProducto = ({ productos = {}, onClick, onClose }) => {
    const [data, setData] = useState({
        nombre: productos.nombre || "",
        cantidad: productos.cantidad || "",
        minimo: productos.minimo || "",
        usuario: {
            id_usuario: localStorage.getItem("id_usuario"),
        },
    });

    const inputChange = (e) => {
        const { name, value } = e.target;
        setData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async () => {
        try {
            await onClick(data);

            setTimeout(() => {
                onClose();
            }, 2000);

        } catch (error) {
            console.error("Error al guardar el producto:", error);
        }
    };

    return (
        <>
            <div>
                <Input label="Nombre del producto" type="text" name="nombre" onChange={inputChange} value={data.nombre} />
                <Input label="Cantidad actual del producto" type="number" name="cantidad" onChange={inputChange} value={data.cantidad} />
                <Input label="Cantidad Mínima del producto" type="number" name="minimo" onChange={inputChange} value={data.minimo} />
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={onClose}>
                    Cerrar
                </button>
                <button type="button" className="btn btn-primary" onClick={handleSubmit}>
                    Guardar
                </button>
            </div>
        </>
    );
};

export default FormProducto;
