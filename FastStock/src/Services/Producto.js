import { GET } from "./fetch"

const url = "/inventario/";

export const Listar = async (datos) =>{
    try {
        let rsp = GET(url+datos)
        if(rsp){
            return rsp;
        }else{
            return null;
        }
    } catch (error) {
        console.log("error al traer la lista: "+error);
    }


}