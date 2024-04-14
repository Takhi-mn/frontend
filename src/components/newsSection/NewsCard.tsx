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
import { useLanguage } from "@/context/LanguageProvider";
import { dateFormatter } from "@/lib/dateFormatter";
type Props = {
  news: INews;
};

const NewsCard = ({ news }: Props) => {
  const { selectedLanguage } = useLanguage();
  return (
    <Link href={`/${selectedLanguage}/news/${news.id}`}>
      <Card className="lg:flex-1 rounded-lg bg-muted border-0 max-w-[350px]">
        <CardContent className="p-0">
          {news.images.length > 0 ? (
            <Image
              className="rounded-t-lg object-cover w-[350px] h-[216px]"
              height={216}
              width={350}
              src={news.images[0].url}
              alt=""
            />
          ) : (
            <div className="h-[240px] w-[350px] flex justify-center items-center">
              No image
            </div>
          )}
        </CardContent>
        <CardHeader>
          <CardTitle className="line-clamp-2">
            {nameConverter(news, selectedLanguage)}
          </CardTitle>
          <CardDescription>
            <div
              className="line-clamp-2"
              dangerouslySetInnerHTML={{
                __html: contentConverter(news, selectedLanguage),
              }}
            />
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <div className="font-semibold">{dateFormatter(news.createdAt)}</div>
          <div className="flex justify-between mt-3">
            <Badge className="">
              {nameConverter(news.taxonomy, selectedLanguage)}
            </Badge>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default NewsCard;
