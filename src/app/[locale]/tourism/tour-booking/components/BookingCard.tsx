import { book } from "@/assets";
import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import * as yup from "yup";
import { useFormik } from "formik";
import { bookTrip } from "@/actions/bookTrip";
import { INews } from "@/types/backend";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  trips: INews[] | undefined;
};

const BookingCard = ({ trips }: Props) => {
  const validationSchema = yup.object({
    email: yup
      .string()
      .max(100, "(Too long)")
      .required("(Required)")
      .email("(Must be email)"),
    fullname: yup.string().max(100, "too long").required("(Required)"),
    startdate: yup.string().required("(Required)"),
    tourists: yup.number().required("(Required)").moreThan(0, "(Required)"),
    country: yup.string().required("(Required)"),
  });
  const formik = useFormik({
    onSubmit: ({ fullname, email, startdate, tourists, country, enddate }) => {
      console.log("onSubmit working");
      bookTrip(fullname, email, tourists, country, startdate, enddate);
      formik.resetForm();
    },
    initialValues: {
      email: "",
      fullname: "",
      startdate: "",
      enddate: "",
      tourists: 0,
      country: "",
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema,
  });
  return (
    <div className="w-full my-24 flex gap-10">
      <div className="w-1/2 h-[700px] hidden md:block">
        <img className="h-full object-cover" src={book.src} alt="" />
      </div>
      <div className="md:w-1/2 w-full">
        <h1 className="text-3xl ">Book Your trip</h1>
        <div className="w-full flex flex-col gap-5 mt-10">
          <div>
            <p>
              Full name
              <span className="text-red-400">{formik.errors.fullname}</span>
            </p>
            <Input
              value={formik.values.fullname}
              onChange={formik.handleChange}
              name="fullname"
              className="w-full"
              type="email"
              placeholder="Write your name her"
            />
          </div>
          <div>
            <p>
              Trip name{" "}
              <span className="text-red-400">{formik.errors.country}</span>
            </p>
            <Select
              value={formik.values.country}
              name="country"
              onValueChange={(e) => {
                formik.values.country = e;
              }}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select trip" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Trips</SelectLabel>
                  {trips?.map((trip) => {
                    return (
                      <SelectItem key={trip.id} value={trip.taxonomyPath}>
                        {trip.name_en}
                      </SelectItem>
                    );
                  })}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <p>
              Email <span className="text-red-400">{formik.errors.email}</span>
            </p>
            <Input
              value={formik.values.email}
              onChange={formik.handleChange}
              name="email"
              className="w-full"
              type="email"
              placeholder="Write your email here"
            />
          </div>
          <div>
            <p>
              Start date{" "}
              <span className="text-red-400">{formik.errors.startdate}</span>
            </p>
            <Input
              value={formik.values.startdate}
              onChange={formik.handleChange}
              name="startdate"
              className="w-full"
              type="date"
            />
          </div>
          <div>
            <p>
              End date{" "}
              <span className="text-red-400">{formik.errors.startdate}</span>
            </p>
            <Input
              value={formik.values.enddate}
              onChange={formik.handleChange}
              name="enddate"
              className="w-full"
              type="date"
            />
          </div>
          <div>
            <p>
              Number of tourists{" "}
              <span className="text-red-400">{formik.errors.tourists}</span>
            </p>
            <Input
              value={formik.values.tourists}
              onChange={formik.handleChange}
              name="tourists"
              className="w-full"
              type="number"
              placeholder="Write tourists number here"
            />
          </div>
          <Button
            type="submit"
            onClick={() => {
              formik.handleSubmit();
            }}
            className="w-full"
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
