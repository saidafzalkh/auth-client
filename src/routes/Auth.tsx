import { ReactElement } from "react";
import AuthForm from "../components/auth/AuthForm";

const Auth = ({ signup }: { signup: boolean }): ReactElement => {
  return (
    <main className="d-flex align-items-center justify-content-center vh-100">
      <AuthForm signup={signup} />
    </main>
  );
};

export default Auth;
