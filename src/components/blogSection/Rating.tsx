"use client";

import { FaStar } from "react-icons/fa";

type Props = {
  checked: number | undefined;
  setChecked?: any;
  isClickable: boolean;
  setIsChecked?: any;
};

const Rating = ({ checked, setChecked, isClickable, setIsChecked }: Props) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="flex gap-1">
      {stars.map((val) => {
        return (
          <FaStar
            key={val}
            size={20}
            onClick={() => {
              isClickable ? setChecked(val) | setIsChecked(false) : "";
            }}
            className={`${val <= checked! ? "text-orange-500" : ""} `}
          />
        );
      })}
    </div>
  );
};

export default Rating;
