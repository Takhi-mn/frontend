import Link from "next/link";
import React from "react";
import { FaTag } from "react-icons/fa6";

type Props = {
  page: string;
};

const CampMenu = ({ page }: Props) => {
  return (
    <div className="flex text-lg font-medium">
      <div
        className={`${
          page === "camp" && "text-primary"
        } flex-1 border-[1px] py-8`}
      >
        <Link className="flex items-center justify-center" href="./" rel="camp">
          Eco Camp
        </Link>
      </div>
      <div className="flex-1 border-[1px] py-8">
        <Link
          className={`${
            page === "booking" && "text-primary"
          } flex items-center justify-center`}
          href="tourism/booking"
          rel="booking"
        >
          <FaTag />
          Tours/price, Booking
        </Link>
      </div>
    </div>
  );
};

export default CampMenu;
