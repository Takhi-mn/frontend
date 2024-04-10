import axios from "axios";
import React from "react";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

const NewsPageDetail = ({ data }: any) => {
  console.log("DATA", data);
  return <div>OneNewsPage detail</div>;
};
export async function getServerSideProps(context: any) {
  console.log("WORING GET SERVER SIDE PROPS");
  const { params } = context;
  const { id } = params;
  const res = await fetch(
    `https://web-cms-psi.vercel.app/api/13238433-f5b8-4361-9134-8cab5e727005/contents/${id}`
  );
  const data = await res.json();
  console.log("News Data", data);

  return {
    props: { data },
  };
}
export default NewsPageDetail;
