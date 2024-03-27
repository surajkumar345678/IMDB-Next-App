'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import from next/navigation instead of next/router

export default function SearchBox() {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim() !== '') {
      router.push(`/search/${encodeURIComponent(search.trim())}`);
    }
  };

  return (
    <form
      className='flex justify-between px-5 max-w-6xl mx-auto'
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        placeholder='Search keywords...'
        className='w-full h-14 rounded-md mt-4 placeholder-gray-500 outline-none bg-transparent flex-1'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type='submit'
        className='text-amber-600 disabled:text-gray-400'
        disabled={search.trim() === ''}
      >
        Search
      </button>
    </form>
  );
}
