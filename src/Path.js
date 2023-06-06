import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App"
import CommentBox from './CommentBox';


const Path = () => {
    return (
        <BrowserRouter> 
            <Routes>
                <Route path='/' element={<App/>}></Route>
                <Route path='create' element={<CommentBox/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Path