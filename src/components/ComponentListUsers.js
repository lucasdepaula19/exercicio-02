import React from "react";
import { Link } from 'react-router-dom';

let usuarios = [
    { name: 'joao', email: 'joao@email.com', age: 32 },
    { name: 'pedro', email: 'edro@email.com', age: 33 },
    { name: 'lucas', email: 'lucas@email.com', age: 34 },
    { name: 'tata', email: 'tata@email.com', age: 35 },
    { name: 'antonio', email: 'antonio@email.com', age: 33 },
    { name: 'jose', email: 'jose@email.com', age: 64 },
    { name: 'vera', email: 'vera@email.com', age: 63 },
    { name: 'luciano', email: 'luciano@email.com', age: 64 },
    { name: 'luma duarte', email: 'luma@email.com', age: 63 }
];

export class ListUsers extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: usuarios,
            searchResult: usuarios,
        }
        this.search = this.filter.bind(this);
    }

    del(e, param) {
        let users = this.state.list;

        for (var i = 0; i < users.length; i++) {
            if (users[i].name === param) {
                users.splice(i, 1);
            }
        }
        this.setState({ users });
        e.preventDefault();
    }

    filter(evt) {
        let value = evt.target.value;
        let usersList = this.state.list;
        let searchResult = [];
        searchResult = usersList.filter((userFilter) => {
            return userFilter.name.toLowerCase().search(value) !== -1;
        });
        this.setState({ searchResult });
    }

    viewForm() {
        return this.state.searchResult.map((usuarios) => {
            const { name, email, age } = usuarios
            return (
                <tr>
                    <td>
                        <Link to={'/users/' + name}>{name}</Link>
                        <button onClick={(e) => this.del(e, name)}>Delete</button>
                    </td>
                    <td>{email}</td>
                    <td>{age}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <>
                <input type="text" placeholder="Search" onChange={this.search} />
                <div>
                    <h2>Users table</h2>
                    <table id='users' className="formatTable">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.viewForm()}
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}