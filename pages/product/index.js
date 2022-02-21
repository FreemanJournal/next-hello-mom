import Link from 'next/link';
import React from 'react'

export default function ProductList() {
  console.log([...Array(4)]);
  return (
    <div>
      {[...Array(5).keys()].map((item, i) => (
        <h2 key={i}>
          <Link href={`product/${item + 1}`}>
            <a>Product - {item + 1}</a>
          </Link>
        </h2>
      ))}
      <h1>
        <Link href={`product/6`} replace>
          <a>Product - 6</a>
        </Link>
      </h1>


    </div>
  )
}
