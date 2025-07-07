import { Suspense } from 'react';
import FormPage from './form-page';

const Page = () => {
  return (
    <Suspense>
      <FormPage />
    </Suspense>
  );
};

export default Page;
