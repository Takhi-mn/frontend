"use client";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";

type Props = {};

const AdminPage = (props: Props) => {
  useEffect(() => {
    window.open("https://www.web-cms.uz.mn/", "_blank");
    redirect("/");
  }, []);

  return <div>AdminPage</div>;
};

export default AdminPage;
