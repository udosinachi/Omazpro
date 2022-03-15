import styled from 'styled-components'

export const Sub = styled.div`
  /* border: 3px solid red; */
  text-align: center;
  .header {
    font-size: xx-large;
    margin: 40px 0 !important;
  }

  .sub-div {
    /* border: 3px solid blue; */
    width: 95%;
    margin: auto;
    display: flex;
  }
`
export const Cards = styled.div`
  border: none;
  width: 25%;
  background: ${(props) => props.background};
  img {
    width: 100%;
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
