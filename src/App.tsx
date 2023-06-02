import { ReactElement } from "react";
import { Container } from "react-bootstrap";
import { QueryClient, QueryClientProvider } from "react-query";
import { Outlet } from "react-router-dom";

const client = new QueryClient();

const App = (): ReactElement => {
  return (
    <QueryClientProvider client={client}>
      <Container>
        <Outlet />
      </Container>
    </QueryClientProvider>
  );
};

export default App;
