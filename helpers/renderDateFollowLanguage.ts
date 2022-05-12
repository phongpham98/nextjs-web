import i18next from "i18next";
import moment from "moment";
import Router from "next/router";
import "moment/locale/es-us";
import "moment/locale/vi";

export const renderDateFollowLanguage = (date: number) => {
  if (Router.locale === "vi") {
    moment.locale("vi");
    return moment.unix(date).format("DD MMMM, YYYY");
  } else {
    moment.locale("en");
    return moment.unix(date).format("MMMM DD, YYYY");
  }
};
