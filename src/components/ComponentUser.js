import React from "react";

// Qual a diferença de criar um componente como constante ou como função ?
export const User = (props) => (
    <>
        <h1>User name is: {props.match.params.name}</h1>
    </>
)