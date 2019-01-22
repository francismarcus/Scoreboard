import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Players } from './../imports/api/players';
import { Tracker } from 'meteor/tracker';

Meteor.startup(() => {
  Tracker.autorun(() => {
    let players = Players.find().fetch();

    let Hello = <h1> Scoreboard </h1>;
    ReactDOM.render(Hello, document.getElementById("app"));
  });
});
