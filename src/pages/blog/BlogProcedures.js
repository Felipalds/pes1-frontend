import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const BlogProcedures = () => {
    const params = useParams()
    const [ blog, setBlog ] = React.useState({name: "", description: ""})

    React.useEffect(() => {
      if(blog.name === "")
      axios
      .get(`http://localhost:3001/procedures/${params.slug}`)
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

export default BlogProcedures