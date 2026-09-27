import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AppRoutes from "../Routes/routes";

const App = () => {
    return (
        <>
            <Header />
            <AppRoutes />
            <Footer />
        </>
    );
};

export default App;