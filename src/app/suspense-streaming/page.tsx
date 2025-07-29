import Link from 'next/link';

const Page = async () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-2">
      <Link href="/suspense-streaming/with-suspense">With Suspense</Link>
      <Link href="/suspense-streaming/without-suspense">Without Suspense</Link>
    </div>
  );
};

export default Page;
