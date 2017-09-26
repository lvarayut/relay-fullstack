// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import 'normalize.css/normalize.css';
import 'react-mdl/extra/css/material.cyan-red.min.css';
import Navbar from '../Navbar/NavbarComponent';
import Footer from '../Footer/FooterContainer';
import styles from './App.scss';
import yeoman from '../../assets/yeoman.png';

class App extends React.Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    viewer: PropTypes.object.isRequired,
    t: PropTypes.func.isRequired
  };

  render() {
    const { t } = this.props;

    return (
      <div className={styles.root}>
        <Navbar />
        <div className={styles.greeting}>
          <h1 className={styles.sawasdee}>Sawasdee, Sawasdee!</h1>
          <p>{t('pleasure')}</p>
          <img src={yeoman} alt="yeoman" />
        </div>
        <div className={styles.content}>{this.props.children}</div>
        <Footer viewer={this.props.viewer} />
      </div>
    );
  }
}

export default translate()(App);
