import { NextResponse, NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  //path name
  const {pathname } = req.nextUrl
  //checking dashboard access for users
  if(pathname.startsWith('/dashboard')){
    const cookies = req.headers.get('cookie') || ''
    //
    const hasSession = cookies.includes('next-auth.session-token') ||
                       cookies.includes('__Secure-next-auth.session-token')
    //no session found
    if(!hasSession){
      return NextResponse.redirect(new URL('/sign-in', req.nextUrl))
    }
  }
  return NextResponse.next()
}
export const config={
  matcher: ['/dashboard/:path*'],
}