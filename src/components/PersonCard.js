import React, {useState} from 'react';

const PersonCard = (props) => {
    const {firstName, lastName, age, color} = props;
    const [state, setState] = useState({
        clickCount: age
    });
    const handleClick = () => {
        setState({
            clickCount: state.clickCount + 1
        });
    }
    return(
        <div>
            <h2>{lastName}, {firstName}</h2>
            <p> Age: {state.clickCount}</p>
            <p> Hair Color: {color} </p>
            <button onClick={handleClick}>Birthday Button for {firstName} {lastName}</button>
        </div>
    );
}
export default PersonCard;