import { SanityImage } from "./recipe";

export interface Category {
  _id: string;
  title: string
  mainImage: SanityImage
  category: string[]
}