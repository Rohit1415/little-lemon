import * as React from "react";
import "../style/style.css";
import { cardsData } from "../../allData/dummmyData";


const Topdises = () => {
  let data = cardsData;
  const [activeId, setActiveId] = React.useState<number>(1);

  const onClick = (id: number) => setActiveId(id);
  return (
    <div className="outer">
      <div className="containerxtd">
        {data.map((card) => (
          <div
            key={card.id}
            className={`panel ${activeId === card.id ? "active" : ""}`}
            onClick={() => onClick(card.id)}
            style={{ backgroundImage: `url(${card.url})` }}
          >
            <h3>{card.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topdises;
