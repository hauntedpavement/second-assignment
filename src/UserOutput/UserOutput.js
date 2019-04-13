import React from 'react';

const useroutput = (props) => {
        return (
            <div>
                <p> i am useroutput <br>
                </br> my child is {props.children} <br>
                </br>cmpn name is {props.name} and color {props.color} </p>
            </div>
        )
    };
    
export default useroutput;