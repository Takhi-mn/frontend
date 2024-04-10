"use client";
export const nameConverter = (
  data: any,
  selectedLanguage: string | string[]
) => {
  switch (selectedLanguage) {
    case "mn":
      return data.name_mn;
      break;
    case "en":
      return data.name_en;
      break;
    case "de":
      return data.name_de;
      break;
    case "fr":
      return data.name_fr;
      break;

    default:
      break;
  }
};

export const contentConverter = (
  data: any,
  selectedLanguage: string | string[]
) => {
  switch (selectedLanguage) {
    case "mn":
      return data.content_mn;
      break;
    case "en":
      return data.content_en;
      break;
    case "de":
      return data.content_de;
      break;
    case "fr":
      return data.content_fr;
      break;

    default:
      break;
  }
};
