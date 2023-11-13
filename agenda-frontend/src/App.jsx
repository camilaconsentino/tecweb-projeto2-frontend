import { useEffect, useState } from "react";
import axios from "axios";
import Formulario from "./components/Formulario"; 
import "./App.css";



function App() {
  //const [contatos, setContatos] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");


  // const carregaContatos = () => {
  //   axios
  //   .get("http://localhost:8000/api/emailsuser/")
  //   .then((res) => setContatos(res.data));
  // }

  // useEffect(() => {
  //   carregaContatos();

  // }, []);

  const criarContato = (event) => {
    event.preventDefault();

    var data = {
        "name" : name,
        "email": email
    }

    axios
        .post("http://localhost:8000/api/emailsuser/", data=data)
        .then(() => {
            props.funcao();
            setName("");
            setEmail("");
        })

}

 // console.log(contatos);

  return (
    <div className="App">

      <div>
        <meta charSet="UTF-8" />
        <title>YOGA</title>
      </div>

      <div>
        <div className="appbar">
          
        <img src='/logo-yoga.png' />
        <h1 className="pag">Página de cadastro</h1>
        </div>
      </div>
    
      <Formulario  funcao={criarContato}/>

    </div>
  );
}

export default App;