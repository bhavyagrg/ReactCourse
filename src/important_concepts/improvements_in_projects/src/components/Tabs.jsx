export default function Tabs({ children, buttons, buttonContainer = "menu"}) {
  const ButtonContainer = buttonContainer;
  return (
    <>
      {/*Wouldn;t work, it will look for an built in buttonContainer  */}
      {/* <buttonContainer>{buttons}</buttonContainer> */}
      <ButtonContainer>{buttons}</ButtonContainer>
      {children}
    </>
  );
}
