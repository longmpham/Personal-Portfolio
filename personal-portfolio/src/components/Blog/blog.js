import React from "react"

import { FaEye, FaEyeSlash } from "react-icons/fa"

import blogData from "./blogData"
import "./blog.css"

const BlogPage = () => {

  const [posts, setPosts] = React.useState(blogData)
  const [loading, setLoading] = React.useState(false)
  
  // have to change blogData.js to a JSON file format for this to work.
  // React.useEffect( () => {
  //   const getPosts = async () => {
  //     setLoading(true);
  //     const response = await fetch(blogData)
  //     console.log(response)
  //     setPosts(response)
  //     setLoading(false)
  //   }
  //   getPosts()
  // },[])

  const handleClick = (id) => {
    setPosts(prevPosts => {
      return prevPosts.map(post => {
        return post.id === id ? { ...post, isShown: !post.isShown }
        : post
      })
    })
  }

  return (
    <>
      <div className="blog-container">
        {/* {!loading &&  */}
        <div className="blog-main">
          {posts.map(post => {
            return (
              <div className="blog-post" key={post.id}>
                <h1 className="blog-title">{post.title}</h1>
                <h6 className="blog-date">{post.date}</h6>
                <button name={post.id} className="blog-show-button" onClick={()=> {handleClick(post.id)}} value={post.isShown}>{post.isShown ? <FaEyeSlash /> : <FaEye /> }</button>
                {!post.isShown && post.body.map((paragraph, index) => {
                  return (
                      <p key={index} className="blog-body">{paragraph}</p>
                  )
                })
              }
              </div>
            )
          })}
        </div>
        {/* } */}
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