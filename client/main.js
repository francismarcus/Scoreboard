import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  let Hello = <h1> Hello World </h1>;
  ReactDOM.render(Hello, document.getElementById("app"));
});
