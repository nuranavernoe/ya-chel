import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>

                <div className={styles.logo}>
                    COFFEE
                </div>

                <div className={styles.links}>
                    <Link to="/">Главная</Link>
                    <Link to="/menu">Меню</Link>
                    <Link to="/about">О нас</Link>
                    <Link to="/contacts">Контакты</Link>
                </div>

                <div className={styles.info}>
                    <p>Кофейня Coffee</p>
                    <p>Ежедневно: 08:00–22:00</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;