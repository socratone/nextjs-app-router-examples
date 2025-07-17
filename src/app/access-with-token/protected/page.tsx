import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { AUTH_TOKEN } from '../constants';
import CookieCleaner from '../components/CookieCleaner';

// 모든 캐싱을 비활성화하여 항상 서버에서 최신 상태를 가져오도록 설정
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';
export const runtime = 'nodejs';

const Page = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get(AUTH_TOKEN)?.value;

  // 토큰이 없으면 인증 페이지로 리디렉션
  if (!token) {
    return redirect(
      '/access-with-token/form?redirect=/access-with-token/protected'
    );
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-2">
      {/* 클라이언트 컴포넌트를 통해 쿠키 삭제 */}
      <CookieCleaner />
      <p>보호된 페이지</p>
    </div>
  );
};

export default Page;
