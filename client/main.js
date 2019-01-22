import React from "react";
import ReactDOM from "react-dom";
import { Meteor } from "meteor/meteor";
import { Tracker } from "meteor/tracker";

import { Players } from "./../imports/api/players";
import Title from "./../imports/components/title";

Meteor.startup(() => {
  Tracker.autorun(() => {
    let players = Players.find().fetch();

    let Hello = <Title />;
    ReactDOM.render(Hello, document.getElementById("app"));
  });
});
