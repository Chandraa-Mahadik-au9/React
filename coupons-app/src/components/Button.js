import React from 'react';


const Button = (props) => {

    let buttonStyle = {
        width: '6.5rem',
        height: '2.5rem',
        margin: '0.5rem',
        fontSize: 'medium',
        // margin: '0.5rem',
        border: 'none',
        borderRadius: '0.2rem',
        cursor: 'pointer'
    }

    switch (props.type) {
        case('primary'):
            buttonStyle = {
                ...buttonStyle,
                backgroundColor: '#023e8a',
                color: 'white'
            }
            break;
        case('bordered'):
            buttonStyle = {
                ...buttonStyle,
                backgroundColor: 'transparent',
                border: '2px solid #023e8a',
                color: '#023e8a'
            }
            break;
        default:
            buttonStyle = {
                width: '6.5rem',
                height: '2.5rem'
            }    
    }

    return (
        <React.Fragment>
           <button style={buttonStyle}>{props.title}</button> 
        </React.Fragment>
    )
}

export default Button;