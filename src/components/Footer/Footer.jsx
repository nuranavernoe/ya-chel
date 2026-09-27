import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/Footer.module.css";
import { ROUTES } from "../../utils/routes";

import logo from "../../images/logo.png";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>

                <Link to={ROUTES.HOME} className={styles.logo}>
                    <img src={logo} alt="Логотип" />
                </Link>

                <div className={styles.links}>
                    <Link to={ROUTES.ABOUT}>О нас</Link>
                    <Link to={ROUTES.MENU}>Меню</Link>
                    <Link to={ROUTES.PARTNERS}>Партнерам</Link>
                    <Link to={ROUTES.CONTACTS}>Контакты</Link>
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