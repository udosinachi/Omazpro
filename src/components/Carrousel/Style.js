import styled from 'styled-components'

export const Caro = styled.div`
  border: 3px solid red;
  height: 100vh;
  background-image: url('/images/oma3.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.45);
  background-blend-mode: overlay;
  .caro-text-div {
    border: 3px solid red;
    width: 70%;
    margin: auto;
    div {
      font-size: 40px;
    }
    p {
      font-size: large;
    }
    button {
      border: 4px solid black;
      background: none;
      width: 200px;
      height: 40px;
      font-size: medium;
      margin-top: 20px;
    }
  }
`
