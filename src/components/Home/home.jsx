import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/Home.module.css";
import { ROUTES } from "../../utils/routes";

import coffee1 from "../../images/coffee-1.png";
import coffee2 from "../../images/coffee-2.png";
import coffee3 from "../../images/coffee-3.png";
import coffee4 from "../../images/coffee-4.png";

import menuCoffee from "../../images/menu-coffee.png";
import menuTea from "../../images/menu-tea.png";
import menuCacao from "../../images/menu-cacao.png";
import menuIced from "../../images/menu-iced.png";
import menuCruas from "../../images/menu-cruas.png";
import menuSandwich from "../../images/menu-san-s.png";

const CATEGORIES = [
    { title: "Кофе", image: menuCoffee },
    { title: "Чай", image: menuTea },
    { title: "Какао", image: menuCacao },
    { title: "Холодные напитки", image: menuIced },
    { title: "Круассаны", image: menuCruas },
    { title: "Сэндвичи", image: menuSandwich },
];

const FEATURES = [
    { number: "01", title: "Свежая обжарка", text: "Зерно обжариваем небольшими партиями каждую неделю." },
    { number: "02", title: "Бариста с опытом", text: "Каждую чашку готовят люди, которые любят своё дело." },
    { number: "03", title: "С собой за 3 минуты", text: "Закажите онлайн и заберите без очереди." },
];

const Home = () => {
    return (
        <div className={styles.home}>

            <section className={styles.hero}>
                <div className={styles.heroText}>
                    <span className={styles.badge}>Кофейня в Караганде</span>
                    <h1 className={styles.title}>
                        Кофе, ради которого <em>стоит</em> проснуться
                    </h1>
                    <p className={styles.subtitle}>
                        Спешелти-зерно, свежая выпечка и тёплая атмосфера —
                        каждый день с 08:00 до 22:00.
                    </p>
                    <div className={styles.buttons}>
                        <Link to={ROUTES.MENU} className={styles.primaryBtn}>Смотреть меню</Link>
                        <Link to={ROUTES.ABOUT} className={styles.secondaryBtn}>О нас</Link>
                    </div>
                </div>

                <div className={styles.heroImages}>
                    <div className={styles.circle} />
                    <img src={coffee1} alt="" className={`${styles.cup} ${styles.cup1}`} />
                    <img src={coffee2} alt="" className={`${styles.cup} ${styles.cup2}`} />
                    <img src={coffee3} alt="" className={`${styles.cup} ${styles.cup3}`} />
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.sectionHead}>
                    <h2 className={styles.sectionTitle}>Наше меню</h2>
                    <Link to={ROUTES.MENU} className={styles.more}>Всё меню →</Link>
                </div>

                <div className={styles.grid}>
                    {CATEGORIES.map(({ title, image }) => (
                        <Link to={ROUTES.MENU} key={title} className={styles.card}>
                            <div className={styles.cardImage}>
                                <img src={image} alt={title} />
                            </div>
                            <span className={styles.cardTitle}>{title}</span>
                        </Link>
                    ))}
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.features}>
                    {FEATURES.map(({ number, title, text }) => (
                        <div key={number} className={styles.feature}>
                            <span className={styles.featureNumber}>{number}</span>
                            <h3 className={styles.featureTitle}>{title}</h3>
                            <p className={styles.featureText}>{text}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.banner}>
                    <div>
                        <h2 className={styles.bannerTitle}>Первый кофе — со скидкой 20%</h2>
                        <p className={styles.bannerText}>Покажите это на кассе или закажите онлайн.</p>
                        <Link to={ROUTES.MENU} className={styles.bannerBtn}>Заказать</Link>
                    </div>
                    <img src={coffee4} alt="" className={styles.bannerImage} />
                </div>
            </section>

        </div>
    );
};

export default Home;
