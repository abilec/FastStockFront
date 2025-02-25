import Input from "../Components/input";
import { useState, useEffect } from "react";

const FormProducto = ({ producto = {}, onClick, onClose }) => {
    console.log("Producto recibido en FormProducto:", JSON.stringify(producto));
    
    const [data, setData] = useState({
        id_producto: Object.hasOwn(producto, 'id_producto') ? producto.id_producto : "",
        nombre: Object.hasOwn(producto, 'nombre') ? producto.nombre : "",
        cantidad: Object.hasOwn(producto, 'cantidad') ? producto.cantidad : "",
        minimo: Object.hasOwn(producto, 'minimo') ? producto.minimo : "",
        usuario: {
            id_usuario: localStorage.getItem("id_usuario"),
        },
    });

    useEffect(() => {
        console.log("Producto cambió en useEffect:", producto);
        if (producto && typeof producto === 'object') {
            // Usa Object.keys para verificar si el objeto tiene propiedades
            if (Object.keys(producto).length > 0) {
                setData({
                    id_producto: producto.id_producto,
                    nombre: producto.nombre,
                    cantidad: producto.cantidad,
                    minimo: producto.minimo,
                    usuario: {
                        id_usuario: localStorage.getItem("id_usuario"),
                    }
                })
            }
        }
    }, [producto]);

    const inputChange = (e) => {
        const { name, value } = e.target;
        setData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async () => {
        console.log("Datos enviados a editarProducto:", JSON.stringify(data));
        try {
            await onClick(data);
            onClose();

        } catch (error) {
            console.error("Error en realizar acciones al producto:", error);
        }
    };

    return (
        <>
            {console.log("Lo que se almacena en data", JSON.stringify(data))}
            <div>
                <Input label="Nombre del producto" type="text" name="nombre" onChange={inputChange} text={data.nombre} />
                <Input label="Cantidad actual del producto" type="number" name="cantidad" onChange={inputChange} text={data.cantidad} />
                <Input label="Cantidad Mínima del producto" type="number" name="minimo" onChange={inputChange} text={data.minimo} />
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
