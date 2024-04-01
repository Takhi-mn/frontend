import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Car } from "lucide-react";
import Image from "next/image";
import { camp1 } from "@/assets";

type Props = {};

const ShopCard = (props: Props) => {
  return (
    <Card className="p-3">
      <img
        className="rounded-lg"
        src={camp1.src}
        width={500}
        height={400}
        alt="shop"
      />

      <CardDescription className="my-4">Lorem ipsum</CardDescription>
      <CardTitle>200$</CardTitle>
    </Card>
  );
};

export default ShopCard;
