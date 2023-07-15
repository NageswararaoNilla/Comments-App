import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {commentDetails, toggleIsLiked, onDelete} = props
  const {
    id,
    name,
    comment,
    timeUpdate,
    isLiked,
    initialClassName,
  } = commentDetails
  //   console.log(timeUpdate)
  const initial = name ? name[0].toUpperCase() : ''

  //   const getBgColor = () => {
  //     const index = Math.floor(Math.random() * bgColors.length)
  //     const bgColor = bgColors[index]
  //     return bgColor
  //   }

  const likeImg = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likeColor = isLiked ? 'blue-text' : ''

  const postedTime = formatDistanceToNow(timeUpdate)

  const onClickLike = () => {
    toggleIsLiked(id)
  }

  const onClickDeleteIcon = () => {
    onDelete(id)
  }

  return (
    <li className="comment-container">
      <div className="initial-comment-container">
        <div className={`initial-container  ${initialClassName}`}>
          <p className="initial">{initial}</p>
        </div>
        <div className="name-time-container">
          <div className="name-time">
            <p className="name">{name}</p>
            <p className="time">{postedTime}</p>
          </div>
          <p className="comment-text">{comment}</p>
        </div>
      </div>
      <div className="buttons-container">
        <div className="like-container">
          <img src={likeImg} alt="like" className="like-img" />
          <button
            type="button"
            className={`like-btn ${likeColor}`}
            onClick={onClickLike}
          >
            Like
          </button>
        </div>
        <button
          type="button"
          className="delete-btn"
          data-testid="delete"
          onClick={onClickDeleteIcon}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png "
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
      <hr className="comment-line" />
    </li>
  )
}

export default CommentItem
