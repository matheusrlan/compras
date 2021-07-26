import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  a{
    text-decoration: none;
    color: white;
    font-family: 'Arial', sans-serif;
    transition: color .5s ease-in-out;
    &:hover{
      color: black;
    }
  }
  body{
    background-image: url("https://images.unsplash.com/photo-1625895197185-efcec01cffe0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80");
    background-size: cover;
  }

  main{
    display: flex;
    flex-direction: column;
    width: 80vw;
    margin: 0 auto;
    font-family: 'Arial', sans-serif;
  }

  section{
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 20px 0;
    
    & h1{
      font-size: 1.5rem;
      font-weight: 400;
      color: white;
    }

    & h2{
      font-size: 1.1rem;
      font-weight: 400;
      padding: 10px 0;
    }

    & p{
      padding: 20px 0;
      font-size: 1.5rem;
      color: white;
    }

    form{
      color: white;
      padding: 20px 0;
      margin: 80px 0 0 60%;
      background: black;
      border-radius: 20px;

      & fieldset{
        justify-content: flex-start;
        text-align: left;
        gap: 10px;
        padding: 10px;
        border: none;

        & label{
          font-weight: 500;
          font-size: 1rem;
        }
        & input, select, textarea{
          height: 35px;
          padding-left: 5px;
          font-size: 1rem;
          width: 100%;
          border-radius: 20px;
        }
        & textarea{
          height: initial;
        }

        & button{
          padding: 10px 0;
          width: 200px;
          margin-left: 28%;
          align-items: center;
          text-align: center;
          text-transform: uppercase;
          background: red;
          color: #fff;
          border: none;
          cursor: pointer;
          border-radius: 20px;
        }

      }
      @media(max-width: 768px){
        width: 100%;
      }
      .field-group{
        display: flex;
        justify-content: space-between;
        & select{
          width: 150px;
        }

        @media(max-width: 768px){
          flex-direction: column;

          & select{
            width: 100%;
          }
        }
      }
      .button-group{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;

        & button{
          padding: 10px 15px;
        }
      }
    }
    .content_wrapper{
      display: flex;
      width: 100%;
      margin: 10 auto;
    }

    .content{
      display: flex;
      width: 400px;
      margin: 0 auto;

      @media(max-width: 768px){
        width: 90vw;
      }
    }
    .items_wrapper{
      width: 100%;
    }
    .lista{
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 10px;

      @media(max-width: 768px){
        justify-content: center;
      }
    }
    .lista_item{
      display: flex;
      flex-direction: column;
      gap: 10px;
      justify-content: space-around;
      align-items: center;
      padding: 10px;
      background: #f2f2f2;
      margin-top: 5px;
      width: 200px;
      & a{
        background: #2cdc7e;
        color: #fff;
        padding: 5px;
      }
      & span{
        display: block;
        font-size: .9rem;
        font-weight: 500;
      }
    }
    
    .alert{
      width: 400px;
      border: 2px solid #000;
      padding: 10px 15px;
      text-align: center;
      background: #fff;
      margin: 10px;
      border-radius: 20px;
    }

    .novo_produto{
      display: block;
      width: 200px;
      padding: 10px 15px;
      text-align: center;
      background: black;
      color: #fff;
      margin-bottom: 5px;
      border-radius: 20px;
      margin-left: 100px;
    }
  }

  @media(max-width: 768px){
    main{
      width: 90vw;
    }
  }
`;