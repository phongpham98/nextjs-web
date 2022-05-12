import { LanguageType } from "@interfaces/posts";
import Router from "next/router";

const currentLocale = () => {
  if (Router.locale === "vi") return "vi";
  else return "en";
};

export default currentLocale;
