import { ReactElement } from "react";
import { rowPropsInterface } from "../../types/row.props.interface";
import { formatTime } from "../../helpers/formatTime";

const Row = ({ user, handleSelect }: rowPropsInterface): ReactElement => {
  const userID = Number(localStorage.getItem("userID"));

  return (
    <tr className={userID === user.id ? "table-warning" : ""}>
      <td>
        <input
          checked={user.checked}
          type="checkbox"
          onChange={() => handleSelect(user.id)}
        />
      </td>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{formatTime(user.loggedAt)}</td>
      <td>{formatTime(user.createdAt)}</td>
      <td style={{ width: "10rem" }}>
        {user.blocked ? (
          <span className="text-danger">Blocked</span>
        ) : (
          <span className="text-success">Active</span>
        )}
      </td>
    </tr>
  );
};

export default Row;
