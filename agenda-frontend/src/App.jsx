import { useEffect, useState } from "react";
import axios from "axios";
import Formulario from "./components/Formulario"; 
import "./App.css";

function App() {
  const [contatos, setContatos] = useState([]);

  const carregaContatos = () => {
    axios
    .get("http://localhost:8000/api/emailsuser/")
    .then((res) => setContatos(res.data));
  }

  useEffect(() => {
    carregaContatos();
  }, []);

  console.log(contatos);

  return (
    <div className="App">
      
      <img src='/logo-yoga.png' />
      <Formulario  funcao={carregaContatos}/>

    </div>
  );
}

export default App;