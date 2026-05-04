import Link from "next/link";
import { ReactNode } from "react";
import styles from  "./styles/layout.module.css"

export default function LAB20Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="navbar bg-dark" data-bs-theme="dark" >

           <ul className="navbar nav" style={{paddingLeft:'20px'}}>
              <li className="nav-item">
                <Link href="/LAB20/home" style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
                &nbsp;
              </li>
              <li className="nav-item">
                <Link href="/LAB20/about" style={{ textDecoration: 'none', color: 'white' }}>About</Link>
                &nbsp;
              </li>
              <li className="nav-item">
                <Link href="/LAB20/contact" style={{ textDecoration: 'none', color: 'white' }}>Contact</Link>
                &nbsp;
              </li>
            </ul>
        </div>
        
        
      <div style={{margin:'30px'}}>
      {children}
      </div>
    </>
  );
}