import React from 'react'
import { useParams } from 'react-router-dom'

const Blog = () => {
    const params = useParams()
  return (
    <h1>Blog {params.id}</h1>
  )
}

export default Blog