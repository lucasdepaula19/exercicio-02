import React from "react";

export const ListUsers = () => (
    <>
        <table class="formatTable">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Jill</td>
                    <td>Smith@email.com</td>
                    <td>50</td>
                </tr>
                <tr>
                    <td>Eve</td>
                    <td>Jackson@email.com</td>
                    <td>94</td>
                </tr>
            </tbody>
        </table>
    </>
)