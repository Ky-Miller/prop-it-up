import React from 'react';

const PersonCard = (props) => {
    const {firstName, lastName, age, color} = props;
    return(
        <div>
            <h2>{lastName}, {firstName}</h2>
            <p> Age: {age}</p>
            <p> Hair Color: {color} </p>
        </div>
    );
}
export default PersonCard;