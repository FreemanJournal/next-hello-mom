import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export default function Home() {
  const router = useRouter();
  
  function clickHandler(){
    // router.push("/product")
    router.replace("/product")
  }
  return (
    <div style={{padding:"2em"}}>
      <h1>Home Page</h1>
      <h1>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </h1>
      <h1>
        <Link href="/product">
          <a>Products</a>
        </Link>
      </h1>


      <button type='button' style={{ padding: '1em 2em', background: "#1B98F5", borderRadius: "8px", border: "0", color: 'white' }} onClick={clickHandler}>Place Order</button>


    </div>
  )
}
