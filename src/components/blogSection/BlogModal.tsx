import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Rating from "./Rating";
import { Textarea } from "../ui/textarea";
import { useTranslations } from "next-intl";
type Props = {};

const BlogModal = (props: Props) => {
  const b = useTranslations("Blog");
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>{b("write")}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="text-start">
          <DialogTitle>{b("write")}</DialogTitle>
        </DialogHeader>
        <Rating />
        <div className="w-full flex flex-col gap-5 mt-10">
          <div>
            <p>{b("name")}</p>
            <Input
              className="w-full"
              type="email"
              placeholder={b("namePlace")}
            />
          </div>
          <div>
            <p>{b("email")}</p>
            <Input
              className="w-full"
              type="email"
              placeholder={b("emailPlace")}
            />
          </div>
          <div>
            <p>{b("title")}</p>
            <Input
              className="w-full"
              type="email"
              placeholder={b("titlePlace")}
            />
          </div>
          <div>
            <p>{b("review")}</p>
            <Textarea className="w-full h-28" placeholder={b("reviewPlace")} />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">{b("send")}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BlogModal;
