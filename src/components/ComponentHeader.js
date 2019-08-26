import React from "react";
import { Link } from "react-router-dom";

export const FirstHeader = () => (
    <>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/users">List Users</Link>
            </li>
        </ul>
    </>
)