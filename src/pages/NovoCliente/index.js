import React, {useState, useEffect } from "react";
import {useHistory} from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function NovoCliente() {
  const history = useHistory();
  const [clientes, setClientes] = useState([]);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [complemento, setComplemento] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [cep, setCep] = useState('');
  function handleForm(e){
    e.preventDefault();
    const cliente = {
      id: clientes.length + 1,
      nome: nome,
      email: email,
      telefone: telefone,
      endereco: endereco,
      complemento: complemento,
      bairro: bairro,
      cidade: cidade,
      cep: cep,
    }
    const newClientes = [...clientes, cliente];
    setClientes(newClientes);
    setTimeout(()=>{
      history.push("/clientes");
    }, 500);
  }

  useEffect(()=>{
    if(clientes.length > 0){
      localStorage.setItem('clientes',JSON.stringify(clientes));
    }
  },[clientes]);

  useEffect(()=>{
    const client = JSON.parse(localStorage.getItem('clientes'));
    if(client && client.length > 0){
      setClientes(client);
    }
  },[]);

  return(
    <>
    <Header />
      <section>
        <h1>Cadastro de Cliente</h1>
        <div className="content_wrapper">
          <form onSubmit={handleForm}>
            <fieldset>
              <label htmlFor="nome">Nome: </label>
              <input type="text" id="nome" inputMode="text"  
                value={nome} 
                onChange={e => setNome(e.target.value)} 
                placeholder="Nome Completo" 
                required
              />
            </fieldset>
            <div className="field-group">
              <fieldset>
                <label htmlFor="email">E-mail: </label>
                <input type="email" id="email" 
                  value={email} 
                  onChange={e => setEmail(e.target.value)} 
                  placeholder="xxxx@xxxxx"
                />
              </fieldset>
              <fieldset>
                <label htmlFor="telefone">Telefone: </label>
                <input type="phone" id="telefone" value={telefone} 
                  onChange={e => setTelefone(e.target.value)} 
                  placeholder="xx xxxxx-xxxx"
                  required 
                />
              </fieldset>
            </div>
            <fieldset>
              <label htmlFor="endereco">Endereço: </label>
              <input type="text" id="endereco" inputMode="text"  
                value={endereco} 
                onChange={e => setEndereco(e.target.value)} 
                placeholder="Rua" 
                required
              />
            </fieldset>
            <div className="field-group">
              <fieldset>
                <label htmlFor="bairro">Bairro: </label>
                <input type="text" id="bairro" inputMode="text"  
                  value={bairro} 
                  onChange={e => setBairro(e.target.value)} 
                  placeholder="xxxxxx" 
                  required
                />
              </fieldset>
            </div>
            <div className="field-group">
              <fieldset>
                <label htmlFor="cep">CEP: </label>
                <input type="text" id="cep" inputMode="text"  
                  value={cep} 
                  onChange={e => setCep(e.target.value)} 
                  placeholder="12345-678" 
                  required
                />
              </fieldset>
            </div>
            <fieldset>
              <button type="submit">Finalizar Cadastro</button>
            </fieldset>
          </form>
        </div>
      </section>
    <Footer />
    </>
  );
}

export default NovoCliente;