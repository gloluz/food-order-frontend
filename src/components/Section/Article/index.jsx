import React from "react";

import "./index.css";
import { formatPrice } from "../../../services/formatPrice";

const Article = ({ meal, onClick }) => {
  const { title, description, price, popular, picture } = meal;

  return (
    <article className="article-main" onClick={() => onClick(meal)}>
      <div className="main-content-menu">
        <div className="main-content-menu-left">
          <h3>{title}</h3>
          <div className="main-content-menu-left-hidden">
            <span>{description}</span>
          </div>

          <div className="popular">
            <span className="price">{formatPrice(price)}</span>
            {popular && (
              <span>
                <i className="fas fa-star"></i>
                <strong className="text">Populaire</strong>
              </span>
            )}
          </div>
        </div>

        <div className="main-content-menu-right">
          {picture && <img src={picture} alt="menus" />}
        </div>
      </div>
    </article>
  );
};

export default Article;
