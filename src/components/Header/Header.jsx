import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "../../styles/Header.module.css";
import { ROUTES } from "../../utils/routes";

import logo from "../../images/logo.png";
import userIcon from "../../images/user logo.png";
import cartIcon from "../../images/order logo.png";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>

                <div className={styles.left}>
                    <Link to={ROUTES.HOME} className={styles.logo}>
                        <img src={logo} alt="Логотип" />
                    </Link>

                    <nav className={styles.nav}>
                        <NavLink to={ROUTES.ABOUT} className={styles.navLink}>о нас</NavLink>
                        <NavLink to={ROUTES.MENU} className={styles.navLink}>меню</NavLink>
                        <NavLink to={ROUTES.PARTNERS} className={styles.navLink}>партнерам</NavLink>
                    </nav>
                </div>

                <div className={styles.actions}>
                    <span className={styles.locationLang}>Караганда | RU</span>

                    <Link to={ROUTES.PROFILE} className={styles.iconLink} aria-label="Профиль">
                        <img src={userIcon} alt="" className={styles.icon} />
                    </Link>

                    <Link to={ROUTES.CART} className={styles.iconLink} aria-label="Корзина">
                        <img src={cartIcon} alt="" className={styles.icon} />
                    </Link>
                </div>

            </div>
        </header>
    );
};

export default Header;
