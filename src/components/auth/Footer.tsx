import { ReactElement } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = ({ signup }: { signup: boolean }): ReactElement => {
  return (
    <Card.Footer>
      {signup ? (
        <p>
          Already have an account? <Link to="/signin">Sign In</Link>
        </p>
      ) : (
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      )}
    </Card.Footer>
  );
};

export default Footer;
