import React from 'react';
import { Footer as MDLFooter, FooterSection } from 'react-mdl';
import './Footer.scss';

export default class Footer extends React.Component {
  static propTypes = {
    username: React.PropTypes.string.isRequired,
    website: React.PropTypes.string.isRequired
  };

  render() {
    return (
      <MDLFooter size='mini'>
        <FooterSection type='middle'>
          <span>Handcrafted with ♥ by <a href={this.props.website}> @{this.props.username}</a></span>
        </FooterSection>
      </MDLFooter>
    );
  }
}
