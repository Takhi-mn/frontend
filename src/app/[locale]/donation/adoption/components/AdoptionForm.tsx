import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

type Props = {};

const AdoptionForm = (props: Props) => {
  return (
    <div className="w-full md:w-1/2 flex flex-col gap-6">
      <figure>
        <p>Full name</p>
        <Input className="bg-white" placeholder="Write name here" />
      </figure>
      <figure>
        <p>Email</p>
        <Input className="bg-white" placeholder="Write email here" />
      </figure>
      <figure>
        <p>Country</p>
        <Input className="bg-white" placeholder="Write your country here" />
      </figure>
      <Button className="w-full">Donate</Button>
    </div>
  );
};

export default AdoptionForm;
