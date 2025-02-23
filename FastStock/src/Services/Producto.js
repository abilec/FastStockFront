import { GET, DELETE, PATCH, POST } from "./fetch"
const url = "/inventario/";
export const Listar = async (id_usuario) => {
    try {
        let rsp = await GET(url + id_usuario);
        if (rsp) {
            return rsp;
        } else {
            return [];
        }
    } catch (error) {
        console.log("error al traer la lista: " + error);
    }


}

export const Agregar = async (producto) => {
    try {
        let data = await POST(url + "crear", producto);
        if (data) {
            return { ...data, message: "Producto creado correctamente" };
        }
    } catch (error) {
        console.log("error en agregar producto: " + error);
    }
}

export const Eliminar = async (id_producto) => {
    try {
        let data = await DELETE(url + "borrar/" + id_producto);
        if (data) {
            return data;
        }
    } catch (error) {
        console.log("error al eliminar producto: " + error);
    }
}

export const Modificar = async (id_producto, id_user) => {
    try {
        let data = await PATCH(url + "modificar/" + id_producto + "/" + id_user);
        if (data) {
            return data;
        }
    } catch (error) {
        console.log("error al modificar: " + error);
    }
}
