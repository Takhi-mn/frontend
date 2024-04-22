import moment from "moment";
export const dateFormatter = (date: string | undefined) => {
  return moment(date).format("L");
};
