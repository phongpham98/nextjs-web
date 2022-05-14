import { NextRequest } from "next/server";
import { UAParser } from "ua-parser-js";

export default function isMobileDevice(req?: NextRequest) {
  let userAgent;
  if (req) {
    userAgent = UAParser(req.headers.get("user-agent") || "");
  } else {
    userAgent = new UAParser().getResult();
  }

  return userAgent?.device?.type === "mobile";
}
