import styled from 'styled-components'

export const Comm = styled.div`
  /* border: 3px solid red; */
  text-align: center;
  margin-bottom: 50px;
  .header {
    font-size: xx-large;
    margin: 40px 0;
    @media (max-width: 1000px) {
      font-size: x-large;
    }
  }
  .comment-div {
    /* border: 3px solid green; */
    width: 90%;
    margin: auto;
    .comment-sub-div {
      img {
        width: 200px;
        height: 200px;
        border-radius: 50%;
      }
      .quote-icon {
        .icon {
          font-size: 50px;
        }
      }
      .text-div {
        p {
          font-size: 19px;
        }
        h3 {
          font-size: 20px;
        }
      }
    }
  }
`
