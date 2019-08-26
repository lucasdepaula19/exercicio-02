import React from "react";

export const User = (props) => (
    <>
        <h1>User name is: {props.match.params.name}</h1>
    </>
)