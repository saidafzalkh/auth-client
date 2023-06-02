import { ReactElement } from "react";
import { Card } from "react-bootstrap";
import Head from "./Head";
import Body from "./Body";
import Footer from "./Footer";

const AuthForm = ({ signup }: { signup: boolean }): ReactElement => {
  return (
    <Card style={{ minWidth: "22rem", minHeight: "26rem" }}>
      <Head />
      <Body signup={signup} />
      <Footer signup={signup} />
    </Card>
  );
};

export default AuthForm;
