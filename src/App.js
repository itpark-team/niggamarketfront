import React from 'react';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import {Route, Routes} from "react-router-dom";
import Cards from "./components/cards/Cards";
import Page from "./components/page/Page";

const App = () => {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<Cards/>}/>
                <Route path="/page/:cardId" element={<Page/>}/>
            </Routes>
            <Footer/>
        </div>
    );
};

export default App;