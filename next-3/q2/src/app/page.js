'use client';
import Link from "next/link";

export default function Home() {
  const images = [
    { id: 1, url: "/1.avif" },
    { id: 2, url: "/2.avif" },
    { id: 3, url: "/3.avif" },
    { id: 4, url: "/4.avif" },
    { id: 5, url: "/5.avif" },
    { id: 6, url: "/6.avif" },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-7">
      <p className="text-4xl mt-3">Image Gallery</p>
       <div className="flex w-2/3 flex-wrap items-center justify-center gap-6">
      {images.map((image) => (
        <Link href={`/photo/${image.id}`} key={image.id}>
          <img src={image.url} alt={`Image ${image.id}`} className=" w-60 h-60 cursor-pointer hover:shadow-lg  hover:-translate-y-1 hover:scale-110 transition ease-in-out " />
        </Link>
      ))}
    </div>
    </div>
   
  );
}
