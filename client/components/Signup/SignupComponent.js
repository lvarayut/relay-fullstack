// @flow
import React, { Component } from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import { Grid, Cell, Textfield, Button } from 'react-mdl';
import Page from '../Page/PageComponent';

import environment from '../../relay/createRelayEnvironment';

const query = graphql`
  query SignupComponentQuery($Organization: String!, $Token: String!) {
    getOrganization(Organization: $Organization, Token: $Token) {
      Name
    }
  }
`;

class Signup extends Component {
  render() {
    return (
      <Page heading="Signup">
        <div style={{ width: '70%', margin: 'auto' }}>
          <Grid>
            <form style={{ margin: 'auto' }}>
              <Cell col={12}>
                <QueryRenderer
                  environment={environment}
                  query={query}
                  variables={{
                    Organization: 'OrganizationID',
                    Token: 'GODWORD'
                  }}
                  render={({ error, props }) => {
                    if (error) {
                      return <div>{error}</div>;
                    } else if (props) {
                      return (
                        <Textfield
                          onChange={() => {}}
                          label={props.getOrganization.Name}
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
              <Cell col={12} style={{ textAlign: 'right' }}>
                <Button primary>Sign up</Button>
              </Cell>
            </form>
          </Grid>
        </div>
      </Page>
    );
  }
}

export default Signup;
