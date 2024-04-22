"use client";
import { useEffect, useState } from "react";
import axios from "axios";

type Props = {};

const Tree = (props: Props) => {
  const [taxonomies, setTaxonomies] = useState();
  const getTaxonomies = async () => {
    try {
      const { data } = await axios.get(
        "https://web-cms-psi.vercel.app/api/c9c500b2-af31-4ef9-85fe-e62c8cc48b9a/menu"
      );
      console.log("DATA!", data);
      setTaxonomies(data);
    } catch (error) {}
  };
  useEffect(() => {
    getTaxonomies();
  }, []);
  return <div className="group"></div>;
};

export default Tree;
