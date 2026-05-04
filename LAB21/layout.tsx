import Link from "next/link";
import { ReactNode } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import styles from './styles/layout.module.css'

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
                <Link href="/LAB21/templete1" style={{ textDecoration: 'none', color: 'white' }}>Templete 1</Link>
                &nbsp;
              </li>
              <li className="nav-item">
                <Link href="/LAB21/templete2" style={{ textDecoration: 'none', color: 'white' }}>Templete 2</Link>
                &nbsp;
              </li>
              <li className="nav-item">
                <Link href="/LAB21/templete3" style={{ textDecoration: 'none', color: 'white' }}>Templete 3</Link>
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