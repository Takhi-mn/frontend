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
import Link from "next/link";
import { INews } from "@/types/backend";
import { contentConverter, nameConverter } from "@/lib/nameConverter";
type Props = {
  news: INews;
};

const NewsCard = ({ news }: Props) => {
  return (
    <Link href={""}>
      <Card className="lg:flex-1 rounded-lg bg-muted border-0 max-w-[350px]">
        <CardContent className="p-0">
          {/* <Image
            className="rounded-t-lg"
            height={216}
            width={350}
            src={news.images[0].url}
            alt=""
          /> */}
        </CardContent>
        <CardHeader>
          <CardTitle className="line-clamp-2">{nameConverter(news)}</CardTitle>
          <CardDescription className="line-clamp-2">
            <div dangerouslySetInnerHTML={{ __html: contentConverter(news) }} />
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
    </Link>
  );
};

export default NewsCard;
