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
    width: 45%;
    margin: auto;
    /* border: 3px solid red; */
    .link {
      color: white;
      text-decoration: none;
      font-size: 22px;
    }
  }
`
