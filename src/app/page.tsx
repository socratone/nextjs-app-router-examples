import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Link href="/pop-toastify">Pop Toastify</Link>
    </div>
  );
}
