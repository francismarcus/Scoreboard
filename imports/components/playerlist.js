import React from "react";
import Player from "./player";
import FlipMove from "react-flip-move";

import styles from './item.css'
export default class PlayerList extends React.Component {
  renderPlayers() {
    if (this.props.players.length === 0) {
      return (
        <div className="item">
          <p className="item__message">Add your first player to get started!</p>
        </div>
      );
    } else {
      return this.props.players.map(player => {
        return <Player key={player._id} player={player} />;
      });
    }
  }
  render() {
    return (
      <div>
        <FlipMove maintainContainerHeight={true}>
          {this.renderPlayers()}
        </FlipMove>
      </div>
    );
  }
}
