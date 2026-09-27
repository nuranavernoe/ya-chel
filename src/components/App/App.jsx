import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AppRoutes from "../Routes/routes";

const App = () => {
    return (
        <div className="app">
            <Header />
            <main className="main">
                <AppRoutes />
            </main>
            <Footer />
        </div>
    );
};

export default App;
