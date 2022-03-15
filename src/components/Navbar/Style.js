import styled from 'styled-components'

export const Nav = styled.div`
  background: black;
  opacity: 0.9;
  /* position: fixed; */
  width: 100%;
  z-index: 100;
  overflow: hidden;
  .bar {
    /* border: 3px solid red; */
    background: black;
    opacity: 0.9;
    box-shadow: none;
    width: 100%;
    /* margin: auto; */
    height: 150px;
    .oma {
      font-size: 36px;
    }
  }
  .link-div {
    display: flex;
    justify-content: space-between;
    align-content: flex-start;
    width: 45%;
    margin: auto;
    flex-wrap: wrap;
    /* border: 3px solid red; */
    @media (max-width: 1000px) {
      width: 65%;
    }
    @media (max-width: 700px) {
      width: 75%;
    }
    @media (max-width: 550px) {
      width: 90%;
    }
    .link {
      color: white;
      text-decoration: none;
      font-size: 22px;
      margin-right: 10px;
    }
  }
`
