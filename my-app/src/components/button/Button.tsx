import { StyledButton } from ".";
import { TEXTS } from "../../CONSTS";
import { useState, useEffect } from "react";

export const Button = () => {
  const [isButonPressed, setIsButtonPressed] = useState(false);

  useEffect(() => {
    setIsButtonPressed(false);
  }, []);

  return (
    <StyledButton
      className={isButonPressed ? "buttonPressed" : ""}
      onClick={() => {
        setIsButtonPressed(!isButonPressed);
      }}
    >
      {isButonPressed
        ? `${TEXTS.button.clicked.toUpperCase()}`
        : `${TEXTS.button.notClicked.toUpperCase()}`}
    </StyledButton>
  );
};
