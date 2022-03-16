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
`
