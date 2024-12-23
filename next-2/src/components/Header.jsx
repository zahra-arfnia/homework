"use client";
import Link from 'next/link';
import { usePathname } from "next/navigation";
export default function Header() {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Store", path: "/store" },
    { name: "Support", path: "/support" },
    { name: "auth", path: "/auth" },
    
  ];
  const path = usePathname()
  console.log(path);
  
  return (
    <header  style={styles.header}>
      <nav className='flex justify-around text-gray-500'>
        {links.map((item)=>(
          <Link key={item.name} href={item.path} className={path === item.path ?"active-link": ""}>{item.name}</Link>
        ))}
      </nav>
    </header>
  );
}
const styles = {
    header: {
      backgroundColor: '#F3D0D7',
      padding: '10px 20px',
      color: '#fff',
      
  }}