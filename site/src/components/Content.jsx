import React from "react";
import './content.css'
import {Routes, Route} from "react-router-dom";


import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";

const Content = props => (
    
    <main className="Content">
            <Routes>
             <Route path='/sobre-nos' element={<About/>} >    </Route>
             <Route path='/home' element={<Home/>} >  </Route>
                <Route path='/login' element={<Login/>} >  </Route>
         </Routes>
    </main>
)

export default Content 