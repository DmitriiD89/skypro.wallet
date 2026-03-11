import { Header } from "../../Components/Header/Header";

export function MainPage() {
  return (
    <Container>
      <Header />
      <Content />
      <Outlet />
    </Container>
  );
}
