import logoImg from "../assets/Logo.svg";
import { styled } from "../styles";

const HeaderContainer = styled("header", {
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  width: "100%",
  maxWidth: 1180,
  padding: "2.5rem 0",
});

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoImg} alt="Ignite Shop Logo" />
    </HeaderContainer>
  );
}
