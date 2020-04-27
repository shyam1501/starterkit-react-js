import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

import Button from "../components/Button";
import { AuthActions } from '../redux/actions';

export default props => {
    const { t } = useTranslation();
    const isAuthorized = useSelector(
        state => state.auth.isAuthorized
    );
    const dispatch = useDispatch();

    useEffect(() => {
        if (isAuthorized) {
            props.history.push("/");
        }
    }, [isAuthorized, props]);

    const handleClick = () => {
        dispatch(AuthActions.initAuth());
    };

    return (
        <div className="login-container">
            <Helmet>
                <title>Login Page</title>
                <meta name="description" content="Login to continue" />
            </Helmet>
            <h1 className="login-container__title">{t("LOGIN_PAGE.title")}</h1>
            <Button handleClick={handleClick} label={t("LOGIN_PAGE.buttonText")} />
        </div>
    );
};