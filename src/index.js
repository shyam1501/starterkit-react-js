/* eslint-disable global-require */
import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from "react-i18next";
import LoadableApp from "./root/LoadableApp";
import * as serviceWorker from './serviceWorker';
import i18n from "./i18n";
import initAnalytics from './analytics';

initAnalytics({
  debug: true
});

const rootId = document.getElementById('root');

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <LoadableApp />
  </I18nextProvider>,
  rootId
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

if (module.hot && process.env.NODE_ENV === "development") {
  module.hot.accept("./root/LoadableApp", () => {
    const NextApp = require("./root/LoadableApp").default;
    ReactDOM.render(
      <I18nextProvider i18n={i18n}>
        <NextApp />
      </I18nextProvider>,
      rootId);
  });
}
