import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-2">
      <Link href="/unmount-toast">Unmount Toast</Link>
      <Link href="/access-with-token">Access With Token</Link>
      <Link href="/sanitize">Sanitize</Link>
    </div>
  );
}
