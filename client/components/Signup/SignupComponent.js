// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Cell, Textfield, Button } from 'react-mdl';
import { translate } from 'react-i18next';
import Page from '../Page/PageComponent';

class Signup extends React.Component {
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
                <Textfield onChange={() => {}} label={t('username')} />
              </Cell>
              <Cell col={12}>
                <Textfield onChange={() => {}} label={t('password')} type='password' />
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

