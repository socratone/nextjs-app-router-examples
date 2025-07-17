'use client';

import { useEffect } from 'react';
import { AUTH_TOKEN } from '../constants';
import Cookies from 'js-cookie';

/**
 * 클라이언트 사이드에서 쿠키를 삭제하는 컴포넌트
 * 컴포넌트가 마운트될 때 지정된 쿠키를 삭제함
 */
export default function CookieCleaner() {
  useEffect(() => {
    Cookies.remove(AUTH_TOKEN, { path: '/' });
  }, []);

  return null;
}
