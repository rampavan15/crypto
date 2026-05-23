import Link from 'next/link'
import React from 'react'
import Image from "next/image"
const Header = () => {
  return (
    <Header>
        <div className='main-container inner'>
            <Link href="/">
              <Image  src="/assetts/logo.svg"  alt="crypto"/>
            </Link>
        </div>
    </Header>
  )
}

export default Header
