import Link from 'next/link';

export default function Header() {
  return (
    <header  style={styles.header}>
      <nav className='flex justify-around text-gray-500'>
        <Link href="/">Home</Link>
        <Link href="/about" >About</Link>
        <Link href="/store" >store</Link>
        <Link href="/support" >support</Link>
        <Link href="/auth">auth</Link>
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