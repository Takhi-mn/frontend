import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { camp1 } from "@/assets";
type Props = {};

const NewsCard = (props: Props) => {
  return (
    <Card className="max-w-[350px] rounded-lg ">
      <CardContent className="p-0">
        <Image
          className="rounded-t-lg"
          height={216}
          width={350}
          src={camp1.src}
          alt=""
        />
      </CardContent>
      <CardHeader>
        <CardTitle className="line-clamp-2">
          The Government of Mongolia,represented by the Ministry of Environment
          and Tourism signed agreement with the Khomyn Talyn Takhi NGO
        </CardTitle>
        <CardDescription className="line-clamp-2">
          On 25th November 2023, during the Second Forum of Environmental
          rangers, Mr. Bat-Erdene B, Minister of Environment and Tourism and Mr.
          Boldgiv B, Board Chairman of the “Khomyn Talyn Takhi” NGO have signed
          a Management Agreement on executing protected area’s management of
          Khomyn Tal National Park.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <div className="font-semibold">24/07/03</div>
        <div className="flex justify-between mt-3">
          <Badge className="">Marketing</Badge>
          <p className="text-primary">Read 10 Min</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default NewsCard;
