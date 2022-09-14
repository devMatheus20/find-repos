import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "../Pages/Main";
import Repos from "../Pages/Repositório";


export default function MyRoutes() {
    return(
        <Router>
            <Routes>
                <Route  index element={<Main />}/>
                <Route  path="/repos/:repositorio" element={<Repos />}/>
            </Routes>
        </Router>
    )
}