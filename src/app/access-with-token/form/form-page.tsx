'use client';

import Button from '@/components/atom/Button';
import TextField from '@/components/atom/TextField';
import { useRouter, useSearchParams } from 'next/navigation';
import { useRef } from 'react';
import { toast } from 'react-toastify';

const FormPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect =
    searchParams.get('redirect') || '/access-with-token/protected';

  const phoneRef = useRef<HTMLInputElement>(null);
  const verificationCodeRef = useRef<HTMLInputElement>(null);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const phone = phoneRef.current?.value;
    const verificationCode = verificationCodeRef.current?.value;

    if (!phone || !verificationCode) {
      toast('전화번호와 인증번호를 입력해주세요', {
        position: 'bottom-center',
      });
      return;
    }

    router.push(
      `/access-with-token/callback?phone=${phone}&verificationCode=${verificationCode}&redirect=${redirect}`
    );
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-2">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 items-center"
      >
        <label className="flex gap-2 items-center">
          <span>전화번호</span>
          <TextField ref={phoneRef} />
        </label>
        <label className="flex gap-2 items-center">
          <span>인증번호</span>
          <TextField ref={verificationCodeRef} />
        </label>
        <Button type="submit">인증</Button>
      </form>
    </div>
  );
};

export default FormPage;
