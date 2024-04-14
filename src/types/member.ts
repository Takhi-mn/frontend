import { IMember } from "./backend";

export interface IChildData {
  name: string;
  position: string;
  desc: string;
}
export interface IPropsMember {
  member: IMember;
  handleImage: (src: string) => void;
  imageClick: () => void;
  setDataFromChild: (data: IChildData) => void;
}
