import { createBrowserRouter, createRoutesFromElements, Route } from "react-router";
import Home from "../components/Home/Home";
import LoginPage from "../components/Login/Login.jsx"
import Signup from "../components/SignUp/Signup.jsx"
import { StudentMain } from "../components/DashBoard/StudentMain.jsx";

const Router= createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route path='/' element={<StudentMain/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<Signup/>}/>
        </>
    )
)

export default Router;