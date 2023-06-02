import { userInterface } from "./user.interface";

export interface rowPropsInterface {
  user: userInterface;
  handleSelect: (id: number) => void;
}
