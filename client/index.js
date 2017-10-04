// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { translate } from 'react-i18next';
import Root from './root';
import i18next from './i18n';

const rootNode = document.createElement('div');

translate.setI18n(i18next);
translate.setDefaults({
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
