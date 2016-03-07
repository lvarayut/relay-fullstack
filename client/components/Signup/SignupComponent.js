import React from 'react';
import {Grid, Cell, Textfield, Button} from 'react-mdl';

export default class Signup extends React.Component {
  render() {
    return (
      <div>
        <h1>Signup</h1>
        <hr />
        <div style={{width: '70%', margin: 'auto'}}>
          <Grid>
            <form style={{margin: 'auto'}}>
              <Cell col={12}>
                <Textfield onChange={() => {}} label='Username'/>
              </Cell>
              <Cell col={12}>
                <Textfield onChange={() => {}} label='Password'/>
              </Cell>
              <Cell col={12} style={{textAlign: 'right'}}>
                <Button primary>Sign up</Button>
              </Cell>
            </form>
          </Grid>
        </div>
      </div>
    );
  }
}
