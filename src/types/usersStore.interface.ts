import { userInterface } from "./user.interface";

export interface usersStoreInterface {
  users: userInterface[];
  setUsers: (users: userInterface[]) => void;
  handleUserCheck: (userID: number) => void;
  handleSelectAll: (checked: boolean) => void;
}
