// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { Footer as MDLFooter, FooterSection } from 'react-mdl';
import { translate } from 'react-i18next';
import styles from './Footer.scss';

class Footer extends React.Component {
  static propTypes = {
    viewer: PropTypes.object.isRequired,
    t: PropTypes.func.isRequired
  };

  render() {
    const { t } = this.props;
    return (
      <MDLFooter className={styles.root} size='mini'>
        <FooterSection type='middle'>
          <span>{t('handcrafted')} <a href={this.props.viewer.website}> @{this.props.viewer.username}</a></span>
        </FooterSection>
      </MDLFooter>
    );
  }
}

export default translate()(Footer);
