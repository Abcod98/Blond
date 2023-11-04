import "./posts.scss"
import Post  from "../post/Post"

const Posts = () => {

  // TEMPORARY
  const posts = [
    {
      id: 1,
      name: "Abraham",
      userId: 1,
      profilePic: "https://images.pexels.com/photos/7810405/pexels-photo-7810405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, officia?",
      img: "https://images.pexels.com/photos/1744663/pexels-photo-1744663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 2,
      name: "Abraham",
      userId: 1,
      profilePic: "https://images.pexels.com/photos/7810405/pexels-photo-7810405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, officia?",
    },
  ]
  return (
    <div className="posts">
      {posts.map(post => (
        <div className="post">
          <Post post={post} key={post.id}/>
        </div>
      ))}
    </div>
  )
}

export default Posts