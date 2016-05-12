import React from 'react';
import './App.scss';

export default class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.object.isRequired
  };

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
