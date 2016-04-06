import React from 'react';
import Navbar from '../Navbar/NavbarComponent';
import Footer from '../Footer/FooterContainer';
import './App.scss';

export default class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.object.isRequired,
    viewer: React.PropTypes.object.isRequired
  };

  render() {
    return (
      <div className='app'>
        <Navbar />
        <div className='greeting'>
          <h1>Sawasdee, Sawasdee!</h1>
          <p>Always a pleasure scaffolding your apps</p>
          <img src={require('../../assets/yeoman.png')} />
        </div>
        <div className='content'>
          {this.props.children}
        </div>
        <Footer viewer={this.props.viewer} />
      </div>
    );
  }
}

