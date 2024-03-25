export interface ITaxonomies {
  name: string;
  id: number;
  children: ITaxonomies[];
}
