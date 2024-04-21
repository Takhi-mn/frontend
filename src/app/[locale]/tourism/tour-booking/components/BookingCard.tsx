import { book } from "@/assets";
import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import * as yup from "yup";
import { useFormik } from "formik";
import { bookTrip } from "@/actions/bookTrip";

type Props = {};

const BookingCard = (props: Props) => {
  const validationSchema = yup.object({
    email: yup
      .string()
      .max(100, "too long")
      .required("required")
      .email("must be email"),
    fullname: yup.string().max(100, "too long").required("required"),
    startdate: yup.string().required("required"),
    tourists: yup.number().required("required"),
    country: yup.string().required("required"),
  });
  const formik = useFormik({
    onSubmit: ({ fullname, email, startdate, tourists, country }) => {
      console.log("onSubmit working");
      bookTrip(fullname, email, tourists, country, startdate);
    },
    initialValues: {
      email: "",
      fullname: "",
      startdate: "",
      tourists: null,
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
              Full name{" "}
              <span className="text-red-400">
                &#40;{formik.errors.fullname}&#41;
              </span>
            </p>
            <Input
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
              <span className="text-red-400">
                &#40;{formik.errors.country}&#41;
              </span>
            </p>
            <Input
              onChange={formik.handleChange}
              name="country"
              className="w-full"
              type="email"
              placeholder="Write tour name here"
            />
          </div>
          <div>
            <p>
              Email{" "}
              <span className="text-red-400">
                &#40;{formik.errors.email}&#41;
              </span>
            </p>
            <Input
              onChange={formik.handleChange}
              name="email"
              className="w-full"
              type="email"
              placeholder="Write your email here"
            />
          </div>
          <div>
            <p>
              Book date{" "}
              <span className="text-red-400">
                &#40;{formik.errors.startdate}&#41;
              </span>
            </p>
            <Input
              onChange={formik.handleChange}
              name="startdate"
              className="w-full"
              type="date"
            />
          </div>
          <div>
            <p>
              Number of tourists{" "}
              <span className="text-red-400">
                &#40;{formik.errors.tourists}&#41;
              </span>
            </p>
            <Input
              onChange={formik.handleChange}
              name="tourists"
              className="w-full"
              type="number"
              placeholder="Write tourists number here"
            />
          </div>
          <div>
            <p>More info </p>
            <Textarea
              className="w-full h-28"
              placeholder="You can write more info."
            />
          </div>
          <Button
            type="submit"
            onClick={formik.handleSubmit}
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
