'use client';

import Link from 'next/link';

const Page = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-2">
      <Link href="/access-with-token/form">인증 페이지</Link>
      <Link href="/access-with-token/protected">
        인증해야 접근 가능한 페이지
      </Link>
    </div>
  );
};

export default Page;
