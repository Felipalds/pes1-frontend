import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const BlogProfessionals = () => {
    const params = useParams()
    const [ blog, setBlog ] = React.useState({name: "", description: ""})

    React.useEffect(() => {
      if(blog.name === "")
      axios
      .get(`http://localhost:3001/professionals/${params.slug}`)
      .then(res => {
          setBlog(res.data)
      })
      }
    )
  return (
    <>
        <h1>Blog {blog.name}</h1>
        <p>{blog.description}</p>
    </>
  )
}

export default BlogProfessionals