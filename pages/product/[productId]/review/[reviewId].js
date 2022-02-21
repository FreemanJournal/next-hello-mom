import { useRouter } from 'next/router'
import React from 'react'

export default function Product() {
    const router = useRouter();
    const {productId,reviewId} = router.query
  return (
    <div><h1>{reviewId} Review for {productId} Product</h1></div>
  )
}
