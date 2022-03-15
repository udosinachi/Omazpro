import styled from 'styled-components'

export const Welcame = styled.div`
  /* border: 3px solid yellow; */
  .welcome-div {
    /* border: 3px solid blue; */
    width: 95%;
    margin: auto;
    display: flex;
    position: relative;
    @media (max-width: 750px) {
      display: block;
    }
    .image-div {
      /* border: 3px solid red; */
      width: 50%;
      @media (max-width: 1050px) {
        width: 50%;
      }
      @media (max-width: 750px) {
        width: 100%;
      }
      img {
        width: 650px;
        @media (max-width: 1050px) {
          width: 100%;
          height: 400px;
          /* object-fit: cover; */
        }
        @media (max-width: 750px) {
          width: 100%;
          height: 250px;
          object-fit: cover;
        }
      }
    }
    .text-div {
      /* border: 3px solid pink; */
      padding: 60px;
      background: white;
      @media (max-width: 1300px) {
        padding: 40px;
      }
      @media (max-width: 1250px) {
        padding: 20px;
      }
      @media (max-width: 1050px) {
        padding: 0 20px;
        width: 50%;
      }
      @media (max-width: 750px) {
        width: 90%;
        margin: auto;
      }
      span {
        font-size: 50px;
        @media (max-width: 1050px) {
          font-size: 25px;
        }
      }
      p {
        font-size: x-large;
        @media (max-width: 1050px) {
          font-size: medium;
        }
      }
    }
  }
`
