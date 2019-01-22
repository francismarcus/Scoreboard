import React from "react";
import Player from "./player";

export default class PlayerList extends React.Component {
  renderPlayers() {
    if (this.props.players.lenght === 0) {
      return ( <p> Add a player to get started </p> )
    } else {
      return this.props.players.map(player => {
        return <Player key={player.id} player={player} />;
      });
    }
  }
  render() {
    return <div>{this.renderPlayers()}</div>;
  }
}
