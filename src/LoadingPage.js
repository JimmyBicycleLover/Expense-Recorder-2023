import React from "react";
import APP from "./App";
import WelcomePage from "./components/WelcomePage/WelcomePage"
import { BrowserRouter, Route, Switch, Routes } from 'react-router-dom';


const LoadingPage = () => {
    return(
        <Routes>
             <Route path="/" element={<WelcomePage />} />
            <Route path="/HomePage" element={<APP />} />
        </Routes>
    ); 
}

export default LoadingPage;