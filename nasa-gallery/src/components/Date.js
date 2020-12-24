import React from 'react';


const Date = (props) => {

    const onDateChange = (event) => {
        // console.log(event.target.value);
        props.getInputDate(event.target.value);
    }

    const getNewDate = (event) => {
        event.preventDefault();
    }

    return (
        <div>
            <form>
                <input type="date" onChange={event => onDateChange(event)} />
                <button onClick={event => getNewDate(event)}>Get Image</button>
            </form>
        </div>
    )
}

export default Date;
