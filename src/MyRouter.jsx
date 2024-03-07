import { Route, Routes } from "react-router-dom"
import App from "./App"
import NavBar from "./NavBar/NavBar"
import Contact from "./Contact"


const MyRouter = () => {
    return(
        <>
        <NavBar />
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
        </>
    )
    }


 export default MyRouter   