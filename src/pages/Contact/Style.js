import styled from 'styled-components'

export const Con = styled.div`
  /* border: 3px solid red; */
  .sub-link {
    /* border: 3px solid blue; */
    display: flex;
    font-size: 17px;
    width: 90%;
    margin: 10px auto;
    .link {
      text-decoration: none;
      color: black;
      font-weight: 600;
      :hover {
        color: #d28881;
      }
    }
    span {
      color: #d28881;
      font-weight: 600;
    }
  }
  .heading {
    /* border: 3px solid red; */
    text-align: center;
    width: 90%;
    margin: 50px auto 30px auto;
    div {
      font-size: xx-large;
      @media (max-width: 700px) {
        font-size: xx-large;
        padding: 0;
      }
    }
    p {
      font-size: x-large;
      @media (max-width: 700px) {
        padding: 0;
        margin: 10px 0;
        font-size: x-large;
      }
      @media (max-width: 500px) {
        font-size: large;
      }
    }
    span {
      @media (max-width: 700px) {
        font-size: medium;
      }
      @media (max-width: 500px) {
        font-size: 14px;
      }
    }
  }

  .contact-form {
    border: 3px solid red;
    background-color: silver;
    .form-head {
      text-align: center;
      border: 3px solid green;
      width: 50%;
      margin: 30px auto;
      @media (max-width: 1000px) {
        width: 95%;
      }
      div {
        font-size: xx-large;
      }
      p {
        font-size: large;
        opacity: 0.6;
      }
    }
    form {
      border: 3px solid blue;
      display: flex;
      flex-direction: column;
      label {
        display: flex;
        flex-direction: column;
        input {
          height: 45px;
        }
      }
    }
  }
`
