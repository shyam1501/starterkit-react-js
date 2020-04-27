import ReactGA from 'react-ga';

export default (config) => ReactGA.initialize(process.env.GA_TRACKING_ID, config);

export const trackPageView = location => ReactGA.pageview(location);

export const trackEvent = (category, action, label, value) => {
    const params = { category, action };

    if (label) {
        params.label = label;
    }

    if (value) {
        params.value = value;
    }

    return ReactGA.event(params);
};