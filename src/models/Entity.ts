import Images from "./Images";

export default interface Entity {
  slug: string;
  name: string;
  images: Images;
  [key: string]: any;
}
