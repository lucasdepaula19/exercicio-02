import React from "react";
import { Link } from 'react-router-dom';

export class ListUsers extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            usuarios: [
                { name: 'joao', email: 'joao@email.com', age: 32 },
                { name: 'pedro', email: 'edro@email.com', age: 33 },
                { name: 'lucas', email: 'lucas@email.com', age: 34 },
                { name: 'tata', email: 'tata@email.com', age: 35 },
                { name: 'antonio', email: 'antonio@email.com', age: 33 },
                { name: 'jose', email: 'jose@email.com', age: 64 },
                { name: 'vera', email: 'vera@email.com', age: 63 }
            ]
        }
    }

    viewForm() {
        function del(e, param) {
            e.preventDefault();
            console.log(param);
            for(var i=0 ; i < this.state.usuarios.length; i++) {
            
                //console.log(this.usuarios[i].value);
                // if(this.usuarios[i].value==param)
                //     this.usuarios.splice(i);
                // console.log(this.usuarios[i]);
            }
        }

        return this.state.usuarios.map((usuarios, index) => {
            const { name, email, age } = usuarios
            return (
                <tr>
                    <td>
                        <Link to={'/users/' + name}>{name}</Link>
                        <button onClick={(e) => del(e, name)}>Delete</button>
                    </td>
                    <td>{email}</td>
                    <td>{age}</td>
                </tr>
            )
        })
    }

    render() {
        const nome = this.props.match.params.name;
        if (nome) {
            return (<div><busca /><h1 id='title'>{nome}</h1></div>)
        } else {
            return (
                <>
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
}