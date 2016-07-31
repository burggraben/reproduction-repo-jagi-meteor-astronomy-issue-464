import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

export default class App extends React.Component {
    render() {
        return (
          <div>
            <button onClick={() => Meteor.call("test")}>Test</button>
          </div>
        );
    }
}
