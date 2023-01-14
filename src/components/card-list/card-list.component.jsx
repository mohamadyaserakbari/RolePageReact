import React, { Component } from "react";

class CardList extends Component {
  render() {
    return (
      <div className="card-list">
        {monsters.map((monster) => (
          <div className="card-container">
            <img
              alt={`monster ${monster.name}`}
              src={`https://robohash.org/${monster.id}?set=set2`}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default CardList;
