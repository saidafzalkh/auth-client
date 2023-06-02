import { useFormik } from "formik";
import { ReactElement } from "react";
import { Button, Card, FloatingLabel, Form, Spinner } from "react-bootstrap";
import { useAuth } from "../../hooks/useAuth";

const Body = ({ signup }: { signup: boolean }): ReactElement => {
  const { mutate: auth, isLoading } = useAuth(signup);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      auth(values);
    },
  });

  return (
    <Card.Body>
      <Form onSubmit={formik.handleSubmit}>
        {signup && (
          <FloatingLabel label="Your Name" className="mb-2">
            <Form.Control
              value={formik.values.name}
              onChange={formik.handleChange}
              name="name"
              type="name"
              placeholder="Steve"
            ></Form.Control>
          </FloatingLabel>
        )}

        <FloatingLabel label="E-mail address" className="mb-2">
          <Form.Control
            value={formik.values.email}
            onChange={formik.handleChange}
            name="email"
            type="email"
            placeholder="steve@mail.com"
          ></Form.Control>
        </FloatingLabel>

        <FloatingLabel label="Password" className="mb-2">
          <Form.Control
            value={formik.values.password}
            onChange={formik.handleChange}
            name="password"
            type="password"
            placeholder="******"
          ></Form.Control>
        </FloatingLabel>

        <Button type="submit">
          {isLoading ? (
            <Spinner size="sm" />
          ) : signup ? (
            <span>Sign Up</span>
          ) : (
            <span>Sign In</span>
          )}
        </Button>
      </Form>
    </Card.Body>
  );
};

export default Body;
