import { ReactElement, useState } from "react";
import { Table } from "react-bootstrap";
import Row from "./Row";
import { useUserStore } from "../../store/useUsersStore";

const UsersTable = (): ReactElement => {
  const users = useUserStore((set) => set.users);
  const storeSelect = useUserStore((set) => set.handleUserCheck);
  const storeSelectAll = useUserStore((set) => set.handleSelectAll);
  const [selectAll, setSelectAll] = useState(false);

  const handleSelect = (id: number) => {
    storeSelect(id);
  };

  const handleSelectAll = () => {
    storeSelectAll(!selectAll);
    setSelectAll(!selectAll);
  };

  return (
    <Table>
      <thead>
        <tr>
          <th>
            <input
              type="checkbox"
              onChange={handleSelectAll}
              checked={selectAll}
            />
          </th>
          <th>ID</th>
          <th>Name</th>
          <th>E-mail</th>
          <th>Logged Time</th>
          <th>Registration Time</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <Row user={user} key={user.id} handleSelect={handleSelect} />
        ))}
      </tbody>
    </Table>
  );
};

export default UsersTable;
