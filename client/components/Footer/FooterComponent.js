import React from 'react';
import PropTypes from 'prop-types';
import { Footer as MDLFooter, FooterSection } from 'react-mdl';
import styles from './Footer.scss';

export default class Footer extends React.Component {
  static propTypes = {
    viewer: PropTypes.object.isRequired,
  };

  render() {
    return (
      <MDLFooter className={styles.root} size='mini'>
        <FooterSection type='middle'>
          <span>Handcrafted with ♥ by <a href={this.props.viewer.website}> @{this.props.viewer.username}</a></span>
        </FooterSection>
      </MDLFooter>
    );
  }
}
