"use client";
import { useContext, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import Rating from "./Rating";
import { Textarea } from "../ui/textarea";
import * as yup from "yup";
import { useFormik } from "formik";
import { dataContext } from "@/context/DataProvider";

type Props = {
  write: string;
  name: string;
  email: string;
  emailPlace: string;
  title: string;
  titlePlace: string;
  review: string;
  reviewPlace: string;
  namePlace: string;
  send: string;
};

const BlogModal = ({
  write,
  name,
  email,
  emailPlace,
  title,
  titlePlace,
  review,
  reviewPlace,
  namePlace,
  send,
}: Props) => {
  const [dialogHandler, setDialogHandler] = useState(false);
  const { postBlog } = useContext(dataContext);
  const validationSchema = yup.object({
    name: yup
      .string()
      .required("(Required)")
      .max(25, "(Too long)")
      .min(2, "(Too short)"),

    email: yup
      .string()
      .matches(
        /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
        "(Wrong Email)"
      )
      .max(50, "(Too long)")
      .required("(Required)")
      .email("(Wrong Email)"),
    title: yup.string().required("(Required)"),
    review: yup.string().required("(Required)").min(6, "(Too short)"),
  });
  const formik = useFormik({
    onSubmit: ({ email, name, title, review }) => {
      postBlog(name, email, title, review, checked);
      setDialogHandler(false);
      formik.resetForm();
    },
    initialValues: {
      email: "",
      name: "",
      title: "",
      review: "",
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema,
  });
  const [checked, setChecked] = useState<number>(0);

  const [isChecked, setIsChecked] = useState<boolean>(true);

  return (
    <Dialog open={dialogHandler}>
      <Button onClick={() => setDialogHandler(true)}>{write}</Button>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="text-start">
          <DialogTitle>{write}</DialogTitle>
        </DialogHeader>
        <Rating
          checked={checked}
          setChecked={setChecked}
          isClickable={true}
          setIsChecked={setIsChecked}
        />
        <div className="w-full flex flex-col gap-5 mt-10">
          <div>
            <p>
              {name}
              <span className="text-red-500">{formik.errors.name}</span>
            </p>
            <Input
              className="w-full"
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              placeholder={namePlace}
            />
          </div>
          <div>
            <p>
              {email}
              <span className="text-red-500">{formik.errors.email}</span>
            </p>
            <Input
              className="w-full"
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder={emailPlace}
            />
          </div>
          <div>
            <p>
              {title}
              <span className="text-red-500">{formik.errors.title}</span>
            </p>
            <Input
              className="w-full"
              type="text"
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
              placeholder={titlePlace}
            />
          </div>
          <div>
            <p>
              {review}
              <span className="text-red-500">{formik.errors.review}</span>
            </p>
            <Textarea
              name="review"
              className="w-full h-28"
              placeholder={reviewPlace}
              value={formik.values.review}
              onChange={formik.handleChange}
            />
          </div>
        </div>
        <DialogFooter className="gap-2">
          <Button
            disabled={isChecked}
            type="submit"
            onClick={() => formik.handleSubmit()}
          >
            {send}
          </Button>
          <Button onClick={() => setDialogHandler(false)}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BlogModal;
