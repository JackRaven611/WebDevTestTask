import styled from "styled-components";

export const ItemListStyled = styled.section`
  width: 75%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  line-height: 1.1rem;

  .item {
    background-color: #ffffff;
    width: 32%;
    max-width: 30rem;
    display: flex;
    border-radius: 1rem;
    margin-bottom: 2rem;

    ul {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      li {
        width: 100%;

        p {
          font-weight: 200;
        }
      }

      .itemImg {
        overflow: hidden;
        display: flex;
        justify-content: center;
        padding: 2rem 0 1rem 0;
        img {
          max-height: 15rem;
          object-fit: contain;
        }
      }

      .itemName {
        display: flex;
        margin: 0 0 1.5rem 2rem;
        h2 {
          width: 65%;
          text-align: left;
          font-size: 1rem;
          font-weight: 500;
        }
      }

      .itemParameters {
        display: flex;
        width: 90%;
        gap: 0.2rem;
        flex-wrap: wrap;

        b {
          display: flex;
          justify-content: flex-start;
          text-align: left;
        }
      }

      .itemEnergyClass {
        margin: 1rem 0;
        display: flex;
        height: auto;
        width: 90%;

        text-align: left;

        p {
          width: 40%;
        }

        div {
          background-color: #009949;
          padding: 0 0 0 0.3rem;
          width: 2rem;
          height: 1rem;
          position: relative;
          color: white;
          font-weight: 600;
          display: inline-block;
          margin-right: 0.5rem;
          border-radius: 0.1rem;
        }

        div::after {
          content: "";
          position: absolute;
          right: -0.35rem;
          top: 50%;
          transform: translateY(-52%);
          width: 0;
          height: 0;
          border-top: 0.5rem solid transparent;
          border-bottom: 0.5rem solid transparent;
          border-left: 0.4rem solid #009949;
        }
      }
    }

    .itemPriceDate {
      display: flex;
      gap: 0.2rem;
      width: 90%;
    }

    .itemPrice {
      width: 90%;
      display: flex;
      height: 2rem;
      font-size: 2.5rem;
      font-weight: 400;
      align-self: center;
      line-height: 2rem;

      div {
        line-height: 1rem;
        height: 2rem;
        font-size: 0.8rem;
        display: flex;
        flex-direction: column;
      }
    }

    .itemButton {
      display: flex;
      justify-content: center;
    }
  }
`;
