// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import { Grid, TextField, withStyles, Button } from 'material-ui';
import Card, { CardContent, CardMedia } from 'material-ui/Card';

const styles = theme => ({
  root: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    padding: 0,
    margin: 0,
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    padding: '50px'
  },
  cardImage: {
    height: '85px',
    width: 'auto'
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
  }
});

class Login extends Component {
  static propTypes = {
    t: PropTypes.func.isRequired
  };
  render() {
    const { t } = this.props;
    const classes = this.props.classes;
    const imageUrl = require(`../../assets/images/logo-150px.png`);
    return (
      <Grid
      container
      className={classes.root}
      align='center'
      justify='center'>
        <Grid item xs={12}> 
          <Grid
            container
            align='center'
            direction='column'
            justify='center'
            >
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardImage}
                image={imageUrl}
                title="Sigalei"
              />
              <CardContent
                className={classes.cardContent}
              >
                <TextField
                    label="Email"
                    id="margin-none"
                />
                <TextField
                    label="Senha"
                    id="margin-none"
                />
                <Button href="#flat-buttons" className={classes.button}>
                  Esqueceu a senha?
                </Button>
                <Button raised color="primary" className={classes.button}>
                  Entrar
                </Button>
                <p>Não tem conta?</p>
                <Button raised className={classes.button}>
                  Crie uma agora!
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default translate()(withStyles(styles)(Login));