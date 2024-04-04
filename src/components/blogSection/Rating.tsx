"use client";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

type Props = {};

const Rating = (props: Props) => {
  const stars = [1, 2, 3, 4, 5];
  const [checked, setChecked] = useState<number>(0);
  return (
    <div className="flex gap-1">
      {stars.map((val) => {
        return (
          <FaStar
            key={val}
            size={20}
            onClick={() => {
              setChecked(val);
            }}
            className={`${val <= checked ? "text-orange-500" : ""} `}
          />
        );
      })}
    </div>
  );
};

export default Rating;
