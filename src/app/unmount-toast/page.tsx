'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

/**
 * 페이지를 벗어날 때 토스트가 사라지는 예제입니다.
 *
 * 컴포넌트가 마운트될 때, React.StrictMode의 마운트/언마운트/재마운트 사이클로 인해
 * 토스트 메시지가 바로 사라지는 현상을 방지하기 위해 setTimeout을 사용하여 토스트 호출을 지연시킵니다.
 *
 * 컴포넌트가 언마운트될 때는 정리 함수가 호출되며, clearTimeout으로 타이머를 제거하고
 * 페이지를 벗어날 때 열려있는 모든 토스트 메시지를 닫습니다.
 */
const Page = () => {
  useEffect(() => {
    // React.StrictMode에서 마운트/언마운트/재마운트 사이클로 인해 토스트가 바로 사라지는 현상을 방지하기 위해
    // setTimeout을 사용하여 토스트 호출을 잠시 지연시킵니다.
    const timer = setTimeout(() => {
      toast('안녕하세요', {
        position: 'bottom-center',
        autoClose: false,
      });
    }, 1);

    // 컴포넌트가 언마운트될 때(페이지를 벗어날 때) 실행될 정리 함수입니다.
    return () => {
      // 컴포넌트가 빠르게 언마운트될 경우 토스트가 생성되는 것을 방지합니다.
      clearTimeout(timer);
      // 페이지를 벗어날 때 열려있는 모든 토스트 메시지를 닫습니다.
      toast.dismiss();
    };
  }, []);

  return (
    <div className="flex flex-col gap-2 justify-center items-center h-screen">
      <Link href="/">홈</Link>
    </div>
  );
};

export default Page;
