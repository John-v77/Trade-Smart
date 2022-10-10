import React from 'react';

function ChangeColor(props) {
    let colorCode
    if (props.number > 0) {  colorCode = 'green'}
    else{ colorCode = 'red'}


    return (
        <span style={{ color: `${colorCode}` }}>
            {props.number}{props.type}
        </span>
    );
}

export default ChangeColor;