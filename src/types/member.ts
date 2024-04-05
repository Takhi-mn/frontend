export interface IMember {
  name: string;
  img?: any;
  desc: string;
  position: string;
}
export interface IPropsMember {
  member: IMember;
  handleImage: (src: string) => void;
  imageClick: () => void;
  setDataFromChild: (data: IMember) => void;
}
