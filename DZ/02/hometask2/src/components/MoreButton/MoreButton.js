
import React from 'react';
import PropTypes from 'prop-types';

const MoreButton = (props) => {
    console.log(props)
    const {background, color, fontSize} = props
    return (
        <button style={{background, color, fontSize }}  onClick={props.onClick}>MORE</button>
    );
    
 
};
MoreButton.prototype = {
    background: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func.isRequired
};
MoreButton.defaultProps = {
    background: 'black',
    color: 'white',
    fontSize: '20px',
};

export default MoreButton;