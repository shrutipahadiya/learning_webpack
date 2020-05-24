import React from 'react';
import ReactDOM from 'react-dom';

// const React = require('react')
// const ReactDOM = require('react-dom')

class App extends React.Component{
  render() {
    return (
      <h1>
        You've figured out webpack!
      </h1>
    )
  }
}

const app = document.getElementById('app');

// ReactDOM.render(React.createElement('h1',null,'Hello World'), app,() => {
//     console.log('I have rendered!');
//   },
// );

ReactDOM.render(
  <App />,
  app,
  () => {
    console.log('Congrats!');
  },
);
