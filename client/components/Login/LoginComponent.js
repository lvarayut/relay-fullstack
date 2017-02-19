/* eslint-disable jsx-a11y/href-no-hash */
import React from 'react';
import { Grid, Cell, Textfield, Button, Checkbox } from 'react-mdl';
import Page from '../Page/PageComponent';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isUsernamePresent: false,
      isPasswordPresent: false,
      errorUsername: false,
      errorPassword: false
    };
  }

  setFormErrors = () => {
    const { isUsernamePresent, isPasswordPresent } = this.state;
    // If not present!
    if (!isUsernamePresent) {
      this.setState({ errorUsername: 'Username is blank' });
    }
    if (!isPasswordPresent) {
      this.setState({ errorPassword: 'Passwords is blank' });
    }
  };

  loginUser = (form) => {
    form.preventDefault();
    const { /* username, password,*/ isUsernamePresent, isPasswordPresent } = this.state;
    if (isUsernamePresent && isPasswordPresent) {
      return null;
    }
    return this.setFormErrors();
  };

  handleUsernameChange(e) {
    const value = e.target.value;
    this.setState({ username: value });
    // Empty value or username is not present set error
    if (value === '') {
      this.setState({ isUsernamePresent: false });
    } else {
      this.setState({ isUsernamePresent: true });
      this.setState({ errorUsername: false });
    }
  }

  handlePasswordChange(e) {
    const value = e.target.value;
    this.setState({ password: value });
    if (value === '') {
      this.setState({ isPasswordPresent: false });
    } else {
      this.setState({ isPasswordPresent: true });
      this.setState({ errorPassword: false });
    }
  }

  render() {
    return (
      <Page heading='Login'>
        <div style={{ width: '70%', margin: 'auto' }}>
          <Grid>
            <form style={{ margin: 'auto' }} onSubmit={this.loginUser}>
              <Cell col={12}>
                <Textfield
                  onChange={this.handleUsernameChange.bind(this)}
                  label='Username'
                  error={this.state.errorUsername}

                />
              </Cell>
              <Cell col={12}>
                <Textfield
                  onChange={this.handlePasswordChange.bind(this)}
                  label='Password'
                  type='password'
                  error={this.state.errorPassword}

                />
              </Cell>
              <Cell col={12}>
                <Checkbox label='Remember me' ripple style={{ textAlign: 'right' }} />
              </Cell>
              <Cell col={12} style={{ textAlign: 'right' }}>
                <a href='#'>Forgot password</a>
                <Button primary>Login</Button>
              </Cell>
            </form>
          </Grid>
        </div>
      </Page>
    );
  }

}
