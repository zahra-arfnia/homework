import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    
   <div className="flex flex-col justify-center items-center gap-4">
<p className="text-center mt-5 text-lg font-semibold">auth page</p> 
<div className="flex gap-3">
        <Link href="/auth/login" className="bg-red-200 p-2 rounded-sm">login</Link>
        <Link href="/auth/register" className="bg-red-200 p-2 rounded-sm">register</Link>
      </div>
      </div>
  );
}
