import { ReactElement } from "react";
import Toolbar from "../components/dashboard/Toolbar";
import UsersTable from "../components/dashboard/UsersTable";
import { useGetUsers } from "../hooks/useGetUsers";
import { Spinner } from "react-bootstrap";

const Dashboard = (): ReactElement => {
  const { isLoading } = useGetUsers();
  const userName = localStorage.getItem("userName");

  if (isLoading)
    return (
      <main className="vh-100 d-flex align-items-center justify-content-center">
        <Spinner />
      </main>
    );

  return (
    <main className="pb-4">
      <header>
        <h1>Hello, {userName}</h1>
      </header>
      <Toolbar />
      <UsersTable />
    </main>
  );
};

export default Dashboard;
