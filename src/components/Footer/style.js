import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 125px;
  width: 35rem;
  padding: 10px 0;
  margin-top: 40px;
  margin-left: 31%;
  color: white;
  
  & nav{
    display: flex;
    gap: 10px;
    justify-content: space-between;

    & a{
      font-size: 2rem;
    }
  }
  .copy{
    font-size: .875rem;
  }
  
  background-image: url("https://assets.website-files.com/5ff79f3ebebf6b12f6b7747f/5ffe04fc6284b7e90070d985_logo-gama-academy.png");

  @media(max-width: 1200px){
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    text-align: center;
    min-height: 20px;
    margin-top: 10px;
  }
`