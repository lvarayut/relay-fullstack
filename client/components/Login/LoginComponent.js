// @flow
/* eslint-disable jsx-a11y/href-no-hash */
import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Cell, Textfield, Button, Checkbox } from 'react-mdl';
import { translate } from 'react-i18next';
import Page from '../Page/PageComponent';

class Login extends React.Component {
  static propTypes = {
    t: PropTypes.func.isRequired
  };

  render() {
    const { t } = this.props;
    return (
      <Page heading='Login'>
        <div style={{ width: '70%', margin: 'auto' }}>
          <Grid>
            <form style={{ margin: 'auto' }}>
              <Cell col={12}>
                <Textfield onChange={() => {}} label={t('username')} />
              </Cell>
              <Cell col={12}>
                <Textfield onChange={() => {}} label={t('password')} type='password' />
              </Cell>
              <Cell col={12}>
                <Checkbox label={t('rememberMe')} ripple style={{ textAlign: 'right' }} />
              </Cell>
              <Cell col={12} style={{ textAlign: 'right' }}>
                <a href='#'>{t('forgotPassword')}</a>
                <Button primary>Login</Button>
              </Cell>
            </form>
          </Grid>
        </div>
      </Page>
    );
  }
}

export default translate()(Login);
