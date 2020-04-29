/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import Loadable from "react-loadable";

const LoadApp = Loadable({
    loader: () => import("./Root"),
    loading() {
        return <div>Loading...</div>;
    },
    render(loaded, props) {
        const Root = loaded.default;
        return <Root {...props} />;
    },
    timeout: 10000 // 10 seconds
});

export default props => (<LoadApp {...props} />);