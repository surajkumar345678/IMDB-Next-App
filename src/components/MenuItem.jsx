import Link from 'next/link';

export default function MenuItem({ title, address, Icon }) {
  return (
    <Link href={address} passHref>
      <div className='flex items-center gap-1 hover:text-amber-500'>
        {/* Render the icon */}
        <Icon className="text-2xl sm:hidden" />
        {/* Render the text (hidden on small screens) */}
        <p className='uppercase hidden sm:inline text-sm'>{title}</p>
      </div>
    </Link>
  );
}
