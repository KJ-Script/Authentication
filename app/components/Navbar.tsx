import Link from 'next/link'
import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className="space-x-4 text-center">
        <Link href="/">Home</Link>
        <Link href="/login">login</Link>
        <Link href="/signup">signup</Link>

    </nav>
  )
}

export default Navbar