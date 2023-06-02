import { ReactElement } from "react";
import { Card } from "react-bootstrap";

const Head = (): ReactElement => {
  return (
    <Card.Header>
      <h1 className="text-center">Admin Panel</h1>
    </Card.Header>
  );
};

export default Head;
