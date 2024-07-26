import { StyledPrimaryButton } from "./components/PrimaryButton";
import StyledButton from "./components/StyledButton";
import { StyledSecondaryButton } from "./components/PrimaryButton";
import { StyledExtendedButton } from "./components/PrimaryButton";

function App() {
  const handleClick = () => {
    console.log("Hello");
  };

  return (
    <main>
      <h1>Hello from React</h1>
      <StyledButton>Default Button </StyledButton>
      <StyledPrimaryButton onClick={handleClick}>
        New Button
      </StyledPrimaryButton>
      <StyledSecondaryButton onClick={handleClick}>
        Third Button
      </StyledSecondaryButton>
      <StyledExtendedButton onClick={handleClick}>
        Another One
      </StyledExtendedButton>
    </main>
  );
}

export default App;
