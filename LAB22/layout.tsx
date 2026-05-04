import Link from "next/link";
import { ReactNode } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import styles from './styles/layout.module.css'

export default function LAB22Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="navbar bg-dark" data-bs-theme="dark" >

           <ul className="navbar nav" style={{paddingLeft:'20px'}}>
              <li className="nav-item">
                <Link href="/LAB22/login" style={{ textDecoration: 'none', color: 'white' }}>Login</Link>
                &nbsp;
              </li>
              <li className="nav-item">
                <Link href="/LAB22/das" style={{ textDecoration: 'none', color: 'white' }}>Dashboard</Link>
                &nbsp;
              </li>
            </ul>
        </div>
      <div style={{ margin:'30px'}}>
      {children}
      </div>
    </>
  );
}