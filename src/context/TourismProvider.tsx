"use client";
import { INews } from "@/types/backend";
import axios from "axios";
import { PropsWithChildren, createContext, useState } from "react";

interface ITourismContext {
  tourismData: INews[] | undefined;
  getTourismData: () => void;
  getBookingData: () => void;
  bookingData: INews[] | undefined;
}
export const TourismContext = createContext({} as ITourismContext);

const TourismProvider = ({ children }: PropsWithChildren) => {
  const [tourismData, setTourismData] = useState();
  const [bookingData, setBookingData] = useState();
  const getTourismData = async () => {
    try {
      const { data } = await axios.get(
        "https://web-cms-psi.vercel.app/api/13238433-f5b8-4361-9134-8cab5e727005/camp"
      );
      setTourismData(data);
    } catch (error) {
      console.log("ERROR TO GET TOURISM DATA", error);
    }
  };
  const getBookingData = async () => {
    try {
      const { data } = await axios.get(
        "https://web-cms-psi.vercel.app/api/13238433-f5b8-4361-9134-8cab5e727005/tours"
      );
      setBookingData(data);
    } catch (error) {
      console.log("ERROR TO GET TOURISM DATA", error);
    }
  };

  // TOURISM BOOKING POST SECTION

  return (
    <TourismContext.Provider
      value={{ tourismData, getTourismData, getBookingData, bookingData }}
    >
      {children}
    </TourismContext.Provider>
  );
};
export default TourismProvider;
