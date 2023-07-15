import './index.css'

const CommentItem = props => {
  const {commentDetails, bgColors, toggleIsLiked, onDelete} = props
  const {id, name, comment, timeUpdate, isLiked} = commentDetails
  //   console.log(timeUpdate)
  const initial = name[0]

  const getBgColor = () => {
    const index = Math.floor(Math.random() * bgColors.length)
    const bgColor = bgColors[index]
    return bgColor
  }

  const likeImg = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likeColor = isLiked ? 'blue-text' : ''

  const onClickLike = () => {
    toggleIsLiked(id)
  }

  const onClickDeleteIcon = () => {
    onDelete(id)
  }

  return (
    <li className="comment-container">
      <div className="initial-comment-container">
        <div className="initial-container">
          <p className={`initial ${getBgColor()}`}>{initial}</p>
        </div>
        <div className="name-time-container">
          <div className="name-time">
            <h1 className="name">{name}</h1>
            <p className="time">{timeUpdate}</p>
          </div>
          <p className="comment-text">{comment}</p>
        </div>
      </div>
      <div className="like-btn-container">
        <div className="like-img-container">
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
    </li>
  )
}

export default CommentItem
