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

export interface IAboutUs {
  name_mn: string;
  name_en: string;
  name_de: string;
  name_fr: string;
  id: string;
  contenttype: ITaxonomies;
  contenttypeId: string;
  images: { url: string }[];
  taxonomy: ITaxonomies;
  price?: string;
  content_mn: string;
  content_en: string;
  content_de: string;
  content_fr: string;
}

export interface IPartner {
  name_mn: string;
  name_en: string;
  name_de: string;
  name_fr: string;
  id: string;
  contenttype: any;
  contenttypeId: string;
  images: [{ url: string }];
  taxonomy: ITaxonomies;
  content_mn: string;
  content_en: string;
  content_de: string;
  content_fr: string;
}

export interface IMember {
  name_mn: string;
  name_en: string;
  name_de: string;
  name_fr: string;
  id: string;
  contenttype: any;
  contenttypeId: string;
  images: [{ url: string }];
  taxonomy: ITaxonomies;
  content_mn: string;
  content_en: string;
  content_de: string;
  content_fr: string;
  department: {
    id: string;
    webId: string;
    name_mn: string;
    name_en: string;
    name_de: string;
    name_fr: string;
  };
  position: {
    name_mn: string;
    name_en: string;
    name_de: string;
    name_fr: string;
  };
}
export interface IBlog {
  name_mn: string;
  name_en: string;
  name_de: string;
  name_fr: string;
  id: string;
  contenttype: any;
  contenttypeId: string;
  images: [{ url: string }];
  taxonomy: ITaxonomies;
  content_mn: string;
  content_en: string;
  content_de: string;
  content_fr: string;
  fullname: string;
  email: string;
  stars: number;
  createdAt: string;
  department: {
    id: string;
    webId: string;
    name_mn: string;
    name_en: string;
    name_de: string;
    name_fr: string;
  };
  position: {
    name_mn: string;
    name_en: string;
    name_de: string;
    name_fr: string;
  };
}
export interface IShop extends INews {
  price: number;
}
