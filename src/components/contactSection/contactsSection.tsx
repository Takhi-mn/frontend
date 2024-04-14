import React from "react";

import { IPartners } from "@/types/backend";
import PhoneSection from "./components/phoneSection";
import LocationSection from "./components/locationSection";
import SmsSection from "./components/smsSection";

interface IProps {
  contacts: IPartners[] | undefined;
  selectedLanguage: string | string[];
}

const ContactsSection = ({ selectedLanguage, contacts }: IProps) => {
  const filteredLocationData = contacts?.filter(
    (data) => data.contenttype.name_en === "location"
  );
  const filteredPhoneData = contacts?.filter(
    (data) => data.contenttype.name_en === "phone"
  );
  const filteredSmsData = contacts?.filter(
    (data) => data.contenttype.name_en === "sms"
  );
  console.log("loc", filteredLocationData);
  console.log("ph", filteredPhoneData);
  console.log("sms", filteredSmsData);
  return (
    <div className="flex flex-col justify-center items-center gap-3 w-full">
      <h1 className="text-[22px] font-bold">Contact</h1>
      <div className="sm:flex sm:flex-wrap w-full gap-4 sm:justify-center sm:items-center">
        {filteredPhoneData?.map((filteredData) => (
          <PhoneSection
            filteredData={filteredData}
            selectedLanguage={selectedLanguage}
          />
        ))}
        {filteredLocationData?.map((filteredData) => (
          <LocationSection
            filteredData={filteredData}
            selectedLanguage={selectedLanguage}
          />
        ))}
        {filteredSmsData?.map((filteredData) => (
          <SmsSection
            filteredData={filteredData}
            selectedLanguage={selectedLanguage}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactsSection;
