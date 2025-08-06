import styled from "styled-components";

export const StyledNav = styled.nav`
  width: 73%;
  margin: 3rem 0 0 0;

  .search {
    border: none;
    height: 2rem;
    width: 15rem;
    padding: 0 0.5rem;
  }

  .filters {
    margin: 1rem 0;
    display: flex;
    justify-content: space-between;
    li {
      text-align: left;
      width: 23%;
      display: flex;
      flex-direction: column;

      select {
        border: none;
        padding: 0.5rem;
        background-color: #fff;

        option {
          border-radius: 0;
          border: none;
        }
      }

      label {
        font-size: 1rem;
        font-weight: 500;
        margin: 0 0 0.2rem 0;
      }
    }
  }

  .counter {
    display: flex;
    margin: 0 0 1rem 0;
  }
`;
