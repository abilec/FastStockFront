import { useEffect, useState } from "react"

const Semaforo = ({ min, cant }) => {
    const [color, setColor] = useState({ verde: "#000", amarillo: "#000", rojo: "#000" });

    useEffect(() => {
        if (cant > min) {
            setColor({ ...color, verde: "#77b255" });
        } else if (cant < min) {
            setColor({ ...color, rojo: "#dd2e44" });
        } else if (cant == min) {
            setColor({ ...color, amarillo: "#ffcc4d" });
        }
    }, [])

    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
                <rect width="36" height="36" fill="none" />
                <path fill="#31373d" d="M36 23a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V13a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z" />
                <circle cx="7" cy="18" r="4" fill={color.verde} />
                <circle cx="18" cy="18" r="4" fill={color.amarillo} />
                <circle cx="29" cy="18" r="4" fill={color.rojo} />
            </svg>
        </>
    )
}

export default Semaforo