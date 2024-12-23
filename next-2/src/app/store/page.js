import Image from "next/image";
import Link from "next/link";
export default function page() {
  return (
    <div className="flex flex-col gap-5 items-center justify-center ">
      <p className="text-center mt-5 text-lg font-semibold">store page</p> 
      
      <Link href="/store/shoes" className="bg-red-200 p-2 rounded-sm ">shoes</Link>
    </div>

  );
}
