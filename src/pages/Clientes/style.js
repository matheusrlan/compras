import styled from "styled-components";

export const ListItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  padding: 10px;
  width: 400px;
  text-align: left;
  box-sizing: border-box;
  background: white;
  border-radius: 20px;
  & .titulo, .descricao{
    grid-column: 1 / -1;
  }
  & .remove{
    
    & button{
      background: black;
      color: #fff;
      font-size: 1.1rem;
      border-radius: 10px;
      padding: 10px;
      cursor: pointer;
    }
  }
  & span{
    display: block;
    padding: 5px;
    font-weight: 500;
    font-size: .9rem;
  }
`