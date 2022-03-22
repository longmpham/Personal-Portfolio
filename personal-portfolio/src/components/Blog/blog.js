import React from "react"

import blogData from "./blogData"
import "./blog.css"

const BlogPage = () => {

  const [posts, setPosts] = React.useState(blogData)
  // console.log(post)


  return (
    <>
      <div className="blog-container">
        <div className="blog-main">
          {posts.map(post => {
            return (
              <div className="blog-post" key={post.id}>
                <h1 className="blog-title">{post.title}</h1>
                <h6 className="blog-date">{post.date}</h6>
                {post.body.map(paragraph => {
                  return (
                    <p className="blog-body">{paragraph}</p>
                  )
                })}
              </div>
            )
          })}
        </div>
        {/* sidebar needs links (react useRef might be useful here...) */}
        {/* <div className="blog-sidebar">
        {posts.map(post => {
            return (
              <div className="blog-sidebar" key={post.id}>
                <h1 className="blog-title">{post.title}</h1>
                <h6 className="blog-date">{post.date}</h6>
              </div>
            )
          })}
        </div> */}
      </div>
    </>
  )
}

export default BlogPage