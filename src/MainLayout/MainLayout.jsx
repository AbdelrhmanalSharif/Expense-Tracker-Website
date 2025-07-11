import { HashRouter, Route, Routes } from "react-router";
import Navbar from './../Components/Navbar/Navbar';
import Home from "../Pages/Home/Home";
import Auth from "../Pages/Auth/Auth";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import Error from "../Pages/Error/Error";
import AuthCheck from "../AuthCheck/AuthCheck";
import Footer from "../Components/Footer/Footer";



const MainLayout = () => {
    return (

        <HashRouter>
            {/* navbar  */}
            <Navbar />
            <Routes>
                <Route path="/" element={
                    <AuthCheck>
                        <Home/>
                    </AuthCheck>
                } />
                <Route path="auth" element={<Auth/>}>
                    <Route path="login" element={<Login/>} />
                    <Route path="register" element={<Register/>} />
                </Route>

                {/* not found routes  */}
                <Route path="*" element={<Error/> } />
            </Routes>

            {/* footer component  */}
            <Footer />

        </HashRouter>

    );
};

export default MainLayout;