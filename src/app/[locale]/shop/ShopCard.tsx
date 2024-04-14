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
import { IShop } from "@/types/backend";
import { nameConverter } from "@/lib/nameConverter";

type Props = {
  item: IShop;
  selectedLanguage: string | string[];
};

const ShopCard = ({ item, selectedLanguage }: Props) => {
  return (
    <Card className="p-3">
      <Image
        className="rounded-lg"
        src={item.images[0].url}
        width={500}
        height={400}
        alt={item.name_en}
      />

      <CardDescription className="my-4">
        {nameConverter(item, selectedLanguage)}
      </CardDescription>
      <CardTitle>{item.price}₮</CardTitle>
    </Card>
  );
};

export default ShopCard;
