// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Layout, Header, Navigation, Drawer } from 'react-mdl';
import { translate } from 'react-i18next';
import styles from './Navbar.scss';

class Navbar extends React.Component {
  static propTypes = {
    t: PropTypes.func.isRequired
  };

  render() {
    const title = 'Relay Fullstack';
    const { t } = this.props;
    return (
      <Layout className={styles.root}>
        <Header title={<Link to='/'>{title}</Link>} scroll>
          <Navigation>
            <Link to='/signup'>{t('signUp')}</Link>
            <Link to='/login'>Login</Link>
          </Navigation>
        </Header>
        <Drawer title={<Link to='/' style={{ fontSize: '1.5em' }}>{title}</Link>} className='mdl-layout--small-screen-only'>
          <Navigation>
            <Link to='/signup'>{t('signUp')}</Link>
            <Link to='/login'>Login</Link>
          </Navigation>
        </Drawer>
      </Layout>
    );
  }
}

export default translate()(Navbar);
