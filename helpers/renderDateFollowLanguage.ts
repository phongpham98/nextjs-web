import moment from "moment";
import "moment/locale/es-us";
import "moment/locale/vi";
import Router, { NextRouter } from "next/router";

export const renderDateFollowLanguage = (date: number, router?: NextRouter) => {
  if (router) {
    if (router.locale === "vi") {
      moment.locale("vi");
      return moment.unix(date).format("DD MMMM, YYYY");
    } else {
      moment.locale("en");
      return moment.unix(date).format("MMMM DD, YYYY");
    }
  } else {
    if (Router.locale === "vi") {
      moment.locale("vi");
      return moment.unix(date).format("DD MMMM, YYYY");
    } else {
      moment.locale("en");
      return moment.unix(date).format("MMMM DD, YYYY");
    }
  }
};
