import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "jjty1uh3",
  dataset: "production",
  title: "Noriahs Recipes",
  apiVersion: "2021-08-31",
  basePath: "/studio",
  plugins: [deskTool()],
  schema: { types: schemas },
  useCdn: false,
});

export default config;
