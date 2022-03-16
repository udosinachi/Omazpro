import styled from 'styled-components'

export const Caro = styled.div`
  /* border: 3px solid red; */
  height: 100vh;
  background-image: url('/images/oma3.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.75);
  background-blend-mode: overlay;
  @media (max-width: 1027px) {
    height: 60vh;
  }
  .caro-text-div {
    /* border: 3px solid red; */
    width: 1000px;
    margin: auto;
    @media (max-width: 1027px) {
      width: 90%;
    }
    div {
      font-size: 40px;
      @media (max-width: 1000px) {
        font-size: 25px;
      }
    }
    p {
      font-size: large;
      @media (max-width: 1000px) {
        font-size: medium;
      }
    }
    button {
      border: 4px solid black;
      background: none;
      width: 200px;
      height: 50px;
      font-size: medium;
      margin-top: 20px;
    }
  }
`
