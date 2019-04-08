import React from 'react';

// class userinput extends Component {

const userinput = (props) => {
    return <p> {props.children} i am userinput cmpt and the dynamic age is {Math.floor(Math.random() * 10)} <br />
        username passed down to me from app.js is {props.username} </p >

};

export default userinput;