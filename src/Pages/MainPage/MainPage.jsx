import { Outlet } from "react-router-dom";
import { Container } from "../../Components/Container/Container";
import { Header } from "../../Components/Header/Header";

export function MainPage() {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
}
