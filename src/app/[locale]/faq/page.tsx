import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FaqPageComponent from "./FaqPageComponent";
type Props = {};

const FaqPage = (props: Props) => {
  return (
    <div className="w-full p-6 sm:p-16 sm:px-28 min-h-[60vh]">
      <Accordion type="single" collapsible className="w-full">
        <FaqPageComponent />
      </Accordion>
    </div>
  );
};

export default FaqPage;
