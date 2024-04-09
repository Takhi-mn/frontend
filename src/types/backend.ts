export interface ITaxonomies {
  name_mn: string;
  name_en: string;
  name_de: string;
  name_fr: string;
  id: number;
  children: ITaxonomies[];
}
export interface INews {
  name_mn: string;
  name_en: string;
  name_de: string;
  name_fr: string;
  id: string;
  contenttype: any;
  contenttypeId: "string";
  images: [{ url: string }];
  taxonomy: ITaxonomies;
  taxonomyPath: number;
  content_mn: string;
  content_en: string;
  content_de: string;
  content_fr: string;
  createdAt: string;
}
