import Image from 'next/image';

const images = {
  1: '/1.avif',
  2: '/2.avif',
  3: '/3.avif',
  4: '/4.avif',
  5: '/5.avif',
  6: '/6.avif',
};

export default function PhotoPage({ params }) {
  const { id } = params;

  return (
    <div className='flex flex-col justify-center items-center gap-8 mt-3'>
        <h1 className='text-3xl'>id : {id}</h1>
      <Image src={images[id]} alt={`Image ${id}`} width={500} height={500} className='w-2/5 h-96'/>
    <button className='p-3 bg-teal-500 text-white rounded-md'>downlod</button>
    </div>
  );
}

