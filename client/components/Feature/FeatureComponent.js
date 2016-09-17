/* eslint-disable global-require */
import React from 'react';
import { Grid, Cell, Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';
import Page from '../Page/PageComponent';
import styles from './Feature.scss';
import AddFeature from './AddFeatureComponent';

export default class Feature extends React.Component {
  static propTypes = {
    viewer: React.PropTypes.object.isRequired
  };

  render() {
    return (
      <div>
        <Page heading='Integrated with'>
          <Grid>
            {this.props.viewer.features.edges.map((edge) => {
              const imageUrl = require(`../../assets/${edge.node.name.toLowerCase()}.png`);
              return (
                <Cell col={4} key={edge.node.id}>
                  <Card className={styles.card}>
                    <CardTitle expand className={styles.image} style={{ backgroundImage: `url(${imageUrl})` }} />
                    <CardActions className={styles.name}>
                      <Button colored href={edge.node.url}>{edge.node.name}</Button>
                    </CardActions>
                    <CardText className={styles.description}>
                      {edge.node.description}
                    </CardText>
                  </Card>
                </Cell>
              );
            })}
          </Grid>
        </Page>
        <AddFeature viewer={this.props.viewer} />
      </div>
    );
  }
}
