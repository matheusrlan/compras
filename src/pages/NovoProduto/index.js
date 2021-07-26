import React, {useState, useEffect } from "react";
import {useHistory} from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function NovoProduto() {
  const [produtos, setProdutos] = useState([]);
  const [nome, setNome] = useState('');
  const [categoria, setCategoria] = useState('Tecnologia');
  const [valor, setValor] = useState(0);
  const [quantidade, setQuantidade] = useState(0);

  const history = useHistory();

  function handleForm(e){
    e.preventDefault();
    const produto = {
      id: produtos.length + 1,
      nome: nome,
      categoria: categoria,
      valor: valor,
      quantidade: quantidade,
    };
    const newProdutos = [...produtos, produto];
    setProdutos(newProdutos);
    setTimeout(()=>{
      history.push("/produtos");
    }, 500);
   
  }

  useEffect(()=>{
    if(produtos.length > 0){
      localStorage.setItem('produtos',JSON.stringify(produtos));
    }
  },[produtos]);

  useEffect(()=>{
    const prod = JSON.parse(localStorage.getItem('produtos'));
    if(prod && prod.length > 0){
      setProdutos(prod);
    }
  },[]);

  return (
    <>
    <Header />
      <section>
        <h1>Cadastro de Produto</h1>
        <div className="content_wrapper">
          <form onSubmit={handleForm}>
            <fieldset>
              <label htmlFor="nome">Nome: </label>
              <input type="text" id="nome" inputMode="text"  
                value={nome} 
                onChange={e => setNome(e.target.value)} 
                placeholder="Personagem" 
                required
              />
            </fieldset>
            <div className="field-group">
              <fieldset>
                <label htmlFor="categoria">Categoria: </label>
                <select id="categoria" value={categoria} onChange={e => setCategoria(e.target.value)} >
                  <option value="Anime">Animes</option>
                  <option value="Filme">Filme</option>
                  <option value="Jogos">Jogos</option>
                </select>
              </fieldset>
              <fieldset>
                <label htmlFor="valor">Valor: </label>
                <input type="number" id="valor" value={valor} 
                  onChange={e => setValor(e.target.value)} 
                  required 
                />
              </fieldset>
              <fieldset>
                <label htmlFor="quantidade">Quantidade: </label>
                <input type="number" id="valor" 
                  value={quantidade} 
                  onChange={e => setQuantidade(e.target.value)} 
                  required
                />
              </fieldset>
            </div>
            <fieldset>
              <button type="submit">enviar</button>
            </fieldset>
          </form>
        </div>
      </section>
    <Footer />
    </>
  );
}