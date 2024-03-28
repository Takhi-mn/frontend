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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
type Props = {};

const NewsCard = (props: Props) => {
  return (
    <Card className="w-[350px]">
      <CardContent></CardContent>
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
      <CardFooter></CardFooter>
    </Card>
  );
};

export default NewsCard;
