"use client";
import { getFaqs } from "@/actions/getFaqs";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/context/LanguageProvider";
import { contentConverter, nameConverter } from "@/lib/nameConverter";
import { INews } from "@/types/backend";
import React, { useEffect, useState } from "react";

type Props = {};

const FaqPageComponent = (props: Props) => {
  const [faqs, setFaqs] = useState<INews[]>();
  const { selectedLanguage } = useLanguage();
  useEffect(() => {
    getFaqs().then((data) => setFaqs(data));
  }, []);
  return (
    <div>
      {faqs?.map((faq) => (
        <AccordionItem key={faq.id} value="item-1">
          <AccordionTrigger>
            {nameConverter(faq, selectedLanguage)}
          </AccordionTrigger>
          <AccordionContent>
            <div
              dangerouslySetInnerHTML={{
                __html: contentConverter(faq, selectedLanguage),
              }}
            ></div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </div>
  );
};

export default FaqPageComponent;
