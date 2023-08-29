import { Route, Routes } from "react-router-dom"
import Homepage from "../pages/Homepage"

const RoutesMain = () => {
    return(
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={""} />
            <Route path="/register" element={""} />
        </Routes>
    )
}

export default RoutesMain