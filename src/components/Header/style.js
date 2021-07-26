import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px ;

  & nav{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 20px;
    gap: 10px;
  }

  @media(max-width: 768px){
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    margin: 0 auto;
    gap: 20px;
  }
`