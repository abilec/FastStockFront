import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import RoutesPages from "./Layouts/RoutesPages";

// Pages
import Inicio from "./Pages/inicio";
import Inventario from "./Pages/inventario";

// Componente para rutas protegidas
const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem("token");
    return token ? children : <Navigate to="/inicio" replace />;
};

const RouterApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Ruta pública */}
                <Route
                    path="/inicio"
                    element={
                        <RoutesPages>
                            <Inicio />
                        </RoutesPages>
                    }
                />

                {/* Ruta protegida */}
                <Route
                    path="/inventario"
                    element={
                        <ProtectedRoute>
                            <RoutesPages>
                                <Inventario />
                            </RoutesPages>
                        </ProtectedRoute>
                    }
                />
               
                {/* Ruta por defecto */}
                <Route path="*" element={<Navigate to="/inicio" replace />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouterApp;
