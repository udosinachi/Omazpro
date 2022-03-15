import styled from 'styled-components'

export const Sub = styled.div`
  /* border: 3px solid red; */
  text-align: center;
  margin-bottom: 50px;
  .header {
    font-size: xx-large;
    margin: 40px 0;
  }

  .sub-div {
    /* border: 3px solid blue; */
    width: 95%;
    margin: auto;
    display: flex;
    @media (max-width: 1027px) {
      flex-wrap: wrap;
    }
  }
`
export const Cards = styled.div`
  border: none;
  width: 25%;
  background: ${(props) => props.background};
  @media (max-width: 1027px) {
    width: 50%;
  }
  @media (max-width: 770px) {
    width: 100%;
  }
  img {
    width: 100%;
    @media (max-width: 1027px) {
      height: 300px;
      object-fit: cover;
    }
  }
  .text-div {
    text-align: center;
    margin-bottom: 30px;
    h3 {
      font-size: x-large;
    }
    button {
      border: 2px solid black;
      background: none;
      width: 100px;
      height: 40px;
      font-size: medium;
    }
  }
`
