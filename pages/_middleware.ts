import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
//   if (req.url.includes("/en/ve-fika")) {
//     const urlObject = req.nextUrl.clone();
//     urlObject.pathname = "/about";
//     return NextResponse.redirect(urlObject);
//   }
//   if (req.url.includes("/en/quiz-tinh-cach")) {
//     const urlObject = req.nextUrl.clone();
//     urlObject.pathname = "/personality";
//     return NextResponse.redirect(urlObject);
//   }
//   //   if (pathname == "/en") {
//   //     return NextResponse.redirect("/hello-nextjs");
//   //   }
  return NextResponse.next();
}
