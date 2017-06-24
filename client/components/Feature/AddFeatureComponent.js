// @flow
import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from 'react-dropdown';
import { Grid, Cell, Button } from 'react-mdl';
import Page from '../Page/PageComponent';
import AddFeatureMutation from './AddFeatureMutation';

const options = [
  { value: 'none', label: 'Please select a feature' },
  { value: 'nodejs', label: 'Node.js' },
  { value: 'html', label: 'HTML5' },
  { value: 'css', label: 'CSS3' },
];

const inputData = {
  nodejs: { name: 'Nodejs', url: 'https://nodejs.org', description: 'Node.js® is a JavaScript runtime built on Chrome\'s V8 JavaScript engine' },
  html: { name: 'Html5', url: 'https://www.w3.org/TR/html5/', description: '5th major revision of the core language of the World Wide Web' },
  css: { name: 'css', url: 'https://www.w3.org/Style/CSS/Overview.en.html', description: 'Cascading Style Sheets (CSS) is a simple mechanism for adding style to Web documents.' }
};

export default class AddFeature extends React.Component {
  static propTypes = {
    viewer: PropTypes.object.isRequired,
    relay: PropTypes.object.isRequired,
  };

  state = {
    form: {
      dropdown: options[0]
    }
  }

  onSelect = (e: {label: string, value: string}) => {
    this.setState({ form: { dropdown: e } });
  }

  addFeature = () => {
    const value = this.state.form.dropdown.value;
    if (value === 'none') {
      return;
    }
    AddFeatureMutation.commit(
      this.props.relay.environment,
      inputData[value],
      this.props.viewer.id,
    );
  }

  render() {
    return (
      <Page heading='Add a Feature'>
        <Grid>
          <Cell col={9}>
            <Dropdown options={options} onChange={this.onSelect.bind(this)} value={this.state.form.dropdown} />
          </Cell>
          <Cell col={3} style={{ textAlign: 'center' }}>
            <Button raised accent onClick={this.addFeature.bind(this)}>Add Feature</Button>
          </Cell>
        </Grid>
      </Page>
    );
  }
}
