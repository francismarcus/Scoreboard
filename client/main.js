import React from "react";
import ReactDOM from "react-dom";
import { Meteor } from "meteor/meteor";
import { Tracker } from "meteor/tracker";

import { Players, PlayerPositions } from "./../imports/api/players";
import App from "./../imports/components/app";

Meteor.startup(() => {
  Tracker.autorun(() => {
    let players = Players.find({}, { sort: { score: -1 } }).fetch();
    let positionedPlayers = PlayerPositions(players);

    ReactDOM.render(
      <App players={positionedPlayers} />,
      document.getElementById("app")
    );
  });
});
