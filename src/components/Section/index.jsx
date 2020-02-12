import React from "react";

import "./index.css";
import Article from "./Article";

const Section = ({ mainTitle, data, onProductClick }) => {
  return (
    <section className="main-content">
      <h2>{mainTitle}</h2>
      <div className="articles">
        {data.map(meal => (
          <Article key={meal.id} meal={meal} onClick={onProductClick} />
        ))}
      </div>
    </section>
  );
};

export default Section;
