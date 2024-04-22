import CampMenu from "../components/CampMenu";
import NewImageScroller from "../components/NewImageScroller";
import BookingPageComp from "./components/BookingPage";

type Props = {};

const BookingPage = (props: Props) => {
  return (
    <div className="bg-background text-foreground">
      <NewImageScroller />
      <CampMenu page={"booking"} />
      <BookingPageComp />
    </div>
  );
};

export default BookingPage;
