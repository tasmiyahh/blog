import React from 'react'
import Link from 'next/link'
import styles from "@/styles/navbar.module.css"

function Navbar() {
  return (
    <div className={styles.navbar}>
        <ul>
            <li>
                <Link href={"/"}>home</Link>
            </li>
            <li>
                <Link href={"/about"}>About</Link>
            </li>
            <li>
                <Link href={"/blog"}>blog</Link>
            </li>
            
        </ul>

    </div>
  )
}

export default Navbar