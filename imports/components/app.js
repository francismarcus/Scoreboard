import React from 'react';

import Title from "./title";
import AddPlayer from "./addplayer";
import PlayerList from "./playerlist";

export default class App extends React.Component {
    render () {
        return (
        <div>
        <Title title="Scoreboard" />
        <PlayerList players={this.props.players}/>
        <AddPlayer />
      </div>
        )
    }
}
