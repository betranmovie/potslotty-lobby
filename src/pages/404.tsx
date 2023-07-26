import Link from 'next/link';

export default function FourOhFour() {
  return (
    <div className='h-screen'>
      <h1 className='text-white'>404 - Page Not Found</h1>
      <Link href="/">
        <p className='text-white'>Go back home</p>
      </Link>
    </div>
  );
}
