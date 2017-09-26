// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { translate } from 'react-i18next';
import '../node_modules/react-mdl/extra/material';
import Root from './root';
import i18next from './i18n';

const rootNode = document.createElement('div');

translate.setI18n(i18next);
translate.setDefaults({
  wait: false,
  withRef: false,
  bindI18n: 'languageChanged loaded',
  bindStore: 'added removed',
  nsMode: 'default',
  translateFuncName: 't'
});

if (document.body) {
  document.body.appendChild(rootNode);
}

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootNode
  );
};

render(Root);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./root', () => {
    render(Root);
  });
}
