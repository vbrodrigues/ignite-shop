import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { styled } from "../styles";

const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  alignItems: "center",
  width: "100vw",
  minHeight: "100vh",
});

export function DefaultLayout() {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
}
