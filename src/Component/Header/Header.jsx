import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./Header.css";
import mebel2 from "../../assets/mebel2.png";
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import productData from "../Product/product";
import spalni2 from "../../assets/spalni2.png";
import spalni3 from "../../assets/spalni3.png";

function Header() {
  const { t, i18n } = useTranslation();
  const [fallProducts, setFallProducts] = useState([]);
  const [winterProducts, setWinterProducts] = useState([]);
  const [summerProducts, setSummerProducts] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 120,
      once: true,
    });
    AOS.refresh();
  }, []);

  useEffect(() => {
    const updateProducts = () => {
      const lang = i18n.language;
      const getLocalizedData = (data) => data.map(item => ({
        ...item,
        name: item.name[lang] || item.name.en,
        alt: item.alt[lang] || item.alt.en
      }));

      setFallProducts(getLocalizedData(productData.Kuz || []));
      setWinterProducts(getLocalizedData(productData.Qish || []));
      setSummerProducts(getLocalizedData(productData.Yozgi || []));
    };

    updateProducts();
  }, [i18n.language]);

  const navigate = useNavigate();
  const handleClick = () => {
    window.scrollTo(0, 0);
    navigate("/shop");
  };

  return (
    <div className="header">
      <div className="container">
        <div className="header-list" data-aos="fade-up">
          <h2 className="header-list-titles">
            <span className="titles-span">100%</span> <br />
            {t("header_material_quality")}
          </h2>
          <img
            src={mebel2}
            alt="Furniture"
            className="header-mebel2"
            data-aos="fade-down"
          />
          <nav className="header-list-nav">
            <h2 className="header-list-title">"{t("bukhara_natural_product")}"</h2>
            <p className="header-list-text">{t("header_company_desc")}</p>
            <button className="header-list-btn" onClick={handleClick}>
              {t("header_collection")}
            </button>
          </nav>
        </div>

        <h2 className="header-title" data-aos="fade-in">
          {t("header_winter_collection")}
        </h2>
        <p className="header-text">{t('bukhara_natural_product')}</p>
        <ul className="header-navbar">
          {winterProducts.map((item) => (
            <li
              className="header-item"
              key={`Qish-${item.id}`}
              data-aos="fade-in"
            >
              <Link to={`/product/Qish/${item.id}`}>
                <img src={item.img} alt={item.alt} className="header-logo" />
                <p className="header-navbar-text">{item.name}</p>
              </Link>
            </li>
          ))}
        </ul>

        <div className="header-list-kuz" data-aos="fade-up">
          <h2 className="header-list-titles">
            <span className="titles-span">100%</span> <br />
            {t("header_material_quality")}
          </h2>
          <img
            src={spalni3}
            alt="Furniture"
            className="header-mebel2"
            data-aos="fade-down"
          />
          <nav className="header-list-nav">
            <h2 className="header-list-title">"{t("bukhara_natural_product")}"</h2>
            <p className="header-list-text">{t("header_company_desc")}</p>
            <button className="header-list-btn" onClick={handleClick}>
              {t("header_collection")}
            </button>
          </nav>
        </div>

        <h2 className="header-title" data-aos="fade-in">
          {t("header_autumn_collection")}
        </h2>
        <p className="header-text">{t('bukhara_natural_product')}</p>
        <ul className="header-navbar">
          {fallProducts.map((item) => (
            <li
              className="header-item"
              key={`Kuz-${item.id}`}
              data-aos="fade-in"
            >
              <Link to={`/product/Kuz/${item.id}`}>
                <img src={item.img} alt={item.alt} className="header-logo" />
                <p className="header-navbar-text">{item.name}</p>
              </Link>
            </li>
          ))}
        </ul>

        <div className="header-list-yozgi" data-aos="fade-up">
          <h2 className="header-list-titles">
            <span className="titles-span">100%</span> <br />
            {t("header_material_quality")}
          </h2>
          <img
            src={spalni2}
            alt="Furniture"
            className="header-mebel2"
            data-aos="fade-down"
          />
          <nav className="header-list-nav">
            <h2 className="header-list-title">"{t("bukhara_natural_product")}"</h2>
            <p className="header-list-text">{t("header_company_desc")}</p>
            <button className="header-list-btn" onClick={handleClick}>
              {t("header_collection")}
            </button>
          </nav>
        </div>

        <h2 className="header-title" data-aos="fade-in">
          {t("header_summer_collection")}
        </h2>
        <p className="header-text">{t('bukhara_natural_product')}</p>
        <ul className="header-navbar">
          {summerProducts.map((item) => (
            <li
              className="header-item"
              key={`Yozgi-${item.id}`}
              data-aos="fade-in"
            >
              <Link to={`/product/Yozgi/${item.id}`}>
                <img src={item.img} alt={item.alt} className="header-logo" />
                <p className="header-navbar-text">{item.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Header;
