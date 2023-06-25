import { useState, useEffect } from "react";

const usePersist = () => {
    console.log("Reached the start of usePersist.js")
    const [persist, setPersist] = useState(JSON.parse(localStorage.getItem("persist")) || false)

    useEffect(() => {
        localStorage.setItem("persist", JSON.stringify(persist))
    }, [persist])

    return [persist, setPersist]
}

export default usePersist