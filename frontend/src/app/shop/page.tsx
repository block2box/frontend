import { redirect } from 'next/navigation'
import React from 'react'

function page() {
  redirect('/shop/pack')
  return (
    <></>
  )
}

export default page