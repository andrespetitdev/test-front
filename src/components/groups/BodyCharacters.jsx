import "./body.css"
import { Search } from "./search";
import { cards } from "../../assets/data.json";

export const BodyCharacters = () => {

  return (
    <div className="container">
        <div className="header">
            <h1>Condimentum consectetur</h1>
            <Search />
        </div>
        <div className="cardSelectorContainer">
          <p>Showing 20 - from 125 </p>
          <div className="cardContainer">
              { cards.map(card =>
                <div className="card" key={card.id}>
                  <img src={card.image} alt={card.game} />
                  <p>{card.game}</p>
                  <p>{card.price}</p>
                  <p>Lorem ipsum dolor sit amut</p>
                  <button className="detailsbtn">Details</button>
                  <button className="addbtn">Add</button>
                </div>) }
          </div>
        </div>
    </div>
  );
};
