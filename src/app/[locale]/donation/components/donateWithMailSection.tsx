"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IAboutUs } from "@/types/backend";
import * as yup from "yup";
import { useFormik } from "formik";
import { postDonate } from "@/actions/postDonate";
type Props = {
  isClicked: string;
  donationType: IAboutUs[] | undefined;
  setIsClicked: any;
};

const DonateWithMailSection = ({
  isClicked,
  donationType,
  setIsClicked,
}: Props) => {
  const filteredPrice = donationType?.filter((data) => data.id === isClicked);
  console.log("donationType", donationType);
  console.log("filteredPrice", filteredPrice);

  const validationSchema = yup.object({
    name: yup
      .string()
      .required("Required")
      .max(25, "Too long")
      .min(2, "Too short"),

    email: yup
      .string()
      .matches(
        /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
        "Ta email ee zuv oruulna uu"
      )
      .max(50, "email hayag 50 temdegtees hetreheergui bailgana uu")
      .required("Email haygiig zaaval buglunu uu")
      .email("Huchintei email hayg baih ystoi"),
    country: yup.string().required("title zaaval oruulna uu"),
    price: yup
      .number()
      .required("Price zaaval buglunu uu")
      .moreThan(0, "0-s ih price hiine uu"),
  });
  const formik = useFormik({
    onSubmit: ({ email, name, country, price }) => {
      if (filteredPrice?.length) {
        postDonate(email, name, country, filteredPrice[0].price!, isClicked);
      } else {
        postDonate(
          email,
          name,
          country,
          price!,
          "987dd469-f7fb-437c-bcf1-d8cb2bdf185d"
        );
      }
    },
    initialValues: {
      email: "",
      name: "",
      country: "",
      price: filteredPrice?.length ? filteredPrice[0].price : "0",
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema,
  });

  console.log("test", filteredPrice?.length ? filteredPrice[0].price : "");

  return (
    <div className="bg-white text-black rounded-md p-2 md:p-10 flex flex-col gap-2 flex-1">
      <div className="sm:hidden flex flex-col gap-10">
        <h1 className="text-center text-3xl md:5xl font-medium">Donate</h1>
        <div className="flex flex-col">
          <div className="flex justify-around">
            <Button className="shadow-lg px-10 py-6">Donation</Button>
            <Button className="shadow-lg px-10 py-6">Adoption</Button>
          </div>
          {/* <Button className="bg-[#F9FAFB] text-black shadow-lg px-10 py-6 my-14 max-w-[227px] self-center">
            Choose Donation
          </Button> */}
        </div>
      </div>
      <div className="text-center flex flex-wrap md:justify-center">
        {donationType?.map((data, index) => (
          <div
            key={index}
            onClick={() => setIsClicked(data.id)}
            className={`p-4 shadow-md rounded-md w-1/2 md:w-1/4 md:m-3 text-xl ${
              isClicked === data.id ? "bg-primary" : "bg-white"
            }`}
          >
            {data.price}$
          </div>
        ))}
        <div
          className={`p-4 shadow-md rounded-md w-1/2 md:w-1/4 md:m-3 text-xl ${
            isClicked === "0" ? "bg-primary" : "bg-white"
          }`}
          onClick={() => setIsClicked("0")}
        >
          Other
        </div>
      </div>
      {/* <RadioGroup
        defaultValue="comfortable"
        className="flex justify-center gap-10 p-10"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="once" id="r1" className="md:w-8 md:h-8" />
          <Label htmlFor="r1">{once}</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="monthly" id="r2" className="md:w-8 md:h-8" />
          <Label htmlFor="r2">{monthly}</Label>
        </div>
      </RadioGroup> */}
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <p className="text-sm">
            Full Name <span className="text-red-500">{formik.errors.name}</span>
          </p>
          <Input
            placeholder="Write name here"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm">
            Email Address
            <span className="text-red-500">{formik.errors.email}</span>
          </p>
          <Input
            placeholder="Write email address here"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm">
            Country{" "}
            <span className="text-red-500">{formik.errors.country}</span>
          </p>
          <Input
            placeholder="Mongolia"
            name="country"
            value={formik.values.country}
            onChange={formik.handleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm">
            Price<span className="text-red-500">{formik.errors.price}</span>
          </p>
          <Input
            placeholder="Write price here"
            type="number"
            disabled={isClicked === "0" ? false : true}
            value={
              filteredPrice?.length
                ? filteredPrice[0].price
                : formik.values.price
            }
            name="price"
            onChange={formik.handleChange}
          />
        </div>
        {/* <div className="flex flex-col gap-2">
          <p className="text-sm">Card Number</p>
          <Input placeholder="Write card number here" />
        </div> */}
        {/* <div className="flex gap-10">
          <div className="flex flex-col gap-2">
            <p className="text-sm">CVV</p>
            <Input placeholder="***" />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm">Expiry Date</p>
            <Input placeholder="mm/dd/yyyy" />
          </div>
        </div> */}
      </div>
      <div className="w-full flex justify-center">
        <Button
          className="w-full md:w-2/3 md:mt-20 py-7 text-xl"
          onClick={() => formik.handleSubmit()}
        >
          Donate
        </Button>
      </div>

      <p className="text-xs text-center">
        If you wish to see the impacts of your donation,{" "}
        <span className="text-primary">click here</span>{" "}
      </p>
    </div>
  );
};

export default DonateWithMailSection;
