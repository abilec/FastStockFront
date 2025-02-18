import { jwtDecode } from "jwt-decode";
import { useState,useEffect } from "react";

const Inventario = () =>{
    const [tokenUser, setTokenUser] = useState();
    useEffect(() => {
        const token = localStorage.getItem("token");
        if(token){
        try {
            const decoded = jwtDecode(token);
            if(decoded){
                setTokenUser(decoded);
                localStorage.setItem("usuario",decoded.usuario);
                localStorage.setItem("id_usuario",decoded.id_usuario);
            }
        } catch (error) {
            console.error("Error a decodificar el Token: "+error);
            setTokenUser("TokenInvalido");
        }}
    },[])
    return(
        <div>
            <h1>Pasaste</h1>
            <div className="card" id="cardInicio">
                <div className="card-body">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Cantidad</th>
                                <th>Minimo</th>
                                <th>Semáforo</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Inventario