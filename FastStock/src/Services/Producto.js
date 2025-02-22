import { GETBYID, GET } from "./fetch"
const url = "/inventario/";
export const Listar = async (id_usuario) => {
    try {
        let rsp = GET(url + id_usuario);
        if (rsp) {
            return rsp;
        } else {
            return [];
        }
    } catch (error) {
        console.log("error al traer la lista: " + error);
    }


}


// export const Listar = async (usuario_id) => {
//     try {
//         let rsp = GETBYID(`/inventario/${usuario_id}`);
//         if (rsp) {
//             return rsp;
//         } else {
//             return null;
//         }
//     } catch (error) {
//         console.log("error al traer la lista: " + error);
//     }


// }