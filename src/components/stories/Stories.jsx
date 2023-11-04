import { useContext } from "react"
import "./stories.scss"
import {AuthContext} from "../../context/authContext"

const Stories = () => {

  const {currentUser} = useContext(AuthContext)

  // TEMPORARY

  const stories = [
    {
      id: 1,
      name: "Abraham",
      img: "https://images.pexels.com/photos/3292366/pexels-photo-3292366.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      id: 2,
      name: "Abraham",
      img: "https://images.pexels.com/photos/3292366/pexels-photo-3292366.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      id: 3,
      name: "Abraham",
      img: "https://images.pexels.com/photos/3292366/pexels-photo-3292366.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      id: 4,
      name: "Abraham",
      img: "https://images.pexels.com/photos/3292366/pexels-photo-3292366.jpeg?auto=compress&cs=tinysrgb&w=1600"
    }
  ]
  return (
    <div className="stories">
      <div className="story">
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
          <button>+</button>
        </div>
      {stories.map(story =>(
        <div className="story">
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories