"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ZodError, z } from "zod";
import { emailSubscribe } from "@/actions/EmailSubscribe";

const emailSchema = z.string().email("Invalid email format");

type Props = {
  subscribe: string;
  notify: string;
  email: string;
  submit: string;
};

const Subscribe = ({ subscribe, notify, email, submit }: Props) => {
  const [emailInput, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("INPUTING", event.target.value);
    const inputValue = event.target.value;
    setEmail(inputValue);
    setError(""); // Clear any previous errors
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);

    try {
      await emailSchema.parseAsync(emailInput);
      setError("");
      emailSubscribe(
        emailInput,
        "user_2enk6gH8ixWyp6f1IIVh6mcXf15",
        "13238433-f5b8-4361-9134-8cab5e727005"
      );
      console.log("Form submitted with email:", emailInput);
    } catch (err) {
      if (err instanceof ZodError) {
        setError(err.errors[0]?.message);
      }
    }
  };
  return (
    <div className="w-full bg-zinc-950">
      <form onSubmit={handleSubmit}>
        <div className="md:w-3/4 flex flex-col gap-5 md:justify-between md:flex-row px-4 md:px-16 py-8 text-white ">
          <div>
            <h4 className="font-medium text-xl">{subscribe}</h4>
            <p>{notify}</p>
          </div>

          <div className="md:w-96 w-full text-foreground">
            <Input
              name="email"
              value={emailInput}
              onChange={handleEmailChange}
              type="email"
              placeholder={email}
            />
            {isSubmitted && error && (
              <div style={{ color: "red" }}>{error}</div>
            )}
          </div>

          <Button type="submit" className="px-10">
            {submit}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Subscribe;
