const getData = async (delay: number) => {
  await new Promise((resolve) => setTimeout(resolve, delay));
  return delay + 'ms 후에 반환된 데이터';
};

export const dynamic = 'force-dynamic';

const Page = async () => {
  const data = await getData(1000);

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-2">
      <p>{data}</p>
    </div>
  );
};

export default Page;
