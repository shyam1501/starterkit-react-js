import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
    const { handleClick, label } = props;
    return (
        <button className="button" onClick={handleClick} type="button"> {label} </button>
    );
};

Button.propTypes = {
    handleClick: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired
};

export default Button;