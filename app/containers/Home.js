/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

import Button from "../components/Button";
import { HomeActions } from '../redux/actions';
import { trackPageView, trackEvent } from '../analytics';

export default (props) => {
    const { t } = useTranslation();
    const countFromStore = useSelector(
        state => state.home.count
    );

    const [counter, setCount] = useState(countFromStore || 0);
    const dispatch = useDispatch();

    useEffect(() => {
        trackPageView(props.location.pathname);
        dispatch(HomeActions.setUniqueId());
    }, []);

    const incrementCount = () => {
        setCount(counter + 1);
    };

    const saveToStore = () => {
        trackEvent("home", "click");
        dispatch(HomeActions.setCount(counter));
    };

    return (
        <div className="home-container">
            <Helmet>
                <title>Home Page</title>
                <meta name="description" content="Place to increase counter" />
            </Helmet>
            <h1 className="home-container__title" onClick={incrementCount}>{`${t("HOME_PAGE.title")} : ${counter}`}</h1>
            <Button handleClick={saveToStore} label={t("HOME_PAGE.buttonText")} />
        </div>
    );
};