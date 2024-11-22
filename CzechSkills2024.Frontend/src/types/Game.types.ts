export interface IGame {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  publishDate: Date;
  platforms: IPlatform[];
  tags: ITag[];
}

interface IPlatform {
  name: string;
  link: string;
}

interface ITag {
  name: string;
}
