import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { submitAdopt } from "@/actions/submitAdopt";
import { Checkbox } from "@/components/ui/checkbox";

type Props = {
  selectedAnimal: string;
  price: string;
};

const AdoptionForm = ({ selectedAnimal, price }: Props) => {
  const [checked, setChecked] = useState(false);
  const validationSchema = yup.object({
    fullname: yup.string().required("required"),
    email: yup.string().required("required").email("Must be email"),
    country: yup.string().required("required"),
  });
  const formik = useFormik({
    onSubmit: ({ fullname, email, country }) => {
      submitAdopt(fullname, email, country, selectedAnimal, price, checked);
      formik.resetForm();
    },
    initialValues: {
      fullname: "",
      email: "",
      country: "",
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema,
  });
  return (
    <div className="w-full md:w-1/2 flex flex-col gap-6">
      <figure>
        <p>
          Full name{" "}
          <span className="text-red-400">{formik.errors.fullname}</span>
        </p>
        <Input
          value={formik.values.fullname}
          onChange={formik.handleChange}
          name="fullname"
          className="bg-white"
          placeholder="Write name here"
        />
      </figure>
      <figure>
        <p>
          Email <span className="text-red-400">{formik.errors.fullname}</span>
        </p>
        <Input
          value={formik.values.email}
          onChange={formik.handleChange}
          name="email"
          className="bg-white"
          placeholder="Write email here"
        />
      </figure>
      <figure>
        <p>
          Country <span className="text-red-400">{formik.errors.fullname}</span>
        </p>
        <Input
          value={formik.values.country}
          onChange={formik.handleChange}
          name="country"
          className="bg-white"
          placeholder="Write your country here"
        />
      </figure>
      <div className="flex items-center space-x-2">
        <Checkbox
          checked={checked}
          onCheckedChange={() => {
            console.log("CHECKED", checked);
            setChecked(!checked);
          }}
          id="terms"
        />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Get emails
        </label>
      </div>
      <Button
        type="submit"
        onClick={() => {
          formik.handleSubmit();
        }}
        className="w-full"
      >
        Donate
      </Button>
    </div>
  );
};

export default AdoptionForm;
