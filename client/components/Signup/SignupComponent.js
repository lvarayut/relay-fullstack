// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { QueryRenderer, graphql } from 'react-relay';
import { translate } from 'react-i18next';
import { Grid, TextField, Button } from 'material-ui';
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
  static propTypes = {
    t: PropTypes.func.isRequired
  };
  render() {
    const { t } = this.props;
    return (
      <Page heading={t('signUp')}>
        <div style={{ width: '70%', margin: 'auto' }}>
          <Grid container className='justify-xs-center'>
            <Grid
              container
              align='center'
              direction='row'
              justify='center'
            >
              <form style={{ margin: 'auto' }}>
                <Grid>
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
                            <TextField
                              onChange={() => {}}
                              label={props.getOrganization.Name}
                            />
                          );
                        }
                        return <div>Loading</div>;
                      }}
                    />
                </Grid>
                <Grid>
                  <TextField
                    onChange={() => {}}
                    label="Password"
                    type="password"
                  />
                </Grid>
                <Grid col={12} style={{ textAlign: 'right' }}>
                  <Button primary>{t('signUp')}</Button>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </div>
      </Page>
    );
  }
}

export default translate()(Signup);