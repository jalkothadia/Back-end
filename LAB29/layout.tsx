import Link from "next/link";
import { ReactNode } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import styles from './styles/layout.module.css'

export default function LAB29Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="navbar bg-dark" data-bs-theme="dark" >

           <ul className="navbar nav" style={{paddingLeft:'20px'}}>
              <li className="nav-item">
                <Link href="/LAB29/client-component" style={{ textDecoration: 'none', color: 'white' }}>client_component</Link>
                &nbsp;
              </li>
              <li className="nav-item">
                <Link href="/LAB29/calc" style={{ textDecoration: 'none', color: 'white' }}>Basic calculator</Link>
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