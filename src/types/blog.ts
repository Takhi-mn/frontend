export interface IBlogComment {
  userName: string;
  userImage: string;
  comment: string;
  date: string;
}

export interface IPropsBlogComment {
  commentData: IBlogComment;
}

export interface IBlogData {
  id: string;
  title: string;
  date: string;
  userName: string;
  blog: string;
  comments: {
    userName: string;
    userImage: string;
    comment: string;
    date: string;
  }[];
}

export interface IPropsBlogData {
  blogData: IBlogData;
}
