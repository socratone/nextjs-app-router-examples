import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { AUTH_TOKEN } from './app/access-with-token/constants';

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  if (pathname === '/access-with-token/callback') {
    const phone = searchParams.get('phone');
    const verificationCode = searchParams.get('verificationCode');
    const redirect = searchParams.get('redirect');

    // phone과 verificationCode가 유효한지 확인합니다.
    if (
      phone &&
      phone.length >= 4 &&
      verificationCode &&
      verificationCode.length >= 4
    ) {
      // 임의의 토큰을 생성합니다.
      const token = Math.random().toString(36).substring(2);

      // 쿼리 파라미터가 없는 깨끗한 URL로 리디렉션하는 응답을 생성합니다.
      const response = NextResponse.redirect(
        new URL(redirect || '/', request.url)
      );

      // 응답에 쿠키를 설정합니다.
      response.cookies.set(AUTH_TOKEN, token, {
        path: '/',
        httpOnly: false,
        secure: false,
        sameSite: 'lax',
      });

      return response;
    } else {
      return NextResponse.redirect(new URL('/access-with-token', request.url));
    }
  }

  return NextResponse.next();
}

/**
 * 미들웨어가 실행될 경로를 지정합니다.
 */
export const config = {
  matcher: '/access-with-token/:path*', // /access-with-token으로 시작하는 모든 경로에 미들웨어를 적용합니다.
};
