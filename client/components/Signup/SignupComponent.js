// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { QueryRenderer, graphql } from 'react-relay';
import { Grid, Cell, Textfield, Button } from 'react-mdl';
import { translate } from 'react-i18next';
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
                <Button primary>{t('signUp')}</Button>
              </Cell>
            </form>
          </Grid>
        </div>
      </Page>
    );
  }
}

export default translate()(Signup);