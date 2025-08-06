import styled from "styled-components";

export const StyledButton = styled.div`
  height: 2rem;
  width: 9rem;
  border-radius: 2rem;
  color: #ffffff;
  background-color: #1428a0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 0.8rem;
  margin: 1.5rem 0;
  letter-spacing: 0.2rem;
  transition-duration: 0.2s;

  &&:hover {
    opacity: 0.9;
  }

  &&.buttonPressed {
    background-color: #1c1c1c;
  }
`;
