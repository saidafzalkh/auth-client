import { ReactElement } from "react";
import { Button, Container, Nav, Navbar, Spinner } from "react-bootstrap";
import { Trash, Unlock } from "react-bootstrap-icons";
import { useUserStore } from "../../store/useUsersStore";
import { useDelete } from "../../hooks/useDelete";
import { useToggle } from "../../hooks/useToggleBlock";

const Toolbar = (): ReactElement => {
  const selected = useUserStore((set) => set.users)
    .filter((user) => user.checked)
    .map((user) => user.id);

  const dto = { users: selected };

  const { mutate: block, isLoading: blocking } = useToggle("block");
  const { mutate: unblock, isLoading: unblocking } = useToggle("unblock");
  const { mutate: deleteUsers, isLoading: deleting } = useDelete();

  const handleBlock = () => {
    block(dto);
  };

  const handleUnblock = () => {
    unblock(dto);
  };

  const handleDelete = () => {
    deleteUsers(dto);
  };

  return (
    <Navbar variant="dark" bg="dark" sticky="top">
      <Container>
        <Nav className="d-flex w-100 justify-content-end gap-3">
          <Button
            style={{ minWidth: "5rem" }}
            variant="danger"
            onClick={handleBlock}
          >
            {blocking ? <Spinner size="sm" /> : "Block"}
          </Button>
          <Button
            onClick={handleUnblock}
            style={{ minWidth: "2rem" }}
            variant="outline-warning"
          >
            {unblocking ? <Spinner size="sm" /> : <Unlock />}
          </Button>
          <Button
            onClick={handleDelete}
            style={{ minWidth: "2rem" }}
            variant="outline-danger"
          >
            {deleting ? <Spinner size="sm" /> : <Trash />}
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Toolbar;
