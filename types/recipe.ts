import { PortableTextBlock } from "sanity";

export interface Recipe {
  _id: string;
  _createdAt: Date
  title: string
  description: string
  mainImage: SanityImage
  slug: string
  category: string[]
  serving: number
  prepTime: number
  cookingTime: number
  isHighlight: boolean | null
  instructions: PortableTextBlock[]
  ingredients: Ingredient[]
}

export interface HighlightRecipe extends Recipe {
  highlightImage: SanityImage
}

export interface Ingredient {
  amount: number
  ingredient: string
  unit?: string
  key: string
}

export interface SanityImage {
  alt: string;
  asset: {
    _ref: string;
    _type: string;
  };
  _type: string;
}