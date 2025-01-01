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
console.log("liyjnuytfuytf");

  return (
    <div className='modal-overlay ' style={{ textAlign: 'center', padding: '20px' }}>
      <div className='modal-content h-3/4'>
        <Image src={images[id]} alt={`Image ${id}`} width={400} height={100} className='h-5/6'/>
      <h1 className='mt-6'>id: {id}</h1>
      </div>
      
    </div>
  );
}

