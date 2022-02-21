import Link from 'next/link'
import React from 'react'

export default function Blog() {
    return (
        <>
            <h1>Blog Page</h1>
            <h1>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </h1>
        </>
    )
}
