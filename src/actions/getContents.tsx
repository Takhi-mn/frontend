"use server";
import { INews as Contents } from "@/types/backend";
import qs from "query-string";
const URL = `https://web-cms-psi.vercel.app/api/13238433-f5b8-4361-9134-8cab5e727005/contents`;

interface Query {
  contenttypeId?: string;
  taxonomyPath?: string;
  isFeatured?: boolean;
}

const GetContents = async (query: Query): Promise<Contents[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      contenttypeId: query.contenttypeId,
      taxonomyPath: query.taxonomyPath,
      isFeatured: query.isFeatured,
    },
  });

  const res = await fetch(url);
  console.log("RETURN GET CONTENTS", url);
  return res.json();
};

export default GetContents;
