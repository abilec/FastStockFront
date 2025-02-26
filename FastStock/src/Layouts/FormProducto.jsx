import Input from "../Components/input";
import { useState, useEffect } from "react";

const FormProducto = ({ producto = {}, onClick, onClose }) => {
    console.log("Producto recibido en FormProducto:", JSON.stringify(producto));

    const [data, setData] = useState({
        nombre: "",
        cantidad: "",
        minimo: "",
        usuario: {
            id_usuario: localStorage.getItem("id_usuario"),
        },
    });

    // Determinar si estamos en modo edición o creación
    const esEdicion = producto && producto.id_producto;

    useEffect(() => {
        console.log("Producto cambió en useEffect:", producto);
        if (producto && Object.keys(producto).length > 0) {
            setData({
                ...producto,
                usuario: {
                    id_usuario: localStorage.getItem("id_usuario"),
                }
            });
        }
    }, [producto]);


    const inputChange = (e) => {
        const { name, value } = e.target;
        setData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async () => {
        console.log("Datos enviados:", JSON.stringify(data));
        try {
            if (esEdicion) {
                // Para edición, simplemente pasar el objeto data completo que ya incluye el id_producto
                await onClick(producto.id_producto, data);
            } else {
                // Si estamos creando un nuevo producto
                await onClick(data);
            }
            onClose();
        } catch (error) {
            console.error("Error en realizar acciones al producto:", error);
        }
    };

    return (
        <>
            {console.log("Lo que se almacena en data", JSON.stringify(data.nombre))}
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