import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/Header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>

                <Link to="/" className={styles.logo}>
                    COFFEE
                </Link>

                <nav className={styles.nav}>
                    <Link to="/">Главная</Link>
                    <Link to="/menu">Меню</Link>
                    <Link to="/about">О нас</Link>
                    <Link to="/contacts">Контакты</Link>
                </nav>

                <Link to="/cart" className={styles.cart}>
                    🛒
                </Link>

            </div>
        </header>
    );
};

export default Header;