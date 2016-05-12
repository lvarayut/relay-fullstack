/* eslint-disable global-require */
import React from 'react';

export default class Course extends React.Component {
  static propTypes = {
    viewer: React.PropTypes.object.isRequired
  };

  render() {
    return (
      <div>
        <ul>
          {this.props.viewer.courses.edges.map(edge => (
            <li key={edge.node.id}>{edge.node.coursenum}</li>
          ))}
        </ul>
      </div>
    );
  }
}
