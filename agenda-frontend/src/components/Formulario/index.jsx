import axios from "axios";
import React, { useState } from "react";

export default function Formulario(props) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const criarContato = (event) => {
        event.preventDefault();

        const data = {
            "name" : name,
            "email": email
        }

        axios
            .post("http://localhost:8000/api/emailsuser/", data)
            .then(() => {
                props.funcao();
                setName("");
                setEmail("");
            })
    }

    return (
        <form className="form-card" method="post" onSubmit={criarContato}>
            <input
                className="form-card-title"
                type="text"
                name="name"
                placeholder="Name"
                onChange={ (event)=>{setName(event.target.value)} }
                value={name}
            />
            <textarea
                className="autoresize"
                name="email"
                placeholder="Email"
                onChange={ (event)=>{setEmail(event.target.value)} }
                value={email}
            ></textarea>
            <button className="btn" type="submit">Send</button>
        </form>
    );
}