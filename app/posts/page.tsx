import React from 'react'

const getPost = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  
  if(!response.ok){
    throw new Error('fallo el get')
  }
  
  return response.json()
}

const Posts = async () => {

  const posts = await getPost()

  return (
    <div>
      <h1>posts</h1>
      <ul>
        {
          posts.map( (post : any) => (
            <li key={post.id}>
              {post.title}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Posts
