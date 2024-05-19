import { NextResponse } from 'next/server'
 
// const protectedRoutes = ['/dashboard/teacher','/dashboard/student, dashboard/admin']
export function middleware(request) {
    const {pathname} = request.nextUrl
    const token = request?.cookies?.get('token')?.value
    // if(!token && protectedRoutes.includes(pathname) ){
    //     return NextResponse.redirect(new URL('/login', request.url))
    // }else{
    //     return NextResponse.redirect(new URL("/", request.url))
    // }
}
 

// export const config = {
//   matcher: '/about/:path*',
// }