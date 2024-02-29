'use client'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname()

    return (
        <nav className='navbar'>
            <Link className={`link ${pathname === '/' ? 'active' : ''}`} href='/'>Home</Link>
            <Link className={`link ${pathname === '/project' ? 'active' : ''}`} href='/project'>Projects</Link>
            <Link className={`link ${pathname === '/about' ? 'active' : ''}`} href='/about'>About</Link>
        </nav>
    )
}