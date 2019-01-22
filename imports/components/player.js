import React from "react";

import { Players } from "./../api/players";

export default class Player extends React.Component {
  render() {
    return (
      <p key={this.props.player.id}>
        {this.props.player.name} has {this.propsplayer.score} pts
        <button
          onClick={() => {
            Players.update(this.props.player.id, { $inc: { score: -1 } });}}>
          -1
        </button>
        <button
          onClick={() => {
            Players.update(this.props.player.id, { $inc: { score: 1 } });}}>
          +1
        </button>
      </p>
    );
  }
}
