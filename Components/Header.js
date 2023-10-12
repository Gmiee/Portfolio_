import React from 'react'
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';
const Header = () => {
  return (
    <>
    <nav className=''>
        <ul>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/Skills">Skills</Link>
          </li>
          <li><Link href='/Projectss'>Projects</Link></li>
          <li> <Link href='/Contact'>Contact</Link> </li>
          {/* <li><Link href='/Chill'>ChillZone</Link></li> */}
        </ul>
      </nav>

    </>
  )
}

export default Header
