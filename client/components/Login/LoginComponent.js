// @flow
/* eslint-disable jsx-a11y/href-no-hash */
import React, { Component } from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import { Grid, Cell, Textfield, Button, Checkbox } from 'react-mdl';
import Page from '../Page/PageComponent';

import environment from '../../relay/environment';

const LoginComponentQuery = graphql`
  query LoginComponentQuery {
    viewer {
      username
    }
  }
`;

class Login extends Component {
  render() {
    return (
      <Page heading="Login">
        <div style={{ width: '70%', margin: 'auto' }}>
          <Grid>
            <form style={{ margin: 'auto' }}>
              <Cell col={12}>
                <QueryRenderer
                  environment={environment}
                  query={LoginComponentQuery}
                  render={({ error, props }) => {
                    if (error) {
                      return <Textfield onChange={() => {}} label="Username" />;
                    } else if (props) {
                      return (
                        <Textfield
                          onChange={() => {}}
                          label={props.viewer.username}
                        />
                      );
                    }
                    return <div>Loading</div>;
                  }}
                />
              </Cell>
              <Cell col={12}>
                <Textfield
                  onChange={() => {}}
                  label="Password"
                  type="password"
                />
              </Cell>
              <Cell col={12}>
                <Checkbox
                  label="Remember me"
                  ripple
                  style={{ textAlign: 'right' }}
                />
              </Cell>
              <Cell col={12} style={{ textAlign: 'right' }}>
                <a href="#">Forgot password</a>
                <Button primary>Login</Button>
              </Cell>
            </form>
          </Grid>
        </div>
      </Page>
    );
  }
}

export default Login;
