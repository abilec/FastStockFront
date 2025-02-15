import { POST } from "./fetch";

export const Acceder = async (datos) =>{
    try{
        let resp = await POST("/auth/login", datos);
        if(resp){
            return resp;
        }else{
            return null;
        }
    }catch(error){
        console.error("Error en auth",error);
    }
}