import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// const initialComments = [
//   {
//     id: uuidv4(),
//     name: 'Richard Branson',
//     comment:
//       'Thanks for being so typically supportive and such a good friend,Elon.Great to be opening up space for all.',
//     timeUpdate: formatDistanceToNow(new Date()),
//     isLiked: false,
//   },
// ]

// Write your code here
const commentImg =
  'https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png'

class Comments extends Component {
  state = {commentsList: [], name: '', comment: ''}

  onDelete = id => {
    const {commentsList} = this.state
    const updateResults = commentsList.filter(each => id !== each.id)
    this.setState({
      commentsList: updateResults,
    })
  }

  toggleIsLiked = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(each => {
        if (id === each.id) {
          return {...each, isLiked: !each.isLiked}
        }
        return each
      }),
    }))
  }

  onSubmitComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    // const timeUpdate = formatDistanceToNow(new Date())
    const col =
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      timeUpdate: new Date(),
      isLiked: false,
      initialClassName: col,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  onName = event => {
    this.setState({
      name: event.target.value,
    })
  }

  onComment = event => {
    this.setState({
      comment: event.target.value,
    })
  }

  render() {
    const {commentsList, name, comment} = this.state
    const len = commentsList.length
    // const bgColor = this.getBgColor()
    // console.log(commentsList, bgColor)
    return (
      <div className="app-container">
        <div className="comments-banner-container">
          <h1 className="heading">Comments</h1>
          <div className="comments-inputs">
            {/* <div className="img-container"> </div> */}
            {/* <div className="input-container"> </div> */}
            <form className="form-container" onSubmit={this.onSubmitComment}>
              <p className="form-description">
                Say something about 4.0 Technologies
              </p>
              <input
                type="text"
                placeholder="Your Name"
                className="user-name"
                onChange={this.onName}
                value={name}
              />
              <textarea
                rows="6"
                placeholder="Your Comment"
                className="input-comment"
                onChange={this.onComment}
                value={comment}
              />
              <button type="submit" className="btn">
                Add Comment
              </button>
            </form>
            <img src={commentImg} alt="comments" className="comments-img" />
          </div>
          <hr className="hr-line" />
          <p className="count-heading">
            <span className="count">{len}</span>Comments
          </p>
          <ul className="comments-list">
            {commentsList.map(eachComment => (
              <CommentItem
                commentDetails={eachComment}
                key={eachComment.id}
                bgColors={initialContainerBackgroundClassNames}
                toggleIsLiked={this.toggleIsLiked}
                onDelete={this.onDelete}
              />
            ))}
          </ul>
        </div>
        {/* <div className="comments-list-container"></div> */}
      </div>
    )
  }
}

export default Comments
