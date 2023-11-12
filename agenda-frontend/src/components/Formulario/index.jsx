import axios from "axios";
import React, { useState } from "react";
import "./index.css";

export default function Formulario() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const criarContato = (event) => {
        event.preventDefault();
        const data = { name, email };

        axios.post("http://localhost:8000/api/emailsuser/", data, {
            headers: { 'Content-Type': 'application/json' }
        })
        .then(() => {
            setName("");
            setEmail("");
            alert("Contato criado com sucesso!");
        })
        .catch(error => {
            if (error.response && error.response.data) {
                alert(error.response.data); // Mostra a mensagem do backend
            } else {
                console.error("Erro ao enviar formulário:", error);
                alert("Erro ao enviar formulário.");
            }
        });
    };

    return (
        <form className="form-card" onSubmit={criarContato}>
            <input
                className="form-card-title"
                type="text"
                placeholder="Name"
                onChange={e => setName(e.target.value)}
                value={name}
            />
            <textarea
                className="autoresize"
                placeholder="Email"
                onChange={e => setEmail(e.target.value)}
                value={email}
            ></textarea>
            <button className="btn" type="submit">Send</button>
        </form>
    );
}
