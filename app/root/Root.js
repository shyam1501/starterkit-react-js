import React, { useState } from "react";
import { hot } from "react-hot-loader";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { useTranslation } from 'react-i18next';
import AppRouter from '../routes/AppRouter';
import configureStore, { history } from '../redux/store/configureStore';
import "../styles/app.scss";

const { store, persistor } = configureStore();

const App = () => {

  const [currentLang, setLocale] = useState('en');
  const { i18n } = useTranslation();

  const onLanguageHandle = (event) => {
    const newLang = event.target.value;
    setLocale(newLang);
    i18n.changeLanguage(newLang);
  };

  const renderLanguageButtons = () => {
    return (<div>
      <input
        checked={currentLang === 'en'}
        name="language"
        onChange={onLanguageHandle}
        value="en"
        type="radio" />English &nbsp;
      <input
        name="language"
        value="hi"
        checked={currentLang === 'hi'}
        type="radio"
        onChange={onLanguageHandle}
      />Hindi
    </div>);
  };


  return (
    <div className="App">
      {renderLanguageButtons()}
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppRouter history={history} />
        </PersistGate>
      </Provider>
    </div>
  );
};

export default hot(module)(App);