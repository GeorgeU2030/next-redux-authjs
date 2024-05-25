import { NextResponse } from "next/server";
import { auth } from "./auth";

const protectedRoutes = ["/home",];


export default function middleware( req: any ) {
  if (protectedRoutes.includes(req.nextUrl.pathname) ) {

    if (!true){
      const absoluteURL = new URL("/login", req.nextUrl.origin);
      return NextResponse.redirect(absoluteURL.toString());
    }
    
  }
}
