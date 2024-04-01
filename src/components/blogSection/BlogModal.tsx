"use client";
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
type Props = {};

const BlogModal = (props: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Write Blog</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="text-start">
          <DialogTitle>Write a Blog</DialogTitle>
        </DialogHeader>
        <div></div>
        <Rating />
        <div className="w-full flex flex-col gap-5 mt-10">
          <div>
            <p>Full name &#40;required&#41; </p>
            <Input
              className="w-full"
              type="email"
              placeholder="Write your name her"
            />
          </div>
          <div>
            <p>Email &#40;required&#41; </p>
            <Input
              className="w-full"
              type="email"
              placeholder="Write your email here"
            />
          </div>
          <div>
            <p>Title &#40;required&#41; </p>
            <Input
              className="w-full"
              type="email"
              placeholder="Write your title her"
            />
          </div>
          <div>
            <p>Review </p>
            <Textarea
              className="w-full h-28"
              placeholder="You can write more info."
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Send</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BlogModal;
