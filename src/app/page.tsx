import Link from 'next/link';

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center p-4'>
      <main className='p-8 max-w-md w-full text-center'>
        <h1 className='text-3xl font-medium text-gray-900 mb-10'>格格记 - EasyHabit</h1>
        <ul className='space-y-4'>
          <li>
            <Link href='/privacy-policy'>隐私政策</Link>
          </li>
          <li>
            <Link href='/term-of-use'>用户协议</Link>
          </li>
        </ul>
      </main>
    </div>
  );
}
